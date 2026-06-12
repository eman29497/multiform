import mongoose from 'mongoose';
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  const uri = process.env.MONGODB_URI;
  if(!uri) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
  }
  await mongoose.connect(uri);
};
export default connectDB;


