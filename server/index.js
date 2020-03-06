const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const storeHeadlines = require("../scraper/store-headlines");

require("./db");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  cors: true,
  debug: true,
  introspection: true,
});

const PORT = process.env.PORT || 4000;

console.log("port", PORT);
server.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at port: ${PORT}`);
});


storeHeadlines();
setInterval(() => {
  storeHeadlines();
}, 3600000);
