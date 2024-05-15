const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const db = await mongoose.connect("mongodb+srv://admin:!Cruzeiro00@cluster0.fwqwh.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log(`mongodb connected ${db.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;