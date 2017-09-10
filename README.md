# nuxt-iview #

## 技术栈
nuxt + iview + vue2 + vuex + nuxt + ES6/7 + axios + sass + flex 

# 项目运行

#### 注意：由于涉及大量的 ES6/7 等新属性，nodejs 必须是 6.0 以上版本 ，先行版有可能会出问题，建议使用稳定版

npm install

**注意：该项目目前使用iview@2.x版本, 所以最低兼容 Vue 2.x, 不支持IE 8**



## 功能
- 登录/注销
- 找回密码
- 登录/注销

## 开发
```bash
    # 安装依赖
    npm install
    //or # 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题
    npm install --registry=https://registry.npm.taobao.org
    //or # 使用yarn安装
    yarn

    # 本地开发 开启服务 浏览器访问 http://localhost:3000
    npm run dev
    //or
    yarn dev
```

## 发布
```bash
    # 发布测试环境 带webpack ananalyzer
    npm run build-check

    # 构建生产环境
    npm run build

    # 生产环境部署
    npm run start
    //or # 静态部署, generate生成的dist目录设置成网站根目录即可
    npm run generate
```

## 可选工具
```bash
    # 安装yarn, 用法同npm
    npm i -g yarn
```

## 目录结构
```shell
├── assets                     // 资源
├── components                 // 组件
├── layouts                    // 布局
├── dist                       // 生成的静态页面
├── pages                      // 动态页面编码
├── plugins                    // 插件（全局加载）
├── static                     // 静态资源
├── store                      // vuex全局store管理
├── .editorconfig              // 编辑器风格配置项
├── .eslintrc.js               // eslint 配置项
├── .gitignore                 // git 忽略项
├── nuxt.config.js             // nuxt配置项
├── package.json               // package.json
└── yarn.lock                  // yarn.lock
```


## 状态管理
后台只有user和app配置相关状态使用vuex存在全局，其它数据都由每个业务页面自己管理。
