// dépendances
const router = require('express').Router()

router.get('/', (_, res) => {
    res.status(200).render('index')
})

router.get('/login', (req, res) => {
    res.status(200).render('login')
})

router.get('/signup', (_, res) => {
    res.status(200).render('signup')
})

router.get('/profile', (_, res) => {
    res.status(200).render('profile')
})

router.get('/profile/:userID/contacts', (req, res) => {
    res.status(200).render('contact')
})

module.exports = router
