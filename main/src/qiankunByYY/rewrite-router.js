/*
 * @Date: 2022-10-09 17:12:49
 * @LastEditors: youyi
 * @LastEditTime: 2022-10-09 17:57:26
 */
/* eslint-disable */
import { handleRouter } from './handle-router'

export const rewriteRouter = () => {
    window.addEventListener('popstate', ()=> {
        console.log('popstate');
        handleRouter()
    })

    const rawPushState = window.history.pushState
    window.history.pushState = (...args) => {
        rawPushState(window.history, args)
        console.log('pushstate 变化');
        handleRouter()
    }

    const rawReplaceState = window.history.replaceState
    window.history.replaceState = (...args) => {
        rawReplaceState.apply(window.history, args)
        console.log('replaceState 变化');
        handleRouter()
    }
}