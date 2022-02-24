const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require ('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
<<<<<<< HEAD
=======
router.use('/', homeRoutes);
>>>>>>> ec3abb1e0e3348f8c91815fae9d3b6de3573563c

module.exports = router;
