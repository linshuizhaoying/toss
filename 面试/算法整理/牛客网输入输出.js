//多行的输入
process.stdin.resume();
process.stdin.setEncoding('ascii');
var input = "";
var input_array = "";
process.stdin.on('data', function(data){
    input += data;//这里的data保存的是以换行\n所有的加起来的一个字符串
});
//如下表示每个用例有三行的时候的结果

//注意：假如有数组的时候，数组内保存的是字符串形式，需要添加 + 来转化成真正的数字。

//以回车来分割 //到这个地方会把每行都当成一个字符串保存到一个数组中去，数组的最后一项是一个空字符"", 

//所以按照题目给定，依次把数组的元素赋值给变量就行了 //这里就要观察所给用例的特征了，依次来进行输出 
process.stdin.on('end', function (){
    input_array = input.split("\n"); //以回车来分割的
    var line_1 = input_array[0];
    var line_2 = input_array[1];
    var line_3= input_array[2];    
    console.log(line_1);
});