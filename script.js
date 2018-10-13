function isPrime(int_number) {
    for (var i=2;i<(int_number-1);i++){
        if(int_number%i===0)
            return false;
    }
    return true;
}
for (var i=2;i<10000;i++){
    if(isPrime(i))
        document.writeln(i);
}



