import express from "express";
import {sum, dif} from "./operacao";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.listen(PORT, function(){console.log(`Rodando ${PORT}`)});

app.get("/somar/:w/:z", function (req, res) {
  const {w,z} = req.params;
  let r = parseFloat(w) + parseFloat(z);
  res.send({r});
});

app.post("/subtrair", function (req, res) {
  const {x,y} = req.body;
  let r = parseFloat(x) - parseFloat(y);
  res.send({r});
});
