var num = 1;

function foo() {
    var num = 2;

    function bar() {
        console.log(num);
    }

    return bar;
}

var baz = foo();
baz();