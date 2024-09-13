/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cart.js":
/*!*********************!*\
  !*** ./src/cart.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"./src/state.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\n\nvar appEl = document.querySelector(\"#app\");\nappEl.addEventListener(\"click\", function (e) {\n  if (e.target.classList.contains(\"cartView\")) {\n    _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].viewCart = !_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].viewCart;\n    (0,_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    return;\n  }\n  if (e.target.classList.contains(\"addCart\")) {\n    var index = e.target.dataset.index;\n    if (_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].products[index].count === 0) {\n      _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].products[index].count = 1;\n    } else {\n      _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].products[index].count += 1;\n    }\n    (0,_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    return;\n  }\n  if (e.target.classList.contains(\"addProduct\")) {\n    var _index = e.target.dataset.index;\n    _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].products[_index].count += 1;\n    (0,_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    return;\n  }\n  if (e.target.classList.contains(\"removeProduct\")) {\n    var _index2 = e.target.dataset.index;\n    _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].products[_index2].count -= 1;\n    (0,_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    return;\n  }\n  if (e.target.classList.contains(\"checkOut\")) {\n    _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].products.forEach(function (product) {\n      product.count = 0;\n    });\n    (0,_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    return;\n  }\n});\n(0,_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://07-js-cart/./src/cart.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"./src/state.js\");\n\nvar productsEl = document.querySelector(\".products\");\nvar cartEl = document.querySelector(\".cartlist\");\nfunction render() {\n  if (_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].viewCart) {\n    renderCart(cartEl);\n  } else {\n    renderEmptyCart(cartEl);\n  }\n  renderProducts(productsEl);\n}\nfunction renderCart(cartEl) {\n  var totalCount = _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTotalCount();\n  var cartListHtml = totalCount ? getCartHtml() : \"<p>Nothing in the cart</p>\";\n  cartEl.innerHTML = \"<h2>Shopping Cart</h2> \".concat(cartListHtml);\n}\nfunction renderEmptyCart(cartEl) {\n  cartEl.innerHTML = \"\";\n}\nfunction renderProducts(productsEl) {\n  var listingHtml = getListingHtml();\n  var viewCartBtn = getViewCartBtnHtml();\n  var productsHtml = \"<ul class=\\\"listings\\\">\".concat(listingHtml, \"</ul> \").concat(viewCartBtn);\n  productsEl.innerHTML = productsHtml;\n}\nfunction getListingHtml() {\n  var listings = _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].products.map(function (product, index) {\n    return \"\\n            <li class=\\\"product\\\">\\n                <h3 class=\\\"product-name\\\" data-index=\\\"\".concat(index, \"\\\">\").concat(product.name, \"</h3>\\n                <img class=\\\"product-img\\\" src=\").concat(product.img, \"/>\\n                <p class=\\\"product-price\\\">Price: $\").concat(product.price, \"</p>\\n                <button \\n                data-index=\\\"\").concat(index, \"\\\" class=\\\"addCart\\\" type=\\\"button\\\">\\n                Add to cart\\n                </button>\\n            </li>\\n        \");\n  }).join(\"\");\n  return listings;\n}\nfunction getViewCartBtnHtml() {\n  var totalCount = _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTotalCount();\n  var viewCartText = totalCount ? \"View Cart (\".concat(totalCount, \")\") : \"View Cart\";\n  var btnText = _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].viewCart ? \"Hide Cart\" : viewCartText;\n  return \"\\n    <button type=\\\"button\\\" class=\\\"cartView\\\">\".concat(btnText, \"</button> \");\n}\nfunction getCartHtml() {\n  var cartHtml = _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].products.map(function (product, index) {\n    var inCartClass = product.count ? \"in-cart\" : \"not-in-cart\";\n    return \"\\n                <li class=\\\"cart \".concat(inCartClass, \"\\\">\\n                    <h4 class=\\\"cart-name\\\" data-index=\\\"\").concat(index, \"\\\">\\n                    \").concat(product.name, \"\\n                    </h4>\\n                    <img class=\\\"cart-img\\\" src=\").concat(product.img, \">\\n                    <div class=\\\"count-group\\\">\\n                        <button \\n                        data-index=\\\"\").concat(index, \"\\\" class=\\\"removeProduct\\\" type=\\\"button\\\">\\n                        -\\n                        </button>\\n                        <span class=\\\"cart-count\\\">\").concat(product.count, \"</span>\\n                        <button \\n                        data-index=\\\"\").concat(index, \"\\\" class=\\\"addProduct\\\" type=\\\"button\\\">\\n                        +\\n                        </button>\\n                    </div>\\n                    <p>Price: $\").concat(_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProductPrice(index), \"</p>\\n                </li>\\n        \");\n  }).join(\"\");\n  cartHtml = \"<ul class=\\\"carts\\\">\".concat(cartHtml, \"</ul>\");\n  var totalPriceHtml = \"<p>Total Price: $\".concat(_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTotalPrice(), \"</p>\");\n  var checkoutBtn = \"<button type=\\\"button\\\" class=\\\"checkOut\\\">Checkout</button>\";\n  cartHtml += totalPriceHtml;\n  cartHtml += checkoutBtn;\n  return cartHtml;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://07-js-cart/./src/render.js?");

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar state = {\n  products: [{\n    name: 'Fluffball',\n    img: 'http://placekitten.com/150/150?image=1',\n    price: 0.99,\n    count: 0\n  }, {\n    name: 'General Mayhem',\n    img: 'http://placekitten.com/150/150?image=2',\n    price: 3.14,\n    count: 0\n  }, {\n    name: 'Snowball',\n    img: 'http://placekitten.com/150/150?image=3',\n    price: 2.73,\n    count: 0\n  }],\n  viewCart: false,\n  getTotalCount: function getTotalCount() {\n    var totalCount = 0;\n    state.products.forEach(function (product) {\n      totalCount += product.count;\n    });\n    return totalCount;\n  },\n  getProductPrice: function getProductPrice(index) {\n    return (state.products[index].count * state.products[index].price).toFixed(2);\n  },\n  getTotalPrice: function getTotalPrice() {\n    var totalPrice = 0;\n    state.products.forEach(function (product) {\n      totalPrice += product.count * product.price;\n    });\n    return totalPrice.toFixed(2);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);\n\n//# sourceURL=webpack://07-js-cart/./src/state.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/cart.js");
/******/ 	
/******/ })()
;