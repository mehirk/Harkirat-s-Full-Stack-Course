const express = require("express");

const app = express();

app.get("/multiply", function (req, res) {
    //catch the parameteres from the url
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        result: a * b
    })
});

app.get("/add", function (req, res) {
    // catch the parameters from the url
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        result: a + b
    })
});

// how to pass parameters like this
// localhost:3000/add/1/2
// app.get("/add/:a/:b", function (req, res) {
//     // catch the parameters from the url
//     const a = parseInt(req.params.a);
//     const b = parseInt(req.params.b);

//     res.json({
//         result: a + b
//     })
// });

app.get("/divide", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;
      
    res.json({
        result: a / b
    })
});

app.get("/subtract", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
      
    res.json({
        result: a - b
    })
});

app.listen(3000);