import livros from '../models/Livro.js'

class LivrosRepositores{
    buscaTodosLivros = async () =>  {
        const resultado = await livros.find()

        return resultado
    }

    buscaLivroPorId = async (id) => {
        const resultado = await livros.findOne({_id: id})

        return resultado
    }

    verificaSeLivroExistePorTitulo = async (titulo_req) => {
        const resultado = await livros.exists({titulo: titulo_req})

        return resultado
    }

    verificaSeLivroExistePorId = async (id) => {
        const resultado = await livros.exists({_id: id})

        return resultado
    }

    salvaLivro = async (livro) => {
        const novo_livro = new livros(livro);

        novo_livro.save((err) => {
            if (err) {
                throw new Error(err.message)
            }
        })
    }

    deletaLivroPorId = async (id) => {
        livros.findByIdAndDelete(id, (err) => {
            if(err) {
                throw new Error(err.message)
            }
        })
    }

    atualizaLivro = async (id, livro) => {
        livros.findByIdAndUpdate(id, {$set: livro}, (err) => {
            if (err) {
                throw new Error(err.message)
            }
        })
    } 
}

export default LivrosRepositores;
