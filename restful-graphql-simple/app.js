const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");
const app = express();
const port = 3000;

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => "Say hi from GraphQL",
    },
  },
});

server.start().then(() => {
  server.applyMiddleware({ app });
});

app.get("/api", (req, res, next) => {
  res.send("Say hi from API");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
