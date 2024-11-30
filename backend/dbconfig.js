// const dbConfig = {
//     host:process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE_NAME
// };
const dbConfig = {
    host:"localhost",
    user: "root",
    password: "12345678",
    database:"world"
};

const pool = mysql.createPool(dbConfig);
export default pool;