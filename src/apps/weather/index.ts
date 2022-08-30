import express, { Router } from 'express';

const route = '/weather';

const router = express.Router();

router.use((req, res, next) => {
    console.log(`路由：${route}, 时间：${Date.now()}`);
    next();
});

/**
 * 获取天气
 * path: /weather
 * method: get
 */
router.get('/', (req, res) => {
    res.send(`path “${route}” with method “get”`);
});

export default [route, router] as [string, Router];
