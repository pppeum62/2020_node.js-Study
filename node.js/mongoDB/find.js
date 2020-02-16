Model.find(query, fields, options, callback);

Model.find({'some.value': 5}, function(err, docs) {
    // 콜백 함수의 내용
});

Model.find({}, ['first', 'last'], function(err, docs) {
    // 콜백 함수의 내용
});

Model.findOne({age: 5}, function(err, doc) {
    // 콜백 함수의 내용
});

Model.findById(obj.id, function(err, doc) {
    // 콜백 함수의 내용
});