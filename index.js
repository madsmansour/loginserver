const express = require('express')
const app = express()
const port = 45

app.use(express.urlencoded);

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/ost', (req, res) => res.send({"ost": "gammel ole", "lugter": true, "vægt": 10}));

app.get('/login', function(req, res) { res.sendfile('html.html');
});

//app.use(express.static('style'));

app.use('/css', express.static('style'));

app.post('/login',(req,res) => {
    if (req.body.username == "Mads" && req.body.password == "123"){
        res.send('Velkommen')
    }
    else {
        res.send('Forkert login')
    }
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

