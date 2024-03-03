import express from "express";
import userRouter from "./users.js";
import authRouter from "./auth.js";
import customerRouter from "./customer.js";
import productsRouter from "./products.js";
import uploadRouter from "./upload.js";
import groupingsRouter from "./groupings.js";
import productsBaseRouter from "./productsBase.js";

const router = express.Router();

router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/customers", customerRouter);
router.use("/products", productsRouter);
router.use("/upload", uploadRouter);
router.use("/groupings", groupingsRouter);
router.use("/productsbase", productsBaseRouter);

export default router;
