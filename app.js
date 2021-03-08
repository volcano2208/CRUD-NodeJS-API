require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./api/users/user.router');


app.use(express.json());
app.use('/api/users', userRouter);

app.all('*', (req, res, next) => {
    const err = new AppError(`Requested URL ${req.path} not found`, res);
    next(err);
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: 0,
        message: err.message,
        stack: err.stack
    })
})
app.listen(process.env.APP_PORT, () => {
    console.log("server up and running on port: ", process.env.APP_PORT);
});