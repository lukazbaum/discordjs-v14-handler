const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/";

async function connect(databaseName) {
    mongoose.set('strictQuery', false);
    mongoose.connect(`${url}${databaseName}`, err => {
        if (err != null) console.error(err);
    });
    return mongoose;
}

module.exports = { connect };
