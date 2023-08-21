const express = require('express');
const app = express();
const port = 80;

app.set('view engine', 'ejs');

app.use(express.json());
app.use('/static', express.static('Static'));

let receivedMarks = 0;

app.get('/', (req, res) => {
    res.render(__dirname + "/views/Index");
})


app.get('/marks', (req, res) => {
    res.render(__dirname + '/views/Marks', { receivedMarks: receivedMarks });
})
app.post('/marks', (req, res) => {
    receivedMarks = req.body.marks;
    console.log("Received Marks:" + receivedMarks);
    res.sendStatus(200);
});


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