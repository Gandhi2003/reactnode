import express from "express";
import cors from "cors";
import mysql from "mysql2/promise"; 
// import pool from "./dbconfig";
const app = express();
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
const dbConfig = {
    host:"localhost",
    user: "root",
    password: "12345678",
    database:"world"
};

const pool = mysql.createPool(dbConfig);
app.get("/api/data", async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [rows, fields] = await connection.query("SELECT city.ID,city.Name,city.CountryCode,  countrylanguage.Language FROM city INNER JOIN countrylanguage ON city.CountryCode=countrylanguage.CountryCode");
        connection.release();
        res.send(rows); 
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(5000, () => {
    console.log(`Server is running`);
});
