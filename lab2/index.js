const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('I`m inside docker!');
});

const port = 8888;

app.listen(port, () => {
    console.log('Express listening at http://127.0.0.1:' + port);
});