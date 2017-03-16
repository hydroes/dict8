'use strict';

import Router from 'koa-router';
import NodeExcel from 'excel-export';

const router = new Router();

router.get('/test', async (ctx, next) => {
    ctx.body = {
        'status' : 200,
        'data' : {
            'avgTime' : '00:12:23'
        }
    }
})

router.get('/ui', async (ctx, next) => {
    await ctx.render('./ui')
})

export default router;
