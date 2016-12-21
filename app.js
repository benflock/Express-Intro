'use strict';
const express = require('express');
const app = express();
let products = [{
    id: 1,
    name: 'Javascript book',
    price: 9.99
}, {
    id: 2,
    name: 'A Christmas Carol',
    price: 19.99
}];

app.get('/', (req, res) => {
    res.send('what it do?')
});
app.get('/api', (req, res) => {
    res.send('what can I do for you?')
});
app.get('/api/products', (req, res) => {
    let stringBean = JSON.stringify(products);
    res.send(stringBean);
});
app.get('/api/products/:id', (req, res) => {
    let id = Number(req.params.id);
    let product = products.find(x => x.id === id);
    let stringBean = JSON.stringify(product);
    res.send(stringBean);
});
app.listen(3000, function() {
    console.log('Listening on port 3000. Go to http://localhost:3000/');
});
