# learn-prisma

下一代 ORM
支持 TypesScript、JavaScript、Go
支持 PostgreSQL、MySQL、SQLite、SQLServer 和 Mongodb

```sh
yarn add -D prisma
npx prisma init
```

安装 TS

```bash
yarn add typescript ts-node @types/node -D
yarn tsx --init
```

1. 在`.env`中配置`DATABASE_URL`
2. 在`schema.prisma`配置`provider.datasource`
3. 执行`prisma db pull`导入数据库 Schemad 到 Prisma Schema
4. 执行`prisma generate`生成 Prisma 客户端

运行 MYSQL

```bash
docker run --name mysql-king -v /Users/dreamerking/data/king-mysql:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT=king -e MYSQL_ROOT_PASSWORD=king123 -d mysql
```

```bash
grant all privileges on *.* to 'king'@'%' identified by 'king123' with grant option;
// 高版本
grant all privileges on *.* to "king"@"%";
```

```bash
prisma init --datasource-provider mysql
yarn prisma init --url mysql://king:king123@localhost:3306/test
yarn prisma db pull
npx prisma migrate dev --name init
npx prisma studio
yarn add @prisma/client
yarn prisma generate
```

在 Schema 中可以配置：

- Data source
- Generator
- Data Model

数据模型的作用：

- 呈现表/集合的结构；
- 提供 Prisma Client 生成查询的基础。

创建数据的模型的两种方式：

- 手动编写；
- 从现有数据中生成。

修改数据模型后要手动运行`prisma generate`重新生成 Prisma Client。

部署

```bash
prisma generate --schema ./prisma/schema.prisma
yarn prisma generate deploy
```

prisma 子命令

- generate
- migrate
- studio
- introspect
- db pull
- format 格式化 schema

```prisma
model User {
  id      Int      @id @default(autoincrement())
  name    String
  email   String   @unique
  posts   Post[]
  profile Profile?
}
```

环境变量访问使用`env()`方法

注释

- `//` 不出现在 AST 中
- `///` 出现在 AST 中描述

@@map()/@map()

模型字段

- name
- type
- type modifiers
- attributes

@id()/@@id()
@default()
@unique/@@unique

索引
@@index() / @@index([compositeType.field])

```prisma
@@index([address.city.name])
```

类型定义

```prisma
type Address {
  number Int
  city City
}
```

枚举定义

```prisma
enum Role {
  USER = '0'
  ADMIN = '1'
}
```

组合类型定义(只有 Mongodb 支持)
组合类型支持@default、@map,不支持@unique、@id、@relation、@ignore、@updatedAt

```prisma
type Photo {
  height Int
  width Int
  url String
}
```

函数

- now()
- autoincrement()
- dbgenerated()
- auto() (Mongodb 生成 ObjectId)

CRUD

- findMany
- findUnique
- create
- upsert
- delete
- updateMany
- deleteMany

关系

- one-to-many

Typegraphql-prisma

```bash
yarn add typegraphql-prisma -D
yarn add graphql-scalars graphql-fields @types/graphql-fields ts-lib

SKIP_PRISMA_VERSION_CHECK=true yarn prisma generate

```
