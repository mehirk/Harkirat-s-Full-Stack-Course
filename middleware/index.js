const express = require('express');
const app = express();

//function that returns a boolean if the age of the person is more than 14.

function checkAge(age) {
    if (age >= 14) {
        return true;
    } else {
        return false;
    }
}

app.get('/ride2', function (req, res) {

    if (checkAge(req.query.age)) {
        res.status(200).json({
            msg: "You have successfully ridden the ride 2"
        });
    } else {
        res.status(403).json({
            msg: "You are not allowed to ride the ride 1"
        });
    }
});

app.get('/ride1', function (req, res) {

    if (checkAge(req.query.age)) {
        res.status(200).json({
            msg: "You have successfully ridden the ride 1"
        });
    } else {
        res.status(403).json({
            msg: "You are not allowed to ride the ride 1"
        });
    }
});

app.listen(3000);