let a= prompt('enter a number  ',) || 0;
let sum=0;
for(let i=0;i<a.length;i++){
    sum+=a[i]**3;
}
if(sum == a){
    alert("Narcissistic Number");
}
  else{
     alert("Not Narcissistic Number");
  }
