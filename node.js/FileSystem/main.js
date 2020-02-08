var fs = require('fs');

// 동기적 읽기
try {
    var data = fs.readFileSync('notexist.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.log(err);
}

// 비동기적 읽기
fs.readFile('notexist.txt', 'utf8', function(err, data) {
    if(err) {
        console.log(err);   // 읽기 실패
    } else {
        console.log(data);  // 읽기 성공
    }
})