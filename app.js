let express = require('express');
let app = express();
let path = require('path');
const dotenv = require('dotenv').config();

let publicPath = path.join(__dirname, './public')
app.use(express.static(publicPath))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})

app.listen(process.env.PORT, () => {
    console.log('Servidor exitoso')
})


