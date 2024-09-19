import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from './routes/userRoute.js'
import postRoute from './routes/postRoute.js'
import messageRoute from './routes/messageRoute.js'
import path from "path";
import { app, server } from "./socket/socket.js";

dotenv.config();


const __dirname = path.resolve();

const PORT = process.env.PORT || 3000;

connectDB();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
const corsOptions = {
  origin: "process.env.URL",
  credentials: true,
};
app.use(cors(corsOptions));

// api routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/post", postRoute);
app.use("/api/v1/message", messageRoute);



app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});



server.listen(PORT, () => {
  console.log(`Server listen at port ${PORT}`);
});
