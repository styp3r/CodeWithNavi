/* 
Problem #5: 


2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

var flag = 0;
var count = 0;

for(let i = 1; i >= 1; i++){
    for(let j = 1; j <=20; j++){
        if(i%j == 0){
            count++;
            if(count === 20){
                flag = 1;
                console.log(i);
                break;
            }
        } else{
            count = 0;
        }
    }

    if(flag == 1){
        break;
    }
}

