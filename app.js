const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send(`Hello world from the server`);
});
app.get('/about', (req,res) => {
    res.send(`About page`);
});
app.get('/contact', (req,res) => {
    res.send(`contact page`);
});
app.get('/signin', (req,res) => {
    res.send(`signin page`);
});
app.get('/signin', (req,res) => {
    res.send(`signin page`);
});



app.listen(3100, () => {
    console.log(`Running at 3100`);
});