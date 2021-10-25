import { Request, Response } from "express"
// Uncomment this import for database connection test
// import { sequelize } from "../instances/database"
import { Home } from "../models/home"
import { User } from "../models/user"

export const home = async (_: Request, res: Response) => {
    // Uncomment this snippet for database connection test
    // try {
    //     // await sequelize.authenticate()
    //     await sequelize.sync()
    //     await User.create({
    //         firstName: "Raimundo Reinaldo",
    //         lastName: "Santos"
    //     })
    //     const users = await User.findAll()
    //     console.log("usuarios => " + JSON.stringify(users))
    //     // console.log('conexão estabelecida com sucesso!')
    // } catch (error) {
    //     console.error("Ocorreu um erro inesperado: ", error)
    // }
    let data = Home.getData()
    res.render('pages/home', data)
}