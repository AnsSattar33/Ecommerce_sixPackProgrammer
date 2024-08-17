import mongoose from "mongoose";
// import dotenv from "dotenv"

// dotenv.config({ path: "backend/config/databse.js" })

const connectDatabase = () => {

    mongoose.connect(process.env.DB_URI).then((data) => {
        console.log(`Mongodb connected with server ${data.connection.host}`)
    }).catch((error) => {
        console.log("error in Mongodb Database = ", error)
    })
}

export default connectDatabase