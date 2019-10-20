const todoModel = require('./models');

exports.create = async (req, res, next) => {
    const { text } = req.body;

    try {
        const newTodo = new todoModel({ text });

        await newTodo.save();
        return res.json(newTodo);
    } catch(err) {
        console.log(err);
    }
}

exports.getAll = async (req, res, next) => {
    try {
        const todos = await todoModel.find().sort({created_at: -1});
        return res.json(todos);
    } catch(err) {
        console.log(err);
    }
}

exports.complete = async (req, res, next) => {
    try {
        const todo = await todoModel.findById(req.params.todoId);
        todo.complete = !todo.complete;
        await todo.save();
        return res.json({ todoId: req.params.todoId});
    } catch(err) {
        console.log(err);
    }
}

exports.delete = async (req, res, next) => {
    try {
        const todo = await todoModel.findById(req.params.todoId);
        await todo.remove();
        return res.json({ todoId: req.params.todoId});
    } catch(err) {
        console.log(err);
    }
}