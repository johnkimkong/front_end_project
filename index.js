// Use the JS getDay() method so that when the user access the webstiel, they will get the <h1></h1> 
// tell the user whether its a week or weekend. sun 0,  6:sat. 

//steps: 1. 

import express from "express";
// import ejs from "ejs"; 

const app = express();
const port = 3000; 

app.get("/", (req, res) => {
    const today = new Date("November 13, 2023 11:32:00");
    const day = today.getDay();

    let type = "a weekday";
    let adv = "it's time to work hard";

    if(day === 0 || day === 6)
    {
        type = "the weekend";
        adv = "it's time to have some fun!";
    }

    res.render("index.ejs", {
        // dayType: type, 
        // advice: adv,
        type, 
        adv,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});

