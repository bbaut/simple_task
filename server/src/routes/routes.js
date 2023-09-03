import { Router } from "express";
import {createTask, getAllTasks} from "../controllers/controllers.js"
import pool from "../db/config.js";

const router = Router();

// router.get('/tasks', getAllTasks)
router.get('/tasks', async (req, res) => {
    const result = await pool.query('SELECT NOW()');
    console.log(result)
    res.json('executed')
})

router.get('/tasks/10', (req, res) => {
    res.send("returning the task number 10")
})

router.post('/tasks', createTask)

router.delete('/tasks', (req, res) => {
    res.send("deleting a task")
})

router.put('/tasks', (req, res) => {
    res.send("updating a task")
})

export default router;