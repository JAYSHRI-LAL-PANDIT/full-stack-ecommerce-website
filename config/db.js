import mongoose from "mongoose";

const connectDB = async (req, res) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connection to mongodb is Successfully ${conn.connection.host}`.bgGreen
        .white
    );
  } catch (error) {
    console.log(`Error in mongodb connection ${error}`.bgRed.white);
  }
};
export default connectDB;
