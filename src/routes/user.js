import express from "express";
import usersController from '../controllers/user.js';

const router = express.Router();

router.get('/users', usersController.getAllUsers);
router.get('/users/:id', usersController.getUserById);
router.post('/users', usersController.createUser);
router.delete('/users/:id', usersController.deleteUser);

export default router;