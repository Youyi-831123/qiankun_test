/*
 * @Date: 2022-10-09 17:55:13
 * @LastEditors: youyi
 * @LastEditTime: 2022-10-16 21:09:47
 */
/* eslint-disable */
import { importHTML } from './import-html';
import { getApps } from './index'

export const handleRouter = async () => {
    // 2.匹配子应用 
    //2.1 获取当前路由路径
    console.log(window.location.pathname);
    //2.2 去apps里面找
    const apps = getApps()
    const app = apps.find( item => window.location.pathname.startsWith(item.activeRule) )
    console.log('app', app);

    if(!app) {
        return
    }

    // 3.加载子应用 
    const { template, getExternalScripts, execScripts } = await importHTML(app.entry)
    // const html = await fetch(app.entry).then(res => res.text())
    // console.log(html);
    const container = document.querySelector(app.container)
    container.appendChild(template)
    // 1.客户端渲染需要通过执行javascript 来生成内容
    //2. 浏览器出于安全，innerHtml中的script不会加载执行
    // container.innerHTML = html
    // getExternalScripts()
    // 配置全局环境变量
    // window.__POWERED_BY_QIANKUN__ = true
    //4.渲染子应用
    execScripts()

}