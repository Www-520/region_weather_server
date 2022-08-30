import express, { Router } from 'express';

const router = express.Router();

router.use((req, res, next) => {
    // 跨域两件套 跨域请求头 OPTIONS预检请求处理
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');
    req.method === 'OPTIONS' ? res.send(200) : next();
});

export default [router] as [Router];
