import mongoose, { connection } from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MONGODB CONNECTED SUCCESFULLY")
        })

        connection.on("error", (err) => {
            console.log("MongoDB connection error " + err)
            process.exit();
        })

    } catch(error) {
        console.log("Something goes wrong!")
        console.log(error);
    }
}