// var n=79;

// for(i = 2; i<= n-1; i++){
//     console.log(i, n%i);
//     if(n%i ==0){
//         console.log("not a prime number");
//         break;
 
//     }
//     console.log("your number is a prime number");

// }

var n = 128;
function isPrime(n){
    for(i = 2; i < n; i++){
        if(n % i == 0){
            return "Not a prime Number"
        }
    }
    return "Your number is a prime Number "
}

var result = isPrime(123);
console.log(result);