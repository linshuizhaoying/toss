var len = 10
var arr = "1 3 1 2 5 4 3 1 9 10".split(' ')

var findCenter = false
var result = []
for(var i = 1;i<arr.length-1;i++){
    // 先找递增的
   if(arr[i-1]< arr[i] && arr[i] <arr[i+1] && findCenter == false){
   	 result.push(i-1)
     result.push(i)
   }
    // 找到高峰而且前面有元素

   if(arr[i-1] < arr[i] && arr[i] > arr[i+1] && result.length >0 && i - result[result.length -1] == 1){
      findCenter = true
      result.push(i)
   }
    // 如果是相邻的
  
   if(i - result[result.length -1] == 1 && arr[i]<arr[i-1] ){
      result.push[i]
   }
    console.log(i)


}
console.log(result)

