type Home = {
    message: String
}

const data: Home = {
    message: "Olá mundo!"
}

export const Home = {
    getData: (): Home => {
        return data
    }
}