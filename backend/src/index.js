const express = require("express");
const app = express();
const rotas = require("./rotas");


app.use(express.json());
app.use(rotas);
require("./config/dbconfig");


app.listen(8085);