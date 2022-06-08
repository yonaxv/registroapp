const express = require('express');

const UserController = require('../controller/user.controller');

const router = express.Router();

router.get('/getusers',UserController.getUsers);
router.get('/getuser/:id',UserController.getUser);
router.post('/createuser',UserController.createUser);
router.put('/updateuser/:id',UserController.updateUser);
router.delete('/deleteuser/:id',UserController.deleteUser);

module.exports = router;