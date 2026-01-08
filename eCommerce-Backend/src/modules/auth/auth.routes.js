import express from "express";
import * as auth from "./auth.controller.js";

const authRouter = express.Router();

// Support both old and new endpoint names for compatibility
authRouter.post("/signup", auth.signUp);
authRouter.post("/signin", auth.signIn);
authRouter.post("/register", auth.signUp);
authRouter.post("/login", auth.signIn);

export default authRouter;
