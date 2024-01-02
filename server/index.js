const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const controller = require('./controller')

app.get("/api/compliment", controller.getCompliment);
app.get("/api/fortune", controller.getFortune);
app.get("/api/number", controller.getNumber);
app.get("/api/name", controller.getBabyName);
app.get("/api/time", controller.getCurrentTime);

app.listen(4000, () => console.log("Server running on 4000"));
