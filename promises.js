import { apiURL } from "./config.js";

const options = {
  mode: "no-cors",
};

fetch(apiURL, options).then((response) => console.log(response));
console.log("Welcome Ahmed ALi");
