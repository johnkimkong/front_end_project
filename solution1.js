import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
// The __dirname was declared so that it can be used to locate the absolute file path for index.html. 

const app = express();
const port = 3000;

//The middleware parse incoming request bodies in URL encoded format. 
app.use(express.urlencoded({ extended: true })); 


app.get("/", (req, res) => {
res.sendFile(__dirname + "/public/index.html");
});

//Once the user submit the data the req.body is populated with the parse data.
app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
