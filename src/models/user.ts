import { DataTypes, Model } from "sequelize"
import { sequelize } from "../instances/database"

export interface UserInterface extends Model {
    id: number,
    firstName: string,
    lastName: string
}

export const User = sequelize.define<UserInterface>("User", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'users',
    timestamps: false
})