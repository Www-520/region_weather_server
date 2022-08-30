import { Request, Response, NextFunction } from 'express';
import error from '../configs/error.json';

/**
 * 业务错误
 * @param err 
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
function businessError(err: number | Error, req: Request, res: Response, next: NextFunction): void {
    if (err instanceof Error) {
        next(err);
        return;
    }
    const { status, code, message } = error[err - 10000];
    if (status >= 500) { // 服务器错误
        // do something
    } else if (status >= 400) { // 客户端错误
        // do something
    } else { // 其它错误
        // do something
    }
    res.status(status);
    res.send(JSON.stringify({ code, message }));
}

/**
 * 代码错误
 * @param err 
 * @param req 
 * @param res 
 * @param next 
 */
 function codeError(err: Error, req: Request, res: Response, next: NextFunction): void {
    const { status, code, message } = error[0];
    res.status(status);
    res.send(JSON.stringify({ code, message }));
}

export default [businessError, codeError];
