import {Redis} from 'ioredis';
require('dotenv').config();

const redisClient = () => {
    if(process.env.REDIS_URL){
        console.log(`Redis conectado`);
        return process.env.REDIS_URL;
    }
    throw new Error('Falha na conexão Redis');
};

export const redis = new Redis(redisClient());
