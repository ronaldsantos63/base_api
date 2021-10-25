import dotenv from 'dotenv'
import { Sequelize, Dialect } from 'sequelize'

dotenv.config()

const {
    DATABASE_DIALECT,
    DATABASE_HOST,
    DATABASE_NAME,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_PORT
} = process.env

console.log(`Database name: ${DATABASE_NAME}`)

export const sequelize = new Sequelize(
    DATABASE_NAME as string,
    DATABASE_USER as string,
    DATABASE_PASSWORD as string,
    {
        dialect: DATABASE_DIALECT as Dialect,
        host: DATABASE_HOST,
        port: parseInt(DATABASE_PORT as string),
        storage: DATABASE_DIALECT === "sqlite" ? DATABASE_NAME : ""
    }
)