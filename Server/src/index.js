import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import ConnectDB from "./Db/index.js";
import { userModel } from "./models/userModule.js";
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
dotenv.config({
  path: "./.env",
});
app.get("/getUsers", function (req, res) {
  userModel
    .find({})
    .then(function (userdatas) {
      res.json(userdatas);
      console.log(" User data is ", userdatas);
    })
    .catch(function (err) {
      res.json(err);
    });
});
app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new userModel(user);
  await newUser.save();
  console.log(newUser);
  res.json(user);
});

ConnectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is Runnning On :${PORT}`);
    });
  })
  .catch((err) => console.log("MongoDb Connection is Failed !!!!"));
