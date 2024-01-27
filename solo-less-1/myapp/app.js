const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use((req, res, next) => {
  console.log("Наше проміжне ПЗ");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact page</h1>");
});

app.get("/contact/:id", (req, res) => {
  res.send(
    `<h1>Contact</h1> Параметр: ${
      req.params.id
    }. Параметри рядка: ${JSON.stringify(req.query)}.`
  );
});

app.post("/contact/:id", (req, res) => {
  console.log(req.query, req.body);

  res.send("All Good!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
