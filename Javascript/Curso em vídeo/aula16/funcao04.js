function factorial(numero){
    let factorial = 1;
    for (let i = numero; i > 0; i--) {
        factorial *= i;
    }
    return factorial;
}

console.log(factorial(1));

//5! = 5 x 4 x 3 x 2 x 1


