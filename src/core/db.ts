import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv' 
dotenv.config()

export const db = new Sequelize({
    dialect: 'postgres',
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
})