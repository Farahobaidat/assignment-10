// let array=[0,5,9,15,25,-16,78,3,-12,-7,11,45,1,6,55,33,-9,3,0,10];
// function summ(arr){
// let sum=0;
// for(let i=0;i<array.length;i++){
//     sum+=array[i];
    
// }
// let avg=sum/(array.length);
//  alert("The average is"+ avg);
// }
// summ(array);

let array=[0,5,9,15,25,-16,78,3,-12,-7,11,45,1,6,55,33,-9,3,0,10];
function avr(arr){
let sum=arr.reduce(((acc, num) => acc + num), 0);
let avg=sum/(array.length);
 return ("The average is"+ avg+"  "+sum);
}
console.log(avr(array));
