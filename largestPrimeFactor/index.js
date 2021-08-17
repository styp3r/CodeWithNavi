/* 
Problem #3:

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

count = 0;
var largestPrime = 0;

for(let i = 2; i < 600851475143; i++){
    for(let j = 1; j <= i; j++){
        if(i%j === 0){
            count++;
        }
    }

    if(count === 2){
        if(600851475143%i === 0){
            largestPrime = i;
            console.log(largestPrime);
        }
        count = 0;
    }
    else{
        count = 0;
    }
}

console.log("Largest prime factor of 600851475143 is = " + largestPrime);