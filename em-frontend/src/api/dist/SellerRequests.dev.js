"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchSellerBySellerId = exports.fetchAllSellersByPagination = void 0;

var _httpEndpoint = _interopRequireDefault(require("./httpEndpoint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchAllSellersByPagination = function fetchAllSellersByPagination(_ref) {
  var _ref$page = _ref.page,
      page = _ref$page === void 0 ? 1 : _ref$page,
      _ref$limit = _ref.limit,
      limit = _ref$limit === void 0 ? 10 : _ref$limit;
  return _httpEndpoint["default"].get("/users/seller", {
    params: {
      page: page,
      limit: limit
    }
  });
};

exports.fetchAllSellersByPagination = fetchAllSellersByPagination;

var fetchSellerBySellerId = function fetchSellerBySellerId(_ref2) {
  var sellerId = _ref2.sellerId;
  return _httpEndpoint["default"].get("/users/seller/".concat(sellerId));
};

exports.fetchSellerBySellerId = fetchSellerBySellerId;