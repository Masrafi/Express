const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("This is home page");
});

app.post('/', (req, res) => {
    res.send("This is home page with post request");
});

app.put('/call', (req , res) => {
    res.send("This is masrafi anar. return put request");
});

app.listen(3000, () => {
    console.log('listening on port 300');
});