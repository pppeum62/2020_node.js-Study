foo();

function foo() {
    console.log('출력');
}

// 위와 같은 코드의 경우, 변수 호이스팅과 마찬가지로 함수선언이 위로 끌어올려지기 때문에 제대로 동작



/*
foo();      // foo is not a function

var foo = function() {
    console.log('출력');
};
*/

// 위 코드는 아래 코드와 같은 의미이기 때문에 에러 발생

/*
var foo;

foo();      // foo is not a function

foo = function() {
    console.log('출력');
};
*/