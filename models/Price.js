import { model, Schema, Types } from "mongoose";

let collection = "price";

let schema = new Schema(
    {
        price: { type: Number, required: true },
    },
    { timestamps: true }
);
let Price = model(collection, schema);
export default Price;