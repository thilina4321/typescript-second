import express from "express";

const app = express();

const names: string = "hello world";

console.log(names);

app.listen(5000, () => {
  console.log("server starts on port ", 5000);
});
