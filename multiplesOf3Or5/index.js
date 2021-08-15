/*
Problem #1:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

var [sum3, sum5] = [0,0];

for(let i = 1; i <1000; i++){
   i%3 == 0? (i%3 == i%5? null:sum3+= i): null;
   i%5 == 0? (sum3+= i): null;

}
console.log(sum3+sum5);