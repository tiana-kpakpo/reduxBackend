import mongoose, { Schema } from "mongoose";


const ticketSchema = new Schema({
    title: {
        type:String,
        required: true
    },

    description: {
        type:String,
        required: true
    },

    workedOn: {
        type: Boolean,
        required: true,
        default: false
    },
});


const ticket = mongoose.model('ticket', ticketSchema);
export default ticket;

