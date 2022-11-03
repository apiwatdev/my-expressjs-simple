import { Schema } from "mongoose";

export class ICat {
  _id;
  name;
  age;
  breed;
}


const CatSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  breed: {
    type: String,
  },
});

export default CatSchema;
