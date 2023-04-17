// dépendances
const router = require('express').Router()

router.get('/', (_, res) => {
  res.status(200).render('pages/index', {
    title: 'Accueil',
  })
})

router.get('/login', (req, res) => {
  res.status(200).render('pages/login', {
    title: 'Connexion',
  })
})

router.get('/signup', (_, res) => {
  res.status(200).render('pages/signup', {
    title: 'Inscription',
  })
})

router.get('/profile', (_, res) => {
  res.status(200).render('pages/profile', {
    title: 'Profile',
  })
})

router.get('/profile/:userID/contacts', (req, res) => {
  res.status(200).render('pages/contact', {
    title: 'Contact',
  })
})

router.get('/logout', (_, res) => {
  res.redirect('/')
})

module.exports = router
