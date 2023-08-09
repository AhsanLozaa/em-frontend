"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAllProductsByPagination = void 0;

var _httpEndpoint = _interopRequireDefault(require("./httpEndpoint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchAllProductsByPagination = function fetchAllProductsByPagination(_ref) {
  var page = _ref.page,
      limit = _ref.limit;
  return _httpEndpoint["default"].get("/products/all", {
    params: {
      page: page,
      limit: limit
    }
  });
};

exports.fetchAllProductsByPagination = fetchAllProductsByPagination;