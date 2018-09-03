const Todo = require('../models/todos.model');

exports.all = function(req, res){
    Todo.find({}, function(err, todos){
        if(err){
            res.json({status: false, msg: err})
        }else{
            res.json({status: true, msg: 'todos found', data: todos});
        }
    })
}