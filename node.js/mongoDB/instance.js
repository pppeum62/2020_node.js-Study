var instance = new ArticleModel();
instance.title = 'hello';

instance.save(function (err){
    // save 실행 후 콜백 함수의 내용
});

instance.find({}, function(err, docs){
    // find 실행 후 콜백 함수의 내용
});