require('dotenv').config();
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');



const port = 3000;

//middleware
app.use(express.static('./public'));
app.use(express.json());

//routes


app.use('/api/v1/tasks', tasks)

// app.get('api/v1/tasks') - get all task
// app.post('api/v1/tasks') - create task
// app.get('api/v1/tasks/:id') - get single task
// app.patch('api/v1/tasks/:id') - update task
// app.delete('api/v1/tasks/:id') - delete task

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${3000}...`));
    } catch (error) {
        console.log(error);
    };
};

start();


