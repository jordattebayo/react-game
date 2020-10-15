const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    }
})

const Test = mongoose.model("Test", TestSchema);
module.exports = Test; 