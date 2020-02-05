function one() {
    return 1;
}

function invoke_and_add(a, b) {
    return a() + b();
}

console.log(invoke_and_add(one, function() {
    return 2;
}));