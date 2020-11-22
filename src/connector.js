const mongoURI = "mongodb://localhost:27017" + "/todo"

let mongoose = require('mongoose');
const { todoSchema } = require('./schema');


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });


collection_connection = mongoose.model('todo', todoSchema)

exports.connection = collection_connection;
