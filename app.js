'use strict';
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('what it do?')
});
app.get('/api/products', (req, res) => {
    let products = [{
        name: 'Javascript book',
        price: 9.99
    }, {
        name: 'A Christmas Carol',
        price: 19.99
    }];
    let stringBean = JSON.stringify(products);
    res.send(stringBean);
})
app.listen(3000, function() {
    console.log('Listening on port 3000. Go to http://localhost:3000/');
});
