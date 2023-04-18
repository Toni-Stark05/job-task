import { DataTypes, Sequelize } from 'sequelize'
import * as dotenv from 'dotenv' 
dotenv.config()

const db = new Sequelize({
    dialect: 'postgres',
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
})

db.define('ToniStark', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },

    data: {
        type: DataTypes.JSONB,
    }
})