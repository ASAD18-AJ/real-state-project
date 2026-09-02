import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://asadjahangir2002_db_user:zg9nvhHE6VargRHv@cluster0.tomfgzm.mongodb.net/?appName=Cluster0/realState").then(() => {
        console.log("DB CONNECTED");
    })
}