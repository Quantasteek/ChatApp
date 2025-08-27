import e from "express";
import authRoutes from "./routes/auth.route.js"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js";
import cookieParser from 'cookie-parser';
import cors from "cors"
import messageRoutes from "./routes/message.route.js";
import {app, server} from "./lib/socket.js";


dotenv.config()
app.use(cookieParser());
app.use(e.json())
app.use(cors({origin: "http://localhost:5173", credentials:true}))

app.use('/api/auth', authRoutes)
const port = process.env.PORT || 3001
app.use('/api/messages', messageRoutes);

server.listen(port, ()=>{
    console.log(`Server listening on PORT ${port}`);
    connectDB()
    
})