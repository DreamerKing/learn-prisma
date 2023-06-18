import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers/index.js";
import { prisma, Context } from "./context.js";

try {
  const server = new ApolloServer<Context>({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    context: async () => ({ prisma }),
    listen: {
      port: 4000,
    },
  });
  console.log(`🚀 Server ready at: ${url}`);
} catch (err) {
  console.error(err);
}
