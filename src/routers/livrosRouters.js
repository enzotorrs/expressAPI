import express from "express";
import LivrosController from "../controllers/LivrosController.js";
import LivrosServices from "../services/LivrosServices.js";
import LivrosRepositores from "../respositores/LivrosRepositores.js"

const router = express.Router();
const Repositores = new LivrosRepositores();
const Service = new LivrosServices(Repositores);
const Controller = new LivrosController(Service);

router.get('/livros', Controller.listaLivros)

router.get('/livros/:id', Controller.listaLivroPodId)

router.post('/livros', Controller.criaLivro)

router.put('/livros/:id', Controller.atualizaLivro)

router.delete('/livros/:id', Controller.deletaLivro)


export default router;
