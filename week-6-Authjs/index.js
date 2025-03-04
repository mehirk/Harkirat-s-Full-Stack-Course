const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'mehir';
const app = express();
app.use(express.json());

logger = (req, res, next) => {
    console.log(`${req.method} method request came in`);
    next();
}

const users = [];

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post('/signup', logger, (req, res) => { 
    // will come to input validations soon using zod. 
    const username = req.body.username;
    const password = req.body.password;
    
    users.push({
        username,
        password
    });

    res.send({
        message: "You have signed up successfully"
    })

    console.log(users);
})

app.post('/signin', logger, (req, res) => {    
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(function (u) {
        if (u.username === username && u.password === password) {
            return true;
        } else {
            return false;
        }
    })

    if (foundUser) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET); //convert their username into a jwt token
        // foundUser.token = token;
        res.send({
            message: "You have signed in successfully",
            token
        })
    } else {
        res.status(401).send({
        message: "Invalid username or password"
        })
    }

    console.log(users);
})

//middleware that will check if the user is logged in or not. if the user is not logged in then it will end the request early.
auth = (req, res, next) => {
    const token = req.headers.token;
    const decodedInformation = jwt.verify(token, JWT_SECRET); // this helps us to get the username from the token. 
    const username = decodedInformation.username;
    req.username = username;

    const foundUser = users.find(u => u.username === username)

    if (foundUser) {
        next();
    } else {
        res.status(401).send({
            message: "You are not logged in"
        })
    }
}

app.get('/me', logger, auth, (req, res) => {
    let foundUser = null;

    for (let i = 0; i < users.length; i++ ) {
        if (users[i].username === req.username) {
            foundUser = users[i];
        }
    }

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else {
        res.json({
            message: "Sorry not found!"
        });
    };
});

app.listen(3000);