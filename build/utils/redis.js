"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redis = void 0;
const ioredis_1 = require("ioredis");
require('dotenv').config();
const redisClient = () => {
    if (process.env.REDIS_URL) {
        console.log(`Redis conectado`);
        return process.env.REDIS_URL;
    }
    throw new Error('Falha na conexão Redis');
};
exports.redis = new ioredis_1.Redis(redisClient());
