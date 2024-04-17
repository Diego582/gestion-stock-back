import { model, Schema, Types } from "mongoose";

let collection = "checks";

let schema = new Schema(
    {
        puntoSales: { type: Number, required: true },
        comprobante: { type: Number, required: true },
        fecha: { type: String, required: true },
        products: [{ type: Types.ObjectId, ref: 'productSales' }]
    },
    { timestamps: true }
);
let Check = model(collection, schema);
export default Check;