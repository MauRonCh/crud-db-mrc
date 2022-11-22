//? Dependencies
const express = require('express');

//? Files
const userRouter = require('./users/users.router');

//? Initial config
const port = 9005;
const app = express();

// Enable json
app.use(express.json());

// Check if works
app.get('/', (req, res) => {
    res.status(200).json({message: 'OK'})
});

// API v1 routes
app.use('/api/v1', userRouter);



//? Start server
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
});