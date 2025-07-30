const express = require('express');
//const handle = require('./handle');


const app = express();
const admin = express();

//app.locals.title = 'My App';
//app.get('/', handle);

// admin.on('mount', (parent) => {
//   console.log('Admin Mounted')
//   console.log(parent) // refers to the parent app
// })

admin.get('/dashboard', (req, res)=>{
    console.log(admin.mountpath);
    res.send('Welcome to admin dashboard');
});

app.get('/', (req, res)=>{
    res.send('Welcome to application home');
});

app.all('/', (req, res)=>{
    res.send('Welcome to application home from all');
});

app.use('/admin', admin);


//params
app.param('id', (req, res, next, id) => {
    const user = {
        userId: id,
        name: 'Bangladesh'
    };
    req.userDetails = user;
    next();
})

app.get('/user/:id', (req, res)=>{
    console.log(req.userDetails);
    res.send('Welcome to application home');
});
//params end

//route
app.route('/about/mission')
    .get((req, res)=>{
        res.send('Welcome to application home');
    })
    .post((req, res)=>{
        res.send('Welcome to application home post');
    })
    .put((req, res)=>{
        res.send('Welcome to application home put');
    });

app.listen(3000, () => {
    console.log('listening on port 3000');
});
