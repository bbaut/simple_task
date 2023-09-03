import pkg from 'pg';
import dotenv from 'dotenv';
const { Pool } = pkg;

dotenv.config();    

const pool = new Pool({
    user:'postgres',
    password: 'postgres',
    host: 'localhost',
    port: '5432',
    database: 'taskdb'    
})

export default pool;