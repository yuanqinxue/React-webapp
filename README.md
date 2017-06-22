## React-webapp 项目

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
$ npm install react redux react-redux react-router-dom -S
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
"start":"webpack-dev-server --part 5000 --open --progress --colors"
"build":"webpack -p"
```