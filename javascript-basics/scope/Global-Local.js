var global_scope = 'global';    // 전역 스코프

var local_function = function() {
    var local_scope = 'Hello!';     // 지역 스코프
    console.log(global_scope);      // 전역 스코프 참고 가능. global 출력
    console.log(local_scope);       // 함수 내이기 때문에 지역 스코프 참조 가능. Hello! 출력
};

local_function();
//console.log(local_scope);       // local_scope는 지역 스코프이기 때문에 에러 발생.