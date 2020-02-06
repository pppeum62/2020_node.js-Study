var text = 'global';

function foo() {
    console.log(text);
}

function bar() {
    var text = 'bar';
    foo();
}

bar();