/* 23_5-3 Explore Factorial Recursion using a for loop concept
 */

function factorial(i){
    if (i == 1){
        return 1;
    }
return i * factorial (--i);

}
console.log( factorial (5))
// -----------------
function factoriala(i){
    if (i == 1){
        return 1;
    }
return i * factoriala (--i);

}
console.log( factoriala (10))