import express from "express"
import viteExpress from "vite-express";

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const db = ["Gorilla", "Monkey", "Giraffe"];

app.get("/animals", (req, res) => {
  res.send(db);
});

viteExpress.listen(app, 5050, () => console.log(`Server listening on port 5050`));