"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMiddleware = void 0;
const ErrorHandler_1 = __importDefault(require("../utils/ErrorHandler"));
const ErrorMiddleware = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Erro do Servidor Interno";
    // wrong mongodb id error
    if (err.name === "CastError") {
        const message = `Recurso não encontrado. Inválido: ${err.path}`;
        err = new ErrorHandler_1.default(message, 400);
    }
    // Duplicate key error
    if (err.code === 11000) {
        const message = `Duplicado ${Object.keys(err.keyValue)} entrou`;
        err = new ErrorHandler_1.default(message, 400);
    }
    // wrong jwt error
    if (err.name === "JsonWebTokenError") {
        const message = `O token da web Json é inválido. Tente novamente`;
        err = new ErrorHandler_1.default(message, 400);
    }
    // JWT expired error
    if (err.name === "TokenExpiredError") {
        const message = `O token da web Json expirou, tente novamente`;
        err = new ErrorHandler_1.default(message, 400);
    }
    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};
exports.ErrorMiddleware = ErrorMiddleware;
