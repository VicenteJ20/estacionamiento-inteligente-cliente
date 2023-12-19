import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    Id: { 
      type: String, required: true
    },
    Status: {
      type: String, required: true
    },
    Board: {
      type: String, required: false
    }
  }
)

export default mongoose.models.Sensores || mongoose.model('Sensores', Schema)