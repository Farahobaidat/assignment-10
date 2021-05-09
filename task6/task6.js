// function numb(num){
// let a= prompt('enter a number  ',) || 0;
// let sum=0;
// for(let i=0;i<a.length;i++){
//     sum+=a[i]**a.length;
// }
// if(sum == a){
//     alert("Narcissistic Number");
// }
//   else{
//      alert("Not Narcissistic Number");
//   }
// }
// numb();
function numb(){
  let a= prompt('enter a number  ',) || 0;
  let arr=a.split("");
  let sum1=arr.map((value)=> value**arr.length);
  let sum=sum1.reduce(((acc, num) => acc + num), 0);
  if(sum == a){
      return("Narcissistic Number"+sum);
  }
  return "Not Narcissistic Number";
  }
  console.log(numb());