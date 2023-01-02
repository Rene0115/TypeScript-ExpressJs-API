import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const uri = process.env.MONGODB_URI || '';
const database = () => {
  mongoose.connect(uri).then((value) => console.log('database connected')).catch((err) => console.log(err));
};

export default database;
