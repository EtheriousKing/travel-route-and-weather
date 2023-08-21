import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import 'dotenv/config'

const app = express();
const port = 3000;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.render("index.ejs");
});

app.post("/getWeather" , async (req,res) => {
    const options = {
        params: {q: `${req.body.location}`},
        headers: {
          'X-RapidAPI-Key': `${process.env.API_KEY}`,
          'X-RapidAPI-Host': `${process.env.API_HOST}`,
        }
    };
    try {
        var result = await axios.get("https://weatherapi-com.p.rapidapi.com/current.json",options);
        console.log(result.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.listen(port, (res,req) => {
    console.log(`Server is listening on port: ${port}`);
})

