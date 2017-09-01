# nuxt-iview #

## 技术栈
nuxt + iview + vue2 + vuex + vue-router + webpack + ES6/7 + axios + sass + flex 

# 项目运行

#### 注意：由于涉及大量的 ES6/7 等新属性，nodejs 必须是 6.0 以上版本 ，node 7 是先行版，有可能会出问题，建议使用 node 6 稳定版

npm install
**注意：该项目目前使用element-ui@1.3.3版本,所以最低兼容 Vue 2.3.0**



## 功能
- 登录/注销


## 开发
```bash
    # 安装依赖
    npm install
    //or # 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题
    npm install --registry=https://registry.npm.taobao.org

    # 本地开发 开启服务
    npm run dev
```
浏览器访问 http://localhost:3000/login

## 发布
```bash
    # 发布测试环境 带webpack ananalyzer
    npm run build:sit-preview

    # 构建生成环境
    npm run build
```
## 可选工具
```bash
    # 安装yarn
    npm i -g yarn

    # 安装依赖
    yarn

    # 重新安装依赖，相当于删除node_modules目录重装
    yarn upgrade

    # 添加依赖
    yarn add [module]

    # 删除依赖
    yarn remove [module]

```

## 目录结构
```shell
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── filtres                // 全局filter
│   ├── mock                   // mock数据
│   ├── router                 // 路由
│   ├── store                  // 全局store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── view                   // view
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口 加载组件 初始化等
├── static                     // 第三方不打包资源
│   ├── jquery
│   └── Tinymce                // 富文本
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
└── package.json               // package.json

```


## 状态管理
后台只有user和app配置相关状态使用vuex存在全局，其它数据都由每个业务页面自己管理。



