import mongoose from "mongoose";

export function dbConnection() {
  const mongoUrl = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/Ecommerce-App";
  mongoose
    .connect(mongoUrl)
    .then(() => {
      console.log("DB Connected Succesfully");
    })
    .catch((error) => {
      console.log("DB Failed to connect", error);
    });
}


//Use this is postman https://ecommerce-backend-codv.onrender.com/api/v1/auth/signup

