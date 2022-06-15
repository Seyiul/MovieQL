"use strict";

var _graphqlYoga = require("graphql-yoga");

var _resolvers = _interopRequireDefault(require("./graphql/resolvers.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = new _graphqlYoga.GraphQLServer({
  typeDefs: "type Movie {\n    id: Int!\n    title: String!\n    rating: Float\n    description_intro: String\n    language: String\n    medium_cover_image: String\n    genres: [String]\n  }\n  \n  type Query {\n    movies(limit: Int, rating: Float): [Movie]!\n    movie(id: Int!): Movie\n    searching(keyword:String!):[Movie]\n    suggestions(id: Int!): [Movie]!\n  }\n  ",
  resolvers: _resolvers["default"]
});
server.start(function () {
  return console.log("Graphql Server Running");
});