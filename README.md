# React-webapp 项目

## 搭建环境

### React技术栈
- react react-router4 redux react-redux

### 初始化package.json
```
$ npm init -y
```

### webpack
```
$ npm install webpack webpack-dev-server -D
```

### babel
```
$ npm install babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react css-loader style-loader less less-loader html-webpack-plugin -D
```

###
```
$ npm install react redux react-redux react-router-dom react-dom -S
```

###
```
$ npm install es6-promise whatwg-fetch -D
```

###
```
$ npm install express -S
```

### package.json script
```
"start":"webpack-dev-server --port 5000 --open --progress --colors"
"build":"webpack -p"
```

### 创建 webpack.config.js 文件

## 目录结构
- components 组件 木偶组件
- containers 页面组件
    - Home
        - subpage 智能组件
        - index.js
- index.js 用来控制显示哪一个页面

- store 一个页面只能有一个store
    - action 用户发布动作
    - reducer 定义规则
    - action-types action的名字

###