const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
   name: {
      type: String,
      required: [true, 'name is required']
   },
   dateTime: {
      type: Date,
      default: Date.now()
   },
   body: {
      type: String,
      required: [true, 'body is required'],
      min: 5,
      max: 100
   }
})

const Comment = mongoose.model('Comment', commentSchema);
module.exports = commentSchema
module.exports = Comment