import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import schema from "./schema.js";

// The GraphQL schema
// const typeDefs = `#graphql
//   type Movie {
//     id: Int!
//     title: String!
//     year: Int!
//     genre: String
//     createdAt: String!
//     updatedAt: String!
//   }
//   type Query {
//     movies: [Movie]
//     movie(id: Int!): Movie
//   }
//   type Mutation {
//     createMovie(title:String! year:Int! genre:String): Movie
//     deleteMovie(id:Int!): Movie
//     updateMovie(id:Int! year:Int!): Movie
//   }
// `;

// A map of functions which return data for the schema.

const server = new ApolloServer({
  schema,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
