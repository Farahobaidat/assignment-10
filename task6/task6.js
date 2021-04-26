
while(true){
    let a= prompt('enter a number  ',) || 0;
    let sum=0;
     let digit=a;
    while(digit>0){
        let remainder = digit % 10;
       sum += Math.pow(remainder,3);
        digit= parseInt(digit / 10);
    }
    if(sum == a){
        alert("Narcissistic Number");
    }
      else{
         alert("Not Narcissistic Number");
      }

} 