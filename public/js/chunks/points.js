(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["points"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/points/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/points/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import GraduateFilter from './filter.vue'
// import NewsForm from './form.vue'
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      payload: {
        image_base64: null
      },
      showForm: false,
      isupdate: false,
      isdelete: false,
      selectedItem: {},
      details: {},
      points: [],
      data: {
        title: "Points",
        isFetching: false,
        keyword: "",
        filter: {}
      },
      footerPages: {
        "items-per-page-options": [5, 10, 15, 20, 30, 40, 50, 100, -1]
      },
      options: {
        itemsPerPage: 15
      },
      total: 0,
      headers: [{
        text: 'Id',
        align: 'start',
        sortable: true,
        value: 'id'
      }, {
        text: 'Sharer',
        align: 'start',
        sortable: false,
        value: 'sharer'
      }, {
        text: 'Points',
        align: 'start',
        sortable: true,
        value: 'point'
      }, {
        text: 'Status',
        align: 'start',
        sortable: true,
        value: 'status'
      }, {
        text: 'Actions',
        align: 'start',
        sortable: false,
        value: 'action'
      }]
    };
  },
  methods: {
    addNew: function addNew() {
      this.showForm = true;
    },
    fetchPage: function fetchPage() {
      var _this = this;

      this.data.isFetching = true;

      var params = this._createParams(this.options);

      params = params + this._createFilterParams(this.data.filter);

      if (this.$route.params.graduates_id) {
        params = params + '&graduates_id=' + this.$route.params.graduates_id;
      }

      console.log(this.data.keyword, "keyword");
      if (this.data.keyword) params = params + '&keyword=' + this.data.keyword;
      axios.get("/admin/points?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.points = data.data;
        _this.data.isFetching = false;
        _this.total = data.total;
      });
    },
    resetFilter: function resetFilter() {},
    save: function save() {
      var _this2 = this;

      if (this.isupdate) {
        axios.put("/admin/news/".concat(this.payload.id), this.payload).then(function (_ref2) {
          var data = _ref2.data;

          _this2.fetchPage();

          _this2.clear();
        });
        return;
      }

      axios.post("/admin/news", this.payload).then(function (_ref3) {
        var data = _ref3.data;

        _this2.fetchPage();

        _this2.clear();
      });
    },
    cancel: function cancel() {
      this.clear();
    },
    clear: function clear() {
      this.payload.image_base64 = null;
      this.payload.description = "";
      this.payload.title = "";
      this.isupdate = false;
      this.showForm = false;
      this.isdelete = false;
      this.details = {};
      this.selectedItem = {};
    },
    showEdit: function showEdit(data) {
      Object.assign(this.payload, data);
      this.payload.image_base64 = this.payload.image;
      this.isupdate = true;
      this.showForm = true;
    },
    showDelete: function showDelete(val) {
      Object.assign(this.selectedItem, val);
      this.details.title = 'Delete';
      this.details.message = "Are you sure you want to remove ".concat(this.selectedItem.title, "?");
      this.isdelete = true;
    },
    remove: function remove() {
      var _this3 = this;

      axios["delete"]("/admin/news/".concat(this.selectedItem.id)).then(function (_ref4) {
        var data = _ref4.data;

        _this3.fetchPage();

        _this3.cancel();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/points/index.vue?vue&type=template&id=68384dcc&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/points/index.vue?vue&type=template&id=68384dcc& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { attrs: { elevation: "1", "max-height": "90vh" } },
    [
      _c(
        "v-card-text",
        [
          _c("table-header", {
            attrs: { data: _vm.data, hide: ["filter", "addNew"] },
            on: {
              addNew: _vm.addNew,
              refresh: _vm.fetchPage,
              search: _vm.fetchPage,
            },
          }),
          _vm._v(" "),
          _c("v-data-table", {
            staticClass: "cursor-pointer table-fix-height",
            attrs: {
              headers: _vm.headers,
              items: _vm.points,
              "max-height": "100%",
              "single-select": false,
              "show-select": "",
              search: _vm.data.keyword,
              loading: _vm.data.isFetching,
              "server-items-length": _vm.total,
              "footer-props": _vm.footerPages,
              options: _vm.options,
              "items-per-page": _vm.options.itemsPerPage,
              "fixed-header": "",
            },
            on: {
              "update:options": [
                function ($event) {
                  _vm.options = $event
                },
                _vm.fetchPage,
              ],
            },
            scopedSlots: _vm._u([
              {
                key: "item.sharer",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n              " +
                        _vm._s(item.graduate.fullname) +
                        "\n          "
                    ),
                  ]
                },
              },
              {
                key: "item.status",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n              " +
                        _vm._s(item.status == 1 ? "Active" : "Claim") +
                        "\n          "
                    ),
                  ]
                },
              },
              {
                key: "item.action",
                fn: function (ref) {
                  var item = ref.item
                  return undefined
                },
              },
            ]),
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("confirm-dialog", {
        attrs: { details: _vm.details, show: _vm.isdelete },
        on: { cancel: _vm.cancel, confirm: _vm.remove },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/pages/points/index.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/pages/points/index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_68384dcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=68384dcc& */ "./resources/js/src/pages/points/index.vue?vue&type=template&id=68384dcc&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/points/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_68384dcc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_68384dcc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/points/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/points/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/pages/points/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/points/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/points/index.vue?vue&type=template&id=68384dcc&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/pages/points/index.vue?vue&type=template&id=68384dcc& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_68384dcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=68384dcc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/points/index.vue?vue&type=template&id=68384dcc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_68384dcc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_68384dcc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);