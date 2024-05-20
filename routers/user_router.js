const express = require('express')
const router = express.Router()

const userController = require('../controllers/user_controller')

//Add User Router
router.post('/addUser',userController.addUser)

//Add bulkUser Router
router.post('/addUsers',userController.addUsers)

//find All User Router
router.get('/userget',userController.getUsers)

//Find User By Id Router
router.get('/userget/:id',userController.getUser)

//Update User Router
router.patch('/updateUser/:id',userController.updateUser)

//Delete User Router
router.delete('/deleteUser/:id',userController.deleteuser)

module.exports = router;