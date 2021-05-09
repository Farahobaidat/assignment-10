// function even(a){
// let evennumber=" ";
// for(let i=1 ;i<=20;i++){
//     if(i%2==0){
//         evennumber+= i+",";
//     }
// }

// console.log(evennumber);}
// even();
// function even(){
//     let number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//     let evennumber=number.filter(value =>{
//         return value%2==0
//     })
//     return evennumber;}
//     console.log(...even());
    function printNos(n)
    {
        even="";
        if(n > 0)
        {
            even+=(n + " ");
            printNos(n - 1);
            return even;
        }
        return ;
        
    }
     
    console.log(printNos(20));//n=20