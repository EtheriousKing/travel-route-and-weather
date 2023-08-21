import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.render("index.ejs");
});

app.post("/getWeather" , (req,res) => {
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: '53.1,-0.13'},
        headers: {
          'X-RapidAPI-Key': '20912e78f5mshf0b9e41f378931ap14b6c4jsn051f3df5b543',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
})

app.listen(port, (res,req) => {
    console.log(`Server is listening on port: ${port}`);
})

