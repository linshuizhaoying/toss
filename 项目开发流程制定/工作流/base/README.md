## 基础版本workflow
### 1.支持多页面 
### 2.支持单元测试
### 3.支持自动打包
### 4.支持增量式打包
### 5.支持sass格式
### 6.支持css,js压缩
### 7.支持ES6语法
### 8.支持异步刷新

## 开发说明

目录结构：

```

├── Doc
│   └── 项目文档.md
├── README.md
├── gulpfile.js
├── package.json
├── src
│   ├── js
│   │   ├── contact
│   │   │   └── contact.js
│   │   ├── index
│   │   │   └── test.js
│   │   └── lib
│   │       └── jquery.js
│   ├── sass
│   │   ├── _reset.scss
│   │   ├── contact
│   │   │   └── header.scss
│   │   └── index
│   │       └── index.scss
│   ├── static
│   │   ├── fonts
│   │   └── images
│   │       └── bg.png
│   └── views
│       ├── contact
│       │   ├── about.html
│       │   └── contact.html
│       ├── hello.html
│       └── index
│           └── index.html
└── test
    ├── contact-test.js
    └── index-test.js

```

### 项目开发文档使用方式请看博客文章。

### 具体开发
`src`目录的`view`目录下创建对应页面文件夹，比如`index`，然后`src`目录对应的`sass`和`js`目录都要创建相同名称的页面文件夹`index`，里面放内容即可。

html引入内容格式如下：

```
css:
<link rel="stylesheet" href="../../css/index/index.css">

js:
<script src="../../js/index/test.js"></script>

最终编译输出后为：
<link rel="stylesheet" href="../../css/index/index-a9269d5221.css">

<script src="../../js/index/test-bf0591bb41.js"></script>


```

## 开发方式

### 下载依赖 `npm i`

### 开发模式 `npm run dev`
### 编译输出 `npm run build`
### 单元测试 `npm run mocha`
### 单元测试监听 `npm run test`

## 需要其它功能可以自己修改Gulpfile


