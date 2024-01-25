const express = require('express');
const cors = require('cors');
const FileRouter = require('./router/FileRouter');
const ConvertToWord = require('./router/ConvertToWordRouter')
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/openFile', FileRouter)
app.post('/ConvertToWord',ConvertToWord )



app.listen(5000, () => {
    console.log("server is running")
})