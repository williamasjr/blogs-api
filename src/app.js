const express = require('express');
const { loginRouter, userRouter, categoriesRouter, postRouter } = require('./routes');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/', loginRouter);

app.use('/', userRouter);

app.use('/', categoriesRouter);

app.use('/', postRouter);

module.exports = app;
