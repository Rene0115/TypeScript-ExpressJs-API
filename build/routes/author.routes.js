"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const author_controller_1 = __importDefault(require("../controllers/author.controller"));
const author_validator_1 = require("../validators/author.validator");
const validator_1 = __importDefault(require("../validators/validator"));
const authorRouter = express_1.default.Router();
authorRouter.post("/create", [(0, validator_1.default)(author_validator_1.validateAuthor)], author_controller_1.default.create);
authorRouter.get("/read", [(0, validator_1.default)(author_validator_1.validateReadAuthor)], author_controller_1.default.read);
authorRouter.patch("/updatename", [(0, validator_1.default)(author_validator_1.validateUpdateAuthor)], author_controller_1.default.update);
exports.default = authorRouter;
