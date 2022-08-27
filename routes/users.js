import express from 'express';

import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers); // Get users

router.post('/', createUser); // Add user

router.get('/:id', getUser); // View user Detail

router.delete('/:id', deleteUser); // Delete user

router.patch('/:id', updateUser); // Update User Detail

export default router;