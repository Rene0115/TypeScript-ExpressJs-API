"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
const express_1 = __importDefault(require("express"));
const pino_1 = __importDefault(require("pino"));
const middleware_1 = __importDefault(require("./middlewares/middleware"));
const dotenv_1 = __importDefault(require("dotenv"));
require("express-async-errors");
dotenv_1.default.config();
const app = (0, express_1.default)();
const logger = (0, pino_1.default)();
(0, middleware_1.default)(app);
let port = process.env.PORT || 3000;
app.listen(port, () => {
    if (port == null || port === '' || port === undefined) {
        port = 8000;
    }
    logger.info(`Server is running on port ${port}`);
});
exports.default = logger;
