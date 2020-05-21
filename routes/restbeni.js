const express = require('express');
const { createBene,
        getBeni    
} = require('../middleware/beniware');

const router = express.Router();

// CREATE
// inserisce i dati di uno o più edificio storico
router.post('/', (req, res) => {
    createBene(req.body)
        .then(() => { res.status(200).send() })
        .catch(() => { res.status(404).send() })
});
// --------------------------------------------------------------------

// READ
// edifici disponibili
router.get('/:loc/:prov', (req, res) => {
    getBeni(req.params.loc, req.params.prov)
        .then((result) => {
            if (result.length > 0)
                res.status(200).send(result);
            else
                res.status(404).send();
        })
        .catch(() => { res.status(404).send() })
});
// --------------------------------------------------------------------

module.exports = router;