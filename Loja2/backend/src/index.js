const express = require("express");
const app = express();
const rotas = require("./Rotas");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.json());
app.use(rotas);
require = require("./Config/DbConfig");

app.listen(8081);