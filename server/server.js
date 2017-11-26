var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/TodoApp';

mongoose.Promise = global.Promise;
mongoose.connect(url);

var Todo = mongoose.model('Todo',{
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var newTodo = new Todo({
  text: 'Cooke Dinner'
});

newTodo.save().then((doc)=>{
  console.log('Saved todo', doc);
}, (err)=>{
  console.log('Unable to save todo', err);
});

var otherTodo = new Todo({
  text: 'Feed the cat',
  completed: true,
  completedAt: 123
});

otherTodo.save().then((doc)=>{
  console.log('Saved todo', doc);
}, (err)=>{
  console.log('Unable to save todo', err);
});

var User = mongoose.model('User',{
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

var user = new User({
  email:'rsingh@gmail.com'
});

user.save().then((doc)=>{
  console.log('Saved user', doc);
}, (e)=>{
  console.log('Unable to save user', e);
})
