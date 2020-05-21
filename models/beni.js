const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'], // 'location.type' must be 'Point'  
        required: true
    },
    coordinates: [Number],
    required: true
});

const polygonSchema = new mongoose.Schema({
    type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Polygon'], // 'location.type' must be 'Point'  
        required: true
    },
    coordinates: [[[Number]]],
    required: true
});

// schema della collezione (o tabella)
const beniSchema = new mongoose.Schema({
    nome: {
        type: String, required: true
    },
    anno: String,    
    localita: String,
    provincia: String,
    location: polygonSchema
    })
    .index({ nome: 1, localita: 1, provincia: 1 }, { unique: true });

// creazione della collezione sulla base dello schema
const Beni = mongoose.model('beni', beniSchema);

exports.Stabilimento = Stabilimento;