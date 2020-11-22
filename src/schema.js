const { Schema } = require('mongoose');

const todoSchema = new Schema({
    data:Schema.Types.String,
    done:Schema.Types.Boolean
})

exports.todoSchema = todoSchema;
