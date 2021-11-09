import express from "express";

const app = express();

const names: string = "hello world";

enum Roles {
  ADMIN,
  USER,
  READ_ONLY_ADMIN,
}

type Product = {
  name: string;
  game: [string, number]; // this is a tuble
};

const products: Product = {
  name: "thilina",
  game: ["game", 1],
};

console.log(names);

app.listen(5000, () => {
  console.log("server starts on port ", 5000);
});
