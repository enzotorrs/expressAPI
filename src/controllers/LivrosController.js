class LivrosController {
    LivroService;

    constructor(LivroService){
        this.LivroService = LivroService;
    }

    listaLivros = async (_, res) => {
        try{
            const livros = await this.LivroService.listaTodosOsLivros();
            res.status(200).json(livros)

        } catch(erro){
            res.status(500).send({message: erro.message})
        }
    }

    listaLivroPodId = async (req, res) => {
        const { id } = req.params;

        try {
            const livro = await this.LivroService.buscaLivroPorId(id);
            res.status(200).json(livro);

        } catch(erro) {
            res.status(500).send({message: erro.message});
        }
    }

    criaLivro = async (req, res) => {
        try {
            await this.LivroService.salvaLivro(req.body);
            res.status(201).send({message: "criado com sucesso"})

        } catch(erro) {
            res.status(500).send({message: erro.message})
        }
    }
    
    deletaLivro = async (req, res) => {
        const { id } = req.params;

        try {
            await this.LivroService.deletaLivro(id)
            res.status(200).send({message: "deletado com sucesso"})
        
        } catch (erro) {
            res.status(500).send({message: erro.message})
        }
    }

    atualizaLivro = async (req, res) => {
        const { id } = req.params;
        const livro = req.body;

        try {
            await this.LivroService.atualizaLivro(id, livro)
            res.status(200).send({message: "atualizado com sucesso"})

        } catch(erro) {
            res.status(500).send({message: erro.message})
        }
    }
}

export default LivrosController;
