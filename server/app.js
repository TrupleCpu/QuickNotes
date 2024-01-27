const express = require('express');
const cors = require('cors');
const FileRouter = require('./router/FileRouter');
const ConvertToWord = require('./router/ConvertToWordRouter');
const Example = require('./router/Examplesssss')
const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', FileRouter);
app.use('/api', ConvertToWord);
app.use('/api', Example)

app.listen(5000, () => {
  console.log("server is running");
});

module.exports = app;
