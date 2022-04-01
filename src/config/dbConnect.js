import mongoose from "mongoose";

mongoose.connect("mongodb+srv://enzotorrs:123@cluster0.dvmtg.mongodb.net/test")

const db = mongoose.connection;

export default db;
