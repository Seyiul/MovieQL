import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers.js";
import cors from 'cors';

const server = new GraphQLServer({
  cors:{
    origin:'*'
  },
  typeDefs: `type Movie {
    id: Int!
    title: String!
    rating: Float
    description_intro: String
    language: String
    medium_cover_image: String
    genres: [String]
  }
  
  type Query {
    movies(limit: Int, rating: Float): [Movie]!
    movie(id: Int!): Movie
    searching(keyword:String!):[Movie]
    suggestions(id: Int!): [Movie]!
  }
  `,
  resolvers,
});

const app = express();
app.use(cors());

server.start(() => console.log("Graphql Server Running"));
