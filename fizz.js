 for(let i = 1; i <= 100; i++){
     

    if(i % 5 == 0 && i % 3 == 0){
        console.log('FizzBuzz')
    }else if (i % 3 == 0){
         console.log('Fizz');
    } else if(i % 5 ==0){
            console.log('Buzz');
    } else{
        console.log('The number is', i);
    }
}



 





// Project - FizzBuzz
// Write a program that logs to the console the numbers from 1 to 100. But for multiples of three log “Fizz” instead of the number and for the multiples of five log “Buzz”. For numbers which are multiples of both three and five log “FizzBuzz”.