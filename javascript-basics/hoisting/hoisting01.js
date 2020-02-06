function foo() {
    console.log(a);     // undefined
    var a = 100;
    console.log(a);     // 100
}

foo();

/*
위 코드와 아래 코드가 같은 코드.
function foo() {
    var a;
    console.log(a);
    var a = 100;
    console.log(a);
}

foo();
*/