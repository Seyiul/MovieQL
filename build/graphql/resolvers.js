"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = require("./db.js");

var resolvers = {
  Query: {
    movies: function movies(_, _ref) {
      var rating = _ref.rating,
          limit = _ref.limit;
      return (0, _db.getMovies)(limit, rating);
    },
    movie: function movie(_, _ref2) {
      var id = _ref2.id;
      return (0, _db.getMovie)(id);
    },
    searching: function searching(_, _ref3) {
      var keyword = _ref3.keyword;
      return (0, _db.searchMovie)(keyword);
    },
    suggestions: function suggestions(_, _ref4) {
      var id = _ref4.id;
      return (0, _db.getSuggestions)(id);
    }
  }
};
var _default = resolvers;
exports["default"] = _default;