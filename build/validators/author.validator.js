"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateReadAuthor = exports.validateUpdateAuthor = exports.validateAuthor = void 0;
const joi_1 = __importDefault(require("joi"));
exports.validateAuthor = joi_1.default.object().keys({
    name: joi_1.default.string().required()
});
exports.validateUpdateAuthor = joi_1.default.object().keys({
    id: joi_1.default.string().required(),
    name: joi_1.default.string().required()
});
exports.validateReadAuthor = joi_1.default.object().keys({
    id: joi_1.default.string().required()
});
exports.default = { validateAuthor: exports.validateAuthor, validateUpdateAuthor: exports.validateUpdateAuthor, validateReadAuthor: exports.validateReadAuthor };
