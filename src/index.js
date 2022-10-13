import * as dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  return res.send("Hello, World!");
});

app.listen(PORT, () => console.log(`Server is now listening to port: ${PORT}`));
