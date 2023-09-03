import express from "express";
import morgan from "morgan"
import router from "./src/routes/routes.js";

const app = express();
const port = 3000

app.use(morgan('dev'))
app.use(express.json())
app.use(router)

app.listen(port, (req,res) => {
    console.log(`🚀 Rest server listening on ${port}`)
})