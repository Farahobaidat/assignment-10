let arr=['f',15,0,-9,'f','p',5,7,'p','p',3,4,8,'f','f'];
let count=0, times=1,frequent;
for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
        if(arr[i]==arr[j])
            count++;
        if(count>times){
            times=count;
            frequent=arr[i];
        }
        
        
    }
    count=0;
 } 
alert(frequent);