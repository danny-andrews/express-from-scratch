require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? {
          rejectUnauthorized: false,
        }
      : false,
});

const app = express();

app.use(express.static("public"));

app.get("/users", (req, res) => {
  pool.query("SELECT * FROM users").then((result) => {
    res.send(result.rows);
  });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
