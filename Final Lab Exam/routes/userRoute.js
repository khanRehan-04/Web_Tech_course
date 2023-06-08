const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');


// GET
router.get('/', userController.getAlluser);

// GET
router.get('/:id', userController.getuserById);

// POST
router.post('/', userController.createuser);

// PUT
router.put('/:id', userController.updateuser);

// DELETE
router.delete('/:id', userController.deleteuser);

module.exports = router;
