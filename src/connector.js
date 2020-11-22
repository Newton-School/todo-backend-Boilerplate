const mongoURI = "mongodb+srv://shumsd145:shubhamsh@cluster0-zsxx7.mongodb.net/test?retryWrites=true&w=majority"

let mongoose = require('mongoose');
const { todoSchema } = require('./schema');


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });


collection_connection = mongoose.model('todo', todoSchema)

exports.connection = collection_connection;