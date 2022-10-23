/*
 * @Date: 2022-10-07 23:49:48
 * @LastEditors: youyi
 * @LastEditTime: 2022-10-16 14:42:56
 */
/* eslint-disable */
import { rewriteRouter } from './rewrite-router'
import { handleRouter } from './handle-router'
let _apps = []

export const getApps = () => _apps

export const registerMicroApps = (apps) => {
    _apps = apps
}

export const start = () => {
    // 微前端运行原理： 
    // 1.监视路由变化
    rewriteRouter()
    // 2.匹配子应用 3.加载子应用 4.渲染子应用
    handleRouter()

} 
