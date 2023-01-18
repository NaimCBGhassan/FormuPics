import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
    },
    description: {
      type: String,
      require: true,
      trim: true,
    },
    image: {
      url: String,
      public_id: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model(`Post`, postSchema);
