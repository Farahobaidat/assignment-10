// let array=[0,5,9,15,25,-16,78,3,-12,-7,11,45,1,6,55,33,-9,3,0,10];
// function arr(a){
// for(let i=0;i<array.length;i++){
//   if(array[i]%2==0){
//       console.log(array[i]+"is even");
//   }
//   else{
//     console.log(array[i]+" is odd");
//   }
// }
// }
// arr(array);
let array=[0,5,9,15,25,-16,78,3,-12,-7,11,45,1,6,55,33,-9,3,0,10];
function arr(a){
let odd=a.filter(value=>{return value%2 ==1});
let even=a.filter(x=>{return x%2==0});
return ("is odd "+odd+"  "+"is even "+even)
}
console.log(arr(array));