const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema;

const postSchema = new Schema({
    titulo: { type: String, required: true },
    texto: { type: String, required: true },
    imagem: { type: String, required: false },
    create_post: { type: Date, default: Date.now },
    comentarios: [{
        user: { type: type.mongoose.ObjectId, required: true },
        conteudo: { type: String, required: true },
        create_comentario: { type: Date, default: Date.now }
    }],
    like: [{
        user: { type: type.mongoose.ObjectId, required: true }
    }]
})

module.exports = mongoose.model('Post', postSchema)