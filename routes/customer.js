import express from "express";
import create from '../controllers/customers/create.js';
import destroy from '../controllers/customers/destroy.js';
import read from '../controllers/customers/read.js';
import readOne from '../controllers/customers/readOne.js';
import update from '../controllers/customers/destroy.js'

const router = express.Router();

/* GET users listing. */
router.post('/', create)

//READ
router.get('/', read)
router.get('/:id', readOne)

//UPDATE
router.put('/:id',update)

//DESTROY
router.delete('/:id', destroy)

export default router;
