import { apiURL } from "./config.js";

const options = {
  method: "GET",
  "X-RapidAPI-Key": "e5ee096acamsh0abc56ece36795ep16b0c6jsn36fdd97005f8",
  "X-RapidAPI-Host": "community-hacker-news-v1.p.rapidapi.com",
};

fetch(apiURL, options).then((response) => console.log(response));
console.log("Welcome Ahmed ALi");
