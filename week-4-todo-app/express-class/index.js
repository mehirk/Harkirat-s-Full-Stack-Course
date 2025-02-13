const express = require("express");
const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/", function(req,res) {
    //write logic here
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;

    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys++;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
});


app.post("/", function(req,res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({healthy: isHealthy});
    res.json ({
        msg: "done!"
    });

})


app.put("/", function(req,res) {
    //make everything healthy regardless of their status
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }

    res.json({})
})



app.delete("/", function(req,res) {
    // delete all the unhealthy kidneys
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            });
        }
    }
    users[0].kidneys = newKidneys;

    res.json({
        msg: "done!"
    });
})

app.listen(3000);