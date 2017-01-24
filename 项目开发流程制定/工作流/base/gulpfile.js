/*
  Date:2017/1/23
  Author:LinShuiZhaoying
 */

/* 依赖包加载 	*/
const path = require('path');
const gulp = require('gulp');

const ugjs = require('gulp-uglify'); //压缩javascript文件,减小文件大小
const watch = require('gulp-watch'); //监视文件变化,自动执行
const webpackStream = require('webpack-stream'); //集成webpack流
const webpack = require('webpack');
const named = require('vinyl-named'); //该插件保证webpack生成的文件名能够和原文件对上
const del = require('del');
const watchPath = require('gulp-watch-path'); //当文件夹文件很多时，可以利用 gulp-watch-path “一对一”编译
const replace = require('gulp-replace'); //字符串替换

const rev = require('gulp-rev'); //给静态文件加hash散列
const ifElse = require('gulp-if-else'); //添加判断
const browserSync = require('browser-sync').create();//异步刷新重载浏览器
const base64 = require('gulp-base64');//将图片转为base4格式
const runSequence = require('run-sequence');//运行一个序列的任务
const bsReload = browserSync.reload;
const postcss = require('gulp-postcss'); //postcss本身
const autoprefixer = require('autoprefixer');
const precss = require('precss'); //提供像scss一样的语法
const cssnano = require('cssnano');  //更好用的css压缩!
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const revCollector = require('gulp-rev-collector'); //给资源文件加时间戳，rev替换文件名

/* 主文件 	*/

var webpackConfig = {
	resolve: {
		root: path.join(__dirname, 'node_modules'),
		alias: {
			components: '../../components' // 组件别名,js里引用路径可直接 'components/xxx/yyy'
		},
		extensions: ['', '.js', '.vue', '.scss', '.css']
	},
	output: {
		// publicPath: 'yourcdnlink/static/',
		filename: 'js/[name].js',
		chunkFilename: 'js/[id].js?[hash]'
	},
	module: {
		noParse: [/vue.js/],
		loaders: [
			// 这里不需要vue，先注释掉
			// {test: /\.vue$/, loader: 'vue'},
			{test: /\.js$/, loader: 'babel', exclude: /node_modules/},
			{
				test: /\.(png|jpe?g|gif)(\?.*)?$/,
				loader: 'url',
				query: {
					limit: 5000, // 换成你想要得大小
					name: 'images/[name].[ext]?[hash:10]'
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
				loader: 'url',
				query: {
					limit: 5000, // 换成你想要得大小
					name: 'fonts/[name].[hash:7].[ext]'
				}
			}
		]
	},
	plugins: [],
	babel: { //配置babel
		"presets": ["es2015",'stage-2'],
		"plugins": ["transform-runtime"]
	}
};

const processes = [
	autoprefixer({browsers: ['last 2 version', 'safari 5', 'opera 12.1', 'ios 6', 'android 4', '> 10%']}),
	precss,
	cssnano
];
