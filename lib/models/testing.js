const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    amount: { type: Number, default: 1 }
})

module.exports = mongoose.model("testing", schema, "testing");