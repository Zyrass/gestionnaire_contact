// dépendances
const router = require('express').Router()

router.get('/', (_, res) => {
    res.status(200).json({
        route: '/api/v1/',
    })
})

router.get('/profile/', (_, res) => {
    res.status(200).json({
        route: '/api/v1/profile',
    })
})

router.get('/profile/:userID', (req, res) => {
    res.status(200).json({
        route: '/api/v1/profile/id',
        id: req.params.userID,
    })
})

module.exports = router
