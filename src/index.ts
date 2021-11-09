import express from "express";

const app = express();

class Department {
  constructor(private names: string) {}

   describe(){

  }
}

const dp = new Department("HR");
console.log(dp);

app.listen(5000, () => {
  console.log("server starts on port ", 5000);
});
