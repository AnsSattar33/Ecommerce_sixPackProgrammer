import app from "./app.js";
import dotenv from "dotenv"
import connectDatabase from "./config/database.js";
//config

dotenv.config({ path: "backend/config/config.env" })

// connecting Database 
connectDatabase()

app.listen(process.env.PORT, () => {

    console.log(`server is working on http://localhost:${process.env.PORT}`)
})