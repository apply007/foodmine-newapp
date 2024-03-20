import express, { json } from "express";
import cors from "cors";
import { Sample_Users, Sample_tags, foodData } from "./data";

import jwt from "jsonwebtoken";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.use(json());

app.get("/api/foods", (req, res) => {
  res.send(foodData);
});

//
app.get("/api/foods/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;

  const foods = foodData.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.send(foods);
});

//
app.get("/api/foods/tags", (req, res) => {
  res.send(Sample_tags);
});

//
app.get("/api/foods/tags/:tagName", (req, res) => {
  const tagName = req.params.tagName;
  const foodByTagname = foodData.filter((food) => food.tags?.includes(tagName));
  res.send(foodByTagname);
});

//
app.get("/api/foods/:foodId", (req, res) => {
  const foodId = req.params.foodId;
  const foods = foodData.find((food) => food.id === foodId);
  res.send(foods);
});

//
app.post("/api/user/login", (req, res) => {
  const { email, password } = req.body;

  const user = Sample_Users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    res.send(generateTokenResponse(user));
  }else{

    res.status(400).send("User email and password not valid")
  }
});
const generateTokenResponse = (user: any) => {
  const token = jwt.sign(
    {
      email: user.email,
      admin: user.isAdmin,
    },
    "SomeRandomText",
    {
      expiresIn: "30d",
    }
  );

  user.token = token;
  return user;
};

const port = 5000;

app.listen(port, () => {
  console.log("Server is Running at port 5000");
});
