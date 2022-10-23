/*
 * @Date: 2022-10-16 15:31:20
 * @LastEditors: youyi
 * @LastEditTime: 2022-10-16 15:32:46
 */
/* eslint-disable */
export const fetchResource = url => fetch(url).then(res => res.text())