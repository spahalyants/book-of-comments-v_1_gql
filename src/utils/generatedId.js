import mongoose from "mongoose";

const generateId = () => new mongoose.Types.ObjectId()

export default generateId;
