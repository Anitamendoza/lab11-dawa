const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const TiendaSchema = new Schema({
    departamento: {
        type: String,
        required: true
    },
    distrito: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('Tienda', TiendaSchema);
