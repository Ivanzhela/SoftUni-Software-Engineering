function sumPrimeNonPrime(input) {
let index = 0;
let primeSum = 0
let numPrime = 0;
while(input[index] !== "stop") {
    let curentNum = Number(input[index]);
    if(curentNum <0) {
        console.log(`Number is negative.`) 
    } else {
        let isPrime = true;
        for(let i = 2;i < curentNum;i++) {
            if(curentNum % i === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime) {
            primeSum += curentNum;
        } else {
            numPrime += curentNum;
        }
    }
    index++;
}
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${numPrime}`)
}
sumPrimeNonPrime(["30",
"83",
"33",
"-1",
"20",
"stop"])
