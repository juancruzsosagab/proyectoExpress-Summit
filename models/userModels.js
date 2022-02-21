const mongoose = require("../bin/mongodb");

const usersSchema = new mongoose.Schema({
    full_name: String,
    username: String,
    password: String,
    email: String,
});

module.exports = mongoose.model("users", usersSchema);