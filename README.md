# learn-prisma

下一代 ORM
支持 TypesScript、JavaScript、Go
支持 PostgreSQL、MySQL、SQLite、SQLServer 和 Mongodb

```sh
yarn add -D prisma
npx prisma init
```

1. 在`.env`中配置`DATABASE_URL`
2. 在`schema.prisma`配置`provider.datasource`
3. 执行`prisma db pull`导入数据库 Schemad 到 Prisma Schema
4. 执行`prisma generate`生成 Prisma 客户端
