import { model, Schema, Types } from "mongoose";

let collection = "product";

let schema = new Schema(
  {
    codigoBarras: { type: String, required: true },
    descripcion: { type: String, required: true },
    categoria: { type: String, required: true },
    agrupamiento: { type: String, required: true },
  },
  { timestamps: true }
);
let Customer = model(collection, schema);
export default Customer;
