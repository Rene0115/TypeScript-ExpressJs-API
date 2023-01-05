"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const author_routes_1 = __importDefault(require("./author.routes"));
const router = express_1.default.Router();
router.use("/author", author_routes_1.default);
exports.default = router;
