const express = require('express');
const { question } = require('./views/utils/Question');
const app = express();
const port = 80;

app.set('view engine', 'ejs');
app.use(express.json());
app.use('/static', express.static('Static'));

let receivedMarks = 0;

console.log(question[0].Question);

app.get('/', (req, res) => {
    res.render(__dirname + "/views/Index");
});

app.get('/marks', (req, res) => {
    res.render(__dirname + '/views/Marks', { receivedMarks: receivedMarks, Question: question });
});

app.post('/marks', (req, res) => {
    receivedMarks = req.body.marks;
    console.log("Received Marks: " + receivedMarks);
    res.sendStatus(200);
});

app.get('/Ques', (req, res) => {
    res.send(question)
})

app.listen(port, () => {
    console.log(`http://localhost/`);
});
