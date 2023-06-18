import { Context } from "../context.js";

const resolvers = {
  Query: {
    async todos(parent: any, args: any, context: Context, info: any) {
      return await context.prisma.task.findMany();
    },
  },
  Mutation: {
    async addTodo(parent: any, args: any, context: Context, info: any) {
      return await context.prisma.task.create({
        data: { name: args.name as string },
      });
    },
  },
};

export default resolvers;
