import express from 'express';
import cors from './cores/cors';
import error from './cores/error';
import test from './apps/test';
import region from './apps/region';
import weather from './apps/weather';
import path from 'path';

const app = express();
const server = app
    .use(express.static(path.join(__dirname, '../public')))
    .use(...cors)
    .use(...test)
    .use(...region)
    .use(...weather)
    .use(...error)
    .listen(0);
console.log('opened server on', server.address());
