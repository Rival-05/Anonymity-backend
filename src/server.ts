import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
const app = express();
const port = 5000;

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

app.all('/api/auth/*splat', toNodeHandler(auth));
app.use(express.json());
// Mount express json middleware after Better Auth handler
// or only apply it to routes that don't interact with Better Auth

app.get("/",(req,res)=>{
    res.json({
        msg:"hello"
    })
});
app.get("/api/auth/sign-in/social",(req,res)=>{
    res.json({
        msg:"reached social signin"
    })
})
 
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});