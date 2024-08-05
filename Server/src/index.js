import express from "express";
const app = express();
const PORT = 3001;
app.get("/", function (req, res) {
  res.send("Hello Wolrls");
});
app.listen(PORT, () => {
  console.log(`Server is Runnning On :${PORT}`);
});
