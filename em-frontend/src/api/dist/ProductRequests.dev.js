"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAllProductsBySellerId = exports.fetchAllProductsByPagination = void 0;

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

var fetchAllProductsBySellerId = function fetchAllProductsBySellerId(_ref2) {
  var sellerId = _ref2.sellerId,
      _ref2$page = _ref2.page,
      page = _ref2$page === void 0 ? 1 : _ref2$page,
      _ref2$limit = _ref2.limit,
      limit = _ref2$limit === void 0 ? 10 : _ref2$limit;
  return _httpEndpoint["default"].get("/products/".concat(sellerId), {
    params: {
      page: page,
      limit: limit
    }
  });
};

exports.fetchAllProductsBySellerId = fetchAllProductsBySellerId;