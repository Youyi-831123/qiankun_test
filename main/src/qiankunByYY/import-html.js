/*
 * @Date: 2022-10-16 15:15:42
 * @LastEditors: youyi
 * @LastEditTime: 2022-10-20 19:12:59
 */
// qianKun中采用import-html-entry包
/* eslint-disable */
import { fetchResource } from "./fetchResourse"

export const importHTML = async (url) => {
    const template = document.createElement('div')
    // template.innerHTML = '<p>hello</p>'
    const html = await fetchResource(url)
    template.innerHTML = html
    const scripts = template.querySelectorAll('script')
    console.log(scripts);
    // 获取所有scripts标签的代码： [代码，代码]
    function getExternalScripts() {
        return Promise.all(Array.from(scripts).map(script => {
            const src = script.getAttribute('src')
            if(!src){
                return Promise.resolve(script.innerHTML)
            } else {
                return fetchResource(
                    src.startsWith('http') ? src : `${url}${src}`
                )
            }
        }) )
    }

    //获取并执行所有的scripts脚本代码
    async function execScripts () {
        const pureScripts = await getExternalScripts()
        console.log(pureScripts);
        pureScripts.forEach(code => {
            eval(code)
        })
    }

    return {
        template,
        getExternalScripts,
        execScripts
    }
}