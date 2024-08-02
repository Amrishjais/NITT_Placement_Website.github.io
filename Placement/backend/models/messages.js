import mongoose from "mongoose";
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    // sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: {
         type: String,
         required: true 
        },
    timestamp: {
         type: Date,
          default: Date.now 
    },
});

export default mongoose.model("Messagesss", messageSchema);
