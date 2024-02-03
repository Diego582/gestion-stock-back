import { model, Schema, Types } from "mongoose";

let collection = "users";

let schema = new Schema({
  _id: { type: Types.ObjectId, required: true },
  name: { type: String, required: true },
  lastName: { type: String },
  mail: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

let User = model(collection, schema);

export default User;
