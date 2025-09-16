import mongoose, { connect } from "mongoose";

let isConnected = false;

export async function connectDB() {
    if(isConnected){
       console.log("Using existing database connection");
       return;
    }

    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected=true;
        console.log("Mongodb Connected...")
    }
    catch(error){
       console.error("mongodb connection error :",error)
       throw new Error("failed to connect to MongoDB")
    };
    
}

