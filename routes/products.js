import express from "express";
import create from "../controllers/products/create.js";
import destroy from "../controllers/products/destroy.js";
import read from "../controllers/products/read.js";
import readOne from "../controllers/products/readOne.js";
import update from "../controllers/products/destroy.js";

const router = express.Router();

/* GET users listing. */
router.post("/", create);

//READ
router.get("/", read);
router.get("/:id", readOne);

//UPDATE
router.put("/:id", update);

//DESTROY
router.delete("/:id", destroy);

export default router;
