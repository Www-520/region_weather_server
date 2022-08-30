import express, { Router } from 'express';

const route = '/test';

const router = express.Router();

router.use((req, res, next) => {
    console.log(`路由：${route}, 时间：${Date.now()}`);
    next();
});

/**
 * 服务是否可用
 * path: /test
 * method: get
 */
router.get('/debug', (req, res) => {
    res.send(`path “${route}/debug” with method “get”`);
});

export default [route, router] as [string, Router];
