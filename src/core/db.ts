import { DataTypes, Model, Sequelize } from 'sequelize'
import * as fs from 'fs'
import * as dotenv from 'dotenv' 
dotenv.config()

const SSL_PATH = process.env.SSL_PATH || './'

const db = new Sequelize({
    dialect: 'postgres',
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    dialectOptions: {
        ssl: {
            rejectUnauthorized: true,
            ca: fs
                .readFileSync(SSL_PATH)
                .toString(),

        }
    }
})

export class TonyStak extends Model {}

TonyStak.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    data: {
        type: DataTypes.JSONB,
    }
}, {
    sequelize: db,
    modelName: 'TonyStark',
})

export default db