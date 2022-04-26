import { createServer } from "@graphql-yoga/node";
import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefinitions = /* GraphQL */ `
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello World!",
  },
};

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
});

async function main() {
  const server = createServer({ schema });
  await server.start();
}

main();
