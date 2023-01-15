var sum_to_n_a = function(n) {
    // your code here
    var sum = 0; 
    for (i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};
console.log(sum_to_n_a(5));

var sum_to_n_b = function(n) {
    // your code here
    var sum = 0; 
    i = 1; 
    while (i <= n) {
        sum += i;
        i++;
    }
    return sum;
};
console.log(sum_to_n_b(5));

var sum_to_n_c = function(n) {
    // your code here
    if (n == 0){
        return n;
    }
   
    return n + sum_to_n_c(n - 1);
    
};

console.log(sum_to_n_c(5));