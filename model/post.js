const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema;

/*
 titulo,
 imagem,
 texto,
 create_post
 comentarios: [
     user: referencia ID usuario { type: mongoose.Types.ObjectId, required: true, ref: 'User' }
     conteudo: texto/string
    create_comentario: { type: Date }
 ]
*/
const PostSchema = new Schema({

})

// exportar