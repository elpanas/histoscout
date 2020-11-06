const express = require('express'); // framework nodejs
const mongoose = require('mongoose'); // framework per mongoDB
const restbeni = require('./routes/restbeni'); // percorso dello script a cui reindirizzare le richieste
const app = express();

mongoose.set('useCreateIndex', true); // obbliga mongoose a usare CreateIndex (nuovo) invece di ensureIndexes

app.use(express.json()); // built-in middleware

// connessione al db
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.get('/', (req, res) => {
    res.send('hello world');
});

app.use('/api', restbeni); // ogni richiesta con questo percorso deve richiamare lo script reststab

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
