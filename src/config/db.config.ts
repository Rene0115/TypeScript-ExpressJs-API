import dotenv from 'dotenv';
import mongoose from 'mongoose';
import logger from '../app';

dotenv.config();
const uri = process.env.DATABASE_URI || '';
const database = () => {
  mongoose.connect(uri).
  then((value) => 
  logger.info('database connected'))
  .catch((err) =>
   logger.error(err));
};

export default database;
