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

// Définition du moteur de template utilisé ( PUG )
app.set('view engine', 'pug')

// Définition d'une première route
app.get('/', (_, res) => {
    res.status(200).json({
        message: 'Bienvenue sur cette application',
    })
})

// Démarrage du serveur
app.listen(PORT, () => {
    boxen(`Serveur démarrer sur cette adresse: http://${HOSTNAME}:${PORT}`, {
        padding: 1,
        margin: 1,
    })
})
