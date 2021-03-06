const { Beni } = require('../models/beni');

// INSERISCE BENE
async function createBene(dati) {   
    
    for (var i = 0; i <= dati.features.length; i++)
    {
        // creazione dell'oggetto (o record) della collezione
        const bene = new Beni({
            nome: dati.features[i].properties.nome,
            anno: dati.features[i].properties.anno,
            tipo: dati.features[i].properties.tipo,
            tipom: dati.features[i].properties.tipom,
            localita: dati.features[i].properties.localita,
            provincia: dati.features[i].properties.provincia,            
            location: {
                type: "Polygon",
                coordinates: dati.features[i].geometry.coordinates
            }
        });

        var result = await bene.save();        
    }

    return result;
}

// RECUPERA EDIFICI
async function getBeni(loc,prov) {
    return await Beni.find({ // criteri di ricerca  
        localita: loc,
        provincia: prov
    });
}

module.exports.createBene = createBene;
module.exports.getBeni = getBeni;