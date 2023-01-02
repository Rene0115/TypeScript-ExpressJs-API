"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const uri = process.env.MONGODB_URI || '';
const database = () => {
    mongoose_1.default.connect(uri).then((value) => console.log('database connected')).catch((err) => console.log(err));
};
exports.default = database;
