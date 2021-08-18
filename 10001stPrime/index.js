/* Problem #7:


By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/



var count = 0;
var isPrime = 0;

    for(let i = 2; i > 1; i++){
        for(let j = 1; j <=i; j++){
            if(i%j === 0){
                count++;
            }
        }

        if(count === 2){
            isPrime++;
            lastPrime = i;
            console.log(i);
            if(isPrime === 10001){
                break;
            }
        }

        count = 0;
    }

console.log("Prime Nos = "+isPrime);
console.log("10001st prime no = "+lastPrime);
