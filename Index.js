const express = require('express');
const path = require('path');
const app = express();
const port = 80;

app.set('view engine', 'ejs');

app.use('/static', express.static('Static'));

app.get('/', (req, res) => {
    res.render(__dirname + "/views/Index")
})

app.get('/marks', (req, res) => {
    res.render(__dirname + '/views/Marks');
})

app.get('/Ques', (req, res) => {
    res.send(
        Questions = [
        {
            Question: "What is a SQL full form?",
            A: "Structured query language",
            B: "Query language",
            C: "Structured language",
            D: "None of them",
            Answer: "a"
        },
        {
            Question: "What is another question?",
            A: "Option A",
            B: "Option B",
            C: "Option C",
            D: "Option D",
            Answer: "a"
        },
        {
            Question: "What is another question?",
            A: "Option E",
            B: "Option B",
            C: "Option C",
            D: "Option D",
            Answer: "a"
        },
        {
            Question: "What is another question?",
            A: "Option A",
            B: "Option B",
            C: "Option C",
            D: "Option D",
            Answer: "a"
        },
    ])
})

app.listen(port, () => {
    console.log(`http://localhost/`)
})