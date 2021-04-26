let array=[0,5,9,15,25,-16,78,3,-12,-7,11,45,1,6,55,33,-9,3,0,10];
let largest=array[0];
for(let i=0;i<array.length;i++){
  if(largest<=array[i]){
      largest=array[i];
  }
}

 alert("The largest number"+largest);
