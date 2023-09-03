import pool from "../db/config.js";

const getAllTasks = async (req, res) => {
    const allTasks = await pool.query('SELECT * FROM task')
    console.log(allTasks)
    res.json(allTasks)
}

const createTask = async (req, res) => {
    const {title, description} = req.body

    try {
        const result = await pool.query('INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *', [
            title, 
            description
        ])
    
        res.json(result.rows[0])
    } catch (error) {
        res.json({error: error.message})
    }
}

export {
    getAllTasks,
    createTask
}