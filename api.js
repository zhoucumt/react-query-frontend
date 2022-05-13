const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const app = express();
app.use(express.json());
app.use(logger('dev'));
app.use(
  cors({
    allowedHeaders: ['Content-Type'],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })
);
const users = new Array(10)
  .fill(true)
  .map((item, index) => ({ id: String(index + 1), name: `name${index + 1}` }));

app.use((req, res, next) => {
  setTimeout(next, 1000);
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(8080, () => console.log('started on port 8080'));
