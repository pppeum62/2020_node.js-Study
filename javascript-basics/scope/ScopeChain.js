var a = 1;

function outer() {
    var b = 2;
    console.log(a);

    function inner() {
        var c = 3;
        console.log(b);
        console.log(a);
    }

    inner();
}

outer();

// console.log(c);     // c is not defined