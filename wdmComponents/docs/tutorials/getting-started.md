# 快速上手

## 环境准备
首先得有 node，并确保 node 版本是 14 或以上。（推荐用 [nvm](https://github.com/nvm-sh/nvm) 来管理 node 版本）

mac 或 linux 下安装 nvm。

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
$ nvm -v
0.39.1
```

安装 node。

```bash
$ nvm install 16
$ nvm use 16
$ node -v
v16.10.0
```

## 创建项目

## 启动项目
执行 `npm dev` 命令，

```bash
$ wdm dev

info  - Wdm v1.0.6
ready - App listening at http://127.0.0.1:8081
<i> [webpack-dev-middleware] wait until bundle finished: /__webpack_hmr
event - Compiled successfully in 6038 ms (945 modules)
webpack built 10a0f092cd4488ce7469 in 6038ms
```
在浏览器里打开 http://localhost:8081 能看到以下界面，


## 部署发布

执行 `wdm build` 命令，

```bash
> wdm build
info  - Wdm v1.0.6
event - Compiled successfully in 5756 ms (773 modules)
event - Build index.html
```

产物默认会生成到 `./dist` 目录下，

```
./dist
├── 12.1abf4969.async.js
├── 168.44bc59e6.async.js
├── index.html
├── wdm.b744bf5d.css
└── wdm.c82f9827js
```

完成构建后，就可以把 dist 目录部署到服务器上了。
