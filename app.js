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
          'X-RapidAPI-Key': `${process.env.WEATHER_API_KEY}`,
          'X-RapidAPI-Host': `${process.env.WEATHER_API_HOST}`,
        }
    };
    try {
        var result = await axios.get("https://weatherapi-com.p.rapidapi.com/current.json",options);
        console.log(result.data);
        res.render("index.ejs",{weather : result.data});
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

app.post("/getTravelWeather", async (req,res) => {
    try { 
        const response = await axios.get(`https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/Routes?wp.0=${req.body.currentLocation},WA;64;1&wp.1=${req.body.destination},WA;66;2&mmd=0&key=${process.env.ROUTE_API_KEY}`,{ responseType: 'arraybuffer' })
        const buffer64 = Buffer.from(response.data, 'binary').toString('base64')
        res.render("index.ejs",{map : buffer64});
    } catch (error) {
        console.error(error);
    }
})

app.listen(port, (res,req) => {
    console.log(`Server is listening on port: ${port}`);
})

