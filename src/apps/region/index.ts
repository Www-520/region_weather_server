import express, { Router } from 'express';

const route = '/region';

const router = express.Router();

router.use((req, res, next) => {
    console.log(`路由：${route}, 时间：${Date.now()}`);
    next();
});

/**
 * 获取地区列表
 * path: /region
 * method: get
 */
router.get('/', (req, res, next) => {
    res.send(`path “${route}” with method “get”`);
});

/**
 * 上传地区列表
 * path: /region
 * method: post
 */
router.post('/', (req, res) => {
    res.send(`path “${route}” with method “post”`);
});

/**
 * 查找地区
 * path: /region/search
 * method: get
 */
router.get('/search', (req, res) => {
    
});

export default [route, router] as [string, Router];
