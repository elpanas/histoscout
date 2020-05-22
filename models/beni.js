const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'] // 'location.type' must be 'Point'         
    },
    coordinates: [Number]
});

const polygonSchema = new mongoose.Schema({
    type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Polygon'] // 'location.type' must be 'Point'      
    },
    coordinates: [[[Number]]]
});

// schema della collezione (o tabella)
const beniSchema = new mongoose.Schema({
    nome: {
        type: String, required: true
    },
    anno: String,
    tipo: Number,
    tipom: { type: Number, default: 0 },
    localita: String,
    provincia: String,
    location: polygonSchema, pointSchema
    })
    .index({ nome: 1, localita: 1, provincia: 1 }, { unique: true });

// creazione della collezione sulla base dello schema
const Beni = mongoose.model('beni', beniSchema);

exports.Beni = Beni;