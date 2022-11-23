"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const error_handler_1 = require("./middlewares/error-handler");
const signup_1 = require("./routes/signup");
const app = (0, express_1.default)();
exports.app = app;
//MiddleWares
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
//Routes
app.use('/api', signup_1.signupRouter);
// Error handler
app.use(error_handler_1.errorHandler);
