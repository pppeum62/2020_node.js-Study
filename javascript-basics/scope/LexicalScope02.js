var text = 'global';

function foo() {
    console.log(text);
}

function bar() {
    text = 'bar';
    foo();
}

bar();