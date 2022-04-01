class LivrosServices{
    repositores;

    constructor(Repositores){
        this.repositores = Repositores;
    }

    listaTodosOsLivros = async () => {
        return await this.repositores.buscaTodosLivros();
    }

    buscaLivroPorId = async (id) => {
        const livro = await this.repositores.buscaLivroPorId(id);

        if(!livro){
            throw new Error("Livro não encontrado")
        }
        return livro
    }

    salvaLivro = async (livro) => {
        const seLivroExiste = await this.repositores.verificaSeLivroExistePorTitulo(livro.titulo)

        if(seLivroExiste){
            throw new Error("Livro com esse titulo ja existente")
        }

        this.repositores.salvaLivro(livro)
    }

    deletaLivro = async (id) => {
        const seLivroExiste = await this.repositores.verificaSeLivroExistePorId(id);

        if(!seLivroExiste) {
            throw new Error("Livro com esse id não existe")
        }

        this.repositores.deletaLivroPorId(id);
    }

    atualizaLivro = async (id, livro) => {
        const seLivroExiste = await this.repositores.verificaSeLivroExistePorId(id);

        if(!seLivroExiste) {
            throw new Error("Livro com esse id não existe");
        }

        this.repositores.atualizaLivro(id, livro);
    }
}

export default LivrosServices;
