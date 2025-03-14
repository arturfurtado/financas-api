import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../models/user";
import { UserAccounts } from "../models/user_accounts";
import { Transactions } from "../models/transactions";
import { Category } from "../models/category";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  port: parseInt(process.env.POSTGRES_PORT || "5433", 10),
  username: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "postgres",
  database: process.env.POSTGRES_DB || "financas_db",
  synchronize: true,
  logging: false,
  entities: [User, UserAccounts, Transactions, Category],
});
