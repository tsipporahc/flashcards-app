const express = require('express');

const app = express(); // returns express app

app.get('/', (request, response) => {
    response.send('I love you');

});

//set up developer server using the listen method
app.listen(3000); // 3000 is port number