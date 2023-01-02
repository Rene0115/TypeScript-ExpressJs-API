import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const uri = process.env.MONGODB_URI || 'mongodb+srv://RENE:password1234@cluster0.jpnvvoz.mongodb.net/typescript_API?retryWrites=true&w=majority';
const database = () => {
  mongoose.connect(uri).then((value) => console.log('database connected')).catch((err) => console.log(err));
};

export default database;
