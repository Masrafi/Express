const express = require('express')
const app = express()

// express/json
//app.use(express.json());
//
/// json
// app.post('/', (req , res) => {
//     console.log(req.body);
//     console.log(typeof req.body);
//     console.log(req.body.name);
//     res.send("This is masrafi anar. return put request");
// });

//express/raw
//app.use(express.raw());
//
//raw
// app.post('/', (req , res) => {
//     console.log(req.body.toString());
//     res.send("This is masrafi anar. return put request");
// });

//express/text
//app.use(express.text());
//
/// text
// app.post('/', (req , res) => {
//     console.log(req.body);
//     res.send("This is masrafi anar. return put request");
// });

//express/urlencoded
//app.use(express.urlencoded());
//
/// url encoded
// app.get('/', (req, res) => {
//     res.send('This is home page');
// });
// app.post('/', (req , res) => {
//     console.log(req.body);
//     res.send("This is masrafi anar. return put request");
// });

//express/static
// app.use(express.static(__dirname + '/public/', {
//     index: 'home.html'
// }));
/// 
// app.get('/', (req, res) => {
//     res.send('This is home page');
// });
// app.post('/', (req , res) => {
//     console.log(req.body);
//     res.send("This is masrafi anar. return put request");
// });

//express/router
const router = express.Router({caseSensitive: false});

app.use(router);

router.get('/about', (req, res) => {
    res.send('This is home page');
});
router.post('/', (req , res) => {
    console.log(req.body);
    res.send("This is masrafi anar. return put request");
});



app.listen(3000, () => {
    console.log('listening on port 3000');
});