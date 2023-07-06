const express = require('express');
const app = express();
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
    res.send('server is working');
});
app.get('/greet', function(req, res){
    // console.log(req.query);
    res.send(`Hello `+ req.query.name);
});
app.get('/greet/:name', function(req, res){
    // console.log(req.params);
    // res.json(`hello ${req.params.name}`);
    let { name } = req.params;
    const paragraph = '<div> this a para for mishra ji.... </div>'
    res.render('index.ejs', {username: name, age: 15, color: 'grey', reps: 10, paragraph});
});
app.get('*', function(req, res){
    // res.send('some endpoint');
    // res.redirect(url);
     res.redirect('/');
});


app.listen(4040, function(){
    console.log('server is working properly on port 4040..')
});
