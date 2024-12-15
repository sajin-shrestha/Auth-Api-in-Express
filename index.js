import express from "express";
import helmet from "helmet";
import cors from "cors"
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

const app = express()

app.use(cors())
app.use(helmet())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Database connected...")
}).catch(err => console.error(err))

app.get('/', (req, res) => {
  res.json({message:"Hello from server"})
})

app.listen(process.env.PORT, () => {
  console.log("listening....")
})
