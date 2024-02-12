import express from "express";
import userRouter from "./users.js";
import authRouter from "./auth.js";
import customerRouter from "./customer.js";

const router = express.Router();

router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/customers", customerRouter);

export default router;
