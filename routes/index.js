const {Router} = require('express')
const router = Router();

const UserRoutes = require('./user.routes')


// router.get('/', (req, res) => {
//     res.end('Hi this is a test');
// });

router.use('/user', UserRoutes);

module.exports = router;