
// Sum Of even and odd from a number
const printEvenOddSum=(num)=>{
    let arr=num.toString().split("");
    let sumEven=0;
    let sumOdd=0;
    arr.forEach((val)=>{
        if(val%2===0){
           sumEven+=parseInt(val); 
        }else{
            sumOdd+=parseInt(val); 
        }
    })
    console.log(sumEven,sumOdd)
}

printEvenOddSum(1234567)