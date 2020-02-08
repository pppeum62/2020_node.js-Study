function Foo() {

}

Foo.prototype = {
    bar: function() {
        console.log('Foo_bar 실행');
    }
};

function Bar() {

}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.baz = function() {
    console.log('Bar_baz 실행');
};

Foo.prototype.bar();
Bar.prototype.bar();
Bar.prototype.baz();