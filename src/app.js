import express from 'express'
import db from './config/dbConnect.js'
import routes from './routers/index.js'

db.on("error", console.log.bind(console, 'Erro de conexao'))
db.on("open", () => {
    console.log("conexao com o banco estabelecida")
})

const app = express()

routes(app)

export default app;
