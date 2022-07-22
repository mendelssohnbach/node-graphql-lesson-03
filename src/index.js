const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

const PORT = process.env.PORT || 9090;

const server = new ApolloServer({ resolvers, typeDefs });

server.listen({ PORT }, () => console.log(`Server runs at: http://localhost:${PORT}`));
