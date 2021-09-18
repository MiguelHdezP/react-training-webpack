import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
//this will show the env variable for Dev in the console, and if the application is built and this console.log is not removed it will be added into the index_bundle.js with the respective prod env variable.
console.log("Env variables: ", process.env.API);
ReactDOM.render(<App />, document.getElementById("app"));
