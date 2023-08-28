import express from "express";

const app = express();

app.listen(3001);

app.get("/somar/:w/:z", function (req, res) {
  const {w,z} = req.params;
  let r = parseFloat(w) + parseFloat(z);
  res.send({r});
});

app.post("/teste", function (req, res) {
  res.send("boa noite");
});
