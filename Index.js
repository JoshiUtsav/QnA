const express = require('express');
const { question } = require('./views/utils/Question');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 80;

app.set('view engine', 'ejs');
app.use(express.json());
app.use('/static', express.static('Static'));

let { receivedMarks } = require('./views/utils/variable');

app.get('/', (req, res) => {
    res.render('Index');
});

app.get('/marks', (req, res) => {
    res.render('Marks', { receivedMarks: receivedMarks, Question: question });
});

app.post('/marks', (req, res) => {
    receivedMarks = req.body.marks;
    console.log("Received Marks: " + receivedMarks);
    res.sendStatus(200);
});

app.get('/question', (req, res) => {
    res.send(question);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
});
