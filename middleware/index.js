const express = require('express');
const app = express();

//function that returns a boolean if the age of the person is more than 14.

function checkAgeMiddleware(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    } else {
        res.status(403).json({
            msg: "You are not allowed to ride it yet."
        });
    }
}

app.get('/ride3', function (req, res) {
    res.status(200).json({
        msg: "You have successfully ridden the ride 2"
    });
});

app.use(checkAgeMiddleware);

app.get('/ride2', function (req, res) {
    res.status(200).json({
        msg: "You have successfully ridden the ride 2"
    });
});

app.get('/ride1', function (req, res) {
    res.status(200).json({
        msg: "You have successfully ridden the ride 1"
    });
});

app.listen(3000);