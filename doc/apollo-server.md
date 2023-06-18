# Apollo Server

1. 初始化项目

```bash
npm init --yes && npm pkg set type="module"
```

1. 安装依赖

```bash
npm install @apollo/server graphql

```

1. 配置 Typscript

```bash
npm install --save-dev typescript @types/node

```

package.json script

```bash
  "start": "pnpm compile && node ./dist/index.js",
```
