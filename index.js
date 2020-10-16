import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log("server running port 4000"));

//schema는 네가 사용자에게 보내거나 사용자로부터 받을 data에 대한 설명이다.
