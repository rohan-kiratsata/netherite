import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER || "rohan",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || "netherite_db",
});

export default sequelize;
