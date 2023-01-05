"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const author_services_1 = __importDefault(require("../services/author.services"));
class AuthorController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const author = yield author_services_1.default.create(req.body);
            res.status(200).send({
                data: author
            });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const author = yield author_services_1.default.findById(req.body.id);
            res.status(200).send({
                data: author
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const author = yield author_services_1.default.findById(req.body.id);
            const newname = req.body.name;
            yield author.updateOne({ name: newname });
            yield author.save();
            res.status(200).send({
                data: author
            });
        });
    }
}
exports.default = new AuthorController();
