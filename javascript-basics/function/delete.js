function sum(a, b) {
    var c = a + b;
    return c;
}

var add = sum;
typeof add;         // "function"

add(1, 2);          // 3

var student = {
    name : 'lee',
    age : 19
}

console.log(student.name);

delete student.name;        // true
console.log(student.name);  // undefined

delete student;             // false -> 객체 자체를 삭제할 수는 없음
delete not_exist;           // true -> 존재하지 않는 속성이라 아무런 연산을 하지 못할 경우도 true

console.log(student.age);