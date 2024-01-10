export const typeDefs = `#graphql
  type User {
    id: String!
    firstName: String!
    lastName: String
    username: String!
    email: String!
    createAt: String!
    updateAt: String!
  }
  type Mutation {
    createAccount(
        firstName: String!
        lastName: String
        username: String!
        email: String!
        password: String!
    ): User
    
  }
`;
