const { Schema } = require('mongoose');

const todoSchema = new Schema({
    data:Schema.Types.String,
    topic:Schema.Types.String
})

exports.todoSchema = todoSchema;