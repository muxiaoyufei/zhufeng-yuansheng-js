/***
 * 
 * https://blog.csdn.net/qq_35895679/article/details/105904369
 * 变量提升：在当前上下文中（全局、私有、块级），js
 * 
 */
// console.log("a" in window)
// if("a" in window){
//   console.log("1111111111",window.a)
// }
// var foo = 1;
// function bar(){
//   if(!foo){
//     var foo = 10;
//   }
//   console.log(foo);
// }
// bar();
// if("a" in window){
//   var a = 1;
//   function func(){}
// }
// console.log("a" in window)

// fn();
// function fn(){
//   console.log("1");
// }
// fn();
// function fn(){
//   console.log("2");
// }
// fn();
// var fn= function(){
//   console.log("3");
// }
// fn();
// function fn(){
//   console.log("4");
// }
// fn();
// function fn(){
//   console.log("5");
// }
// fn();
var foo = 1;
function bar(){
  console.log("!foo",foo)
  if(!foo){
    var foo = 10;
  }
  
  console.log(foo);
}
// console.log(foo);
bar();
// console.log(foo);
// var foo = 1;
// function bar(){
//   console.log("!foo",foo)
//   if(false){
//     var foo = 10;
//   }
  
//   console.log(foo);
// }
// bar();