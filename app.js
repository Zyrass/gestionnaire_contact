// dépendances
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const boxen = require('boxen')
const path = require('path')

// Configuration de l'application
const PORT = process.env.PORT || 5000
const HOSTNAME = process.env.HOSTNAME
const app = express()

// Configuration des middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// Définition du moteur de template utilisé ( PUG )
app.set('view engine', 'pug')

// Utilisation du router INTERFACe
const routerINTERFACE = require('./router/interface.routes')
app.use('/', routerINTERFACE)

// Utilisation du router API
const routerAPI = require('./router/api.routes')
app.get('/api', (_, res) => {
    res.redirect('/api/v1')
})
app.use('/api/v1', routerAPI)

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(
        boxen(
            `Serveur démarrer sur cette adresse: http://${HOSTNAME}:${PORT}`,
            {
                padding: 1,
                margin: 1,
            },
        ),
    )
})
