const express = require('express');
const app = express();
app.use(express.json());

const users = [];

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let token = '';
    for (let i = 0; i < 32; i++) {
        //use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }

    return token;
}

app.post('/signup', (req, res) => { 
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

app.post('/signin', (req, res) => {    
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
        const token = generateToken();
        foundUser.token = token;
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


app.listen(3000)