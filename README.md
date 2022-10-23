# qiankun-手写

qiankun 手写 demo，父应用 vue，子应用使用 `react`, `vue` 和 `原生HTML`。

[微前端qiankun从搭建到部署的实践](https://juejin.im/post/6875462470593904653)

## 开始
安装根目录工程依赖
```
npm i
```
一键安装所有主子应用的依赖
```
npm run install
```

一键启动所有所有应用
```
npm start
```

通过 [http://localhost:8080/](http://localhost:8080/) 访问主应用。

## 发布
一键构建并打包所有主子应用
```
npm run build
```


### 基座主要的工作：
1.注册子应用
微前端的运行原理与spa十分相似
registerMicroApps 当匹配到activerule的时候，请求获取entry资源，渲染到container中

2.start

### 子应用接入
1.暴露出来三个必要到生命周期函数
且生命周期函数必须返回promise（async 始终返回promise）

export async function bootstrap () {
  console.log('[vue] vue app bootstraped')
}

export async function mount (props) {
  console.log('[vue] props from main framework', props)

  commonStore.globalRegister(store, props)

  render(props)
}

export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}

2.修改webpack配置项

子组件需要打包成umd库，因为子组件js等资源需要在请求时运行。
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    }
  },




### 微前端运行原理： 
1.监视路由变化

hash 路由：window.onhashchange

history 路由： 
history.go  history.back  history.forward 使用popstate事件 window.onpopstate

    window.addEventListener('popstate', () => {
        console.log('popstate');
    })

pushstate replacestate 需要通过函数重写方式进行劫持

2.匹配子应用 
3.加载子应用 
4.渲染子应用