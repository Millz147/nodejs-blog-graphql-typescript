import { gql } from 'apollo-server-express'; //will create a schema
const Schema = gql`
  type Posts {
    id: ID!
    author: String
    title: String
    content: String
  }
  type Query{
    getAllPosts: [Posts] #will return multiple Posts instances
    getPost(id: Int): Posts #has an argument of id of type Integer.
  }
`;
export default Schema;
