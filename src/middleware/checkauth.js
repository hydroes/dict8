'use strict';

export default function checkauth() {
    return async function (ctx, next) {

         if (ctx.isAuthenticated()
         || ctx.path.indexOf('/auth/') >= 0
         || ctx.path.indexOf('/open/') >= 0
         || ctx.path.indexOf('/sound/') >= 0
         || ctx.path==='/'
         || ctx.path.indexOf('.html') >= 0) {
            await next()
        } else {
            ctx.body = {
                "status" : 401
            }
        }
    }
}