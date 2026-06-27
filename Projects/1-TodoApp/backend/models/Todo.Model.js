import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a todo title"],
      trim: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Todo", todoSchema);
