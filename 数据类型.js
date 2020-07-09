// let res = parseFloat('left:200px');  // => NaN
// if(res===200){
//   alert(200);
// }else if(res === NaN){
//   alert(NaN);
// }else if(typeof res === 'number'){
//   alert('number');  // =>"number" alert输出的结果都会转换为字符串
// }else{
//   alert('Invalid Number')
// }

// 面试题
console.log([] == false);
// 对象==布尔  都转换为数字(隐式转换)
// 对象转换为数字：先toString 转换为字符串(应该是先基于valueOf获得原始值，没有原始值再去toString),再转换为数字的
// [] ——> '' ——> 0
// false ——> 0   true ——> 1
// => true
console.log(![] == false);
// ![] 把数组转换为布尔类型然后取反 false
// false == false
// => true