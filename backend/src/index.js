import e from "express";
import authRoutes from "./routes/auth.route.js"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js";
import cookieParser from 'cookie-parser';

const app =e();
dotenv.config()
app.use(cookieParser());
app.use(e.json())
app.use('/api/auth', authRoutes)
const port = process.env.PORT || 3001

app.listen(port, ()=>{
    console.log(`Server listening on PORT ${port}`);
    connectDB()
    
})