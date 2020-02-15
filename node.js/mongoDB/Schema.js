var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
var ArticleSchema = new Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date
});

var ArticleModel = mongoose.model('Article', ArticleSchema);