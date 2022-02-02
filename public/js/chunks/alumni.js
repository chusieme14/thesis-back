(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alumni"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/filter.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/filter.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      search_sub: '',
      gun_types: [],
      ammunitions: []
    };
  },
  mounted: function mounted() {
    this.getAmmunitionTypes();
    this.getAmmunitions();
  },
  methods: {
    getAmmunitionTypes: function getAmmunitionTypes() {
      var _this = this;

      axios.get("/admin/gun-types?per_page=-1").then(function (_ref) {
        var data = _ref.data;
        _this.gun_types = data.data;
      });
    },
    getAmmunitions: function getAmmunitions() {
      var _this2 = this;

      axios.get("/admin/ammunitions?per_page=-1").then(function (_ref2) {
        var data = _ref2.data;
        _this2.ammunitions = data.data;
      });
    }
  },
  props: {
    filter: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  watch: {
    "filter.created_at": function filterCreated_at(val) {
      if (val) {
        if (val[0] > val[1]) {
          this.filter.created_at = [val[1], val[0]];
        }
      }
    },
    "filter.sub_start_date": function filterSub_start_date(val) {
      if (val) {
        if (val[0] > val[1]) {
          this.filter.sub_start_date = [val[1], val[0]];
        }
      }
    },
    "filter.sub_end_date": function filterSub_end_date(val) {
      if (val) {
        if (val[0] > val[1]) {
          this.filter.sub_end_date = [val[1], val[0]];
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/form.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/form.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    show: {
      type: Boolean
    },
    details: {},
    selected_item: {},
    isedit: {
      type: Boolean
    }
  },
  data: function data() {
    return {
      isfetching: true,
      search: null,
      isdark: false,
      seleted: [],
      ammunitions: [],
      errorMessages: '',
      unlimited: false,
      gunTypes: [],
      defualt_image: "/sample/gun.png",
      payload: {
        civil_status: 'Single',
        gender: 'Male',
        employed: 'No',
        employment_date: null
      },
      footerPages: {
        "items-per-page-options": [5, 10]
      },
      options: {
        itemsPerPage: 5
      },
      total: 0,
      headers: [{
        text: 'Name',
        align: 'start',
        sortable: true,
        value: 'name'
      }, {
        text: 'Type',
        align: 'start',
        sortable: false,
        value: 'type'
      }],
      civil_status: ['Single', 'Married', 'Separated', 'Widowed'],
      genders: ['Male', 'Famale'],
      booleanOptions: ['No', 'Yes']
    };
  },
  methods: {
    pluck: function pluck(items, key) {
      return items.map(function (item) {
        return item[key];
      });
    },
    getAmmunitions: function getAmmunitions() {
      var _this = this;

      var params = this._createParams(this.options);

      if (this.search) params = params + '&keyword=' + this.search;
      axios.get("/admin/ammunitions?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.ammunitions = data.data;
        _this.total = data.total;
        _this.isfetching = false;
      });
    },
    getGunTypes: function getGunTypes() {
      var _this2 = this;

      axios.get("/admin/gun-types?per_page=-1").then(function (_ref2) {
        var data = _ref2.data;
        _this2.gunTypes = data.data;

        if (!_this2.isedit) {
          _this2.payload.gun_type_id = _this2.gunTypes[0].id;
        }

        _this2.isfetching = false;
      });
    },
    triggerUpload: function triggerUpload() {
      this.$refs.file_input.click();
    },
    onFileChange: function onFileChange(file) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var imageFile, imageURL;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                imageFile = file[0];

                if (!(file.length > 0)) {
                  _context.next = 12;
                  break;
                }

                if (imageFile.type.match('image.*')) {
                  _context.next = 7;
                  break;
                }

                _this3.errorDialog = true;
                _this3.errorText = 'Please choose an image file';
                _context.next = 12;
                break;

              case 7:
                imageURL = URL.createObjectURL(imageFile);
                _this3.avatar_blob = imageURL;
                _context.next = 11;
                return _this3.createImageBase64(imageFile);

              case 11:
                _this3.payload.image_base64 = _context.sent;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    cancel: function cancel() {
      this.reset();
      this.$emit('cancel');
    },
    save: function save() {
      if (!this.$refs.form.validate()) return;
      this.payload.ammunition_ids = this.pluck(this.seleted, 'id');

      if (this.isedit) {
        this.$emit('edit', this.payload);
        return;
      }

      this.$emit('save', this.payload);
    },
    reset: function reset() {
      this.seleted = [];
      this.unlimited = false;
      this.isfetching = true;
      this.payload.name = '';
      this.payload.price = 0;
      this.payload.stocks = 1;
      this.payload.unlimited = false;
      this.payload.image_base64 = null;
      this.$refs.form.resetValidation();
    }
  },
  watch: {
    "show": {
      handler: function handler(val) {
        if (val) {
          if (!this.isedit) if (this.payload.name || this.payload.short_name || this.payload.price > 0) this.reset();
          this.getGunTypes();
        }
      },
      immediate: true
    },
    "isedit": {
      handler: function handler(val) {
        if (val) {
          Object.assign(this.payload, this.selected_item);
          this.payload.unlimited = this.selected_item.unlimited ? true : false;
          this.payload.image_base64 = this.selected_item.image;
          this.seleted = this.payload.ammunitions;
          this.payload.ammunition_ids = this.pluck(this.payload.ammunitions, 'id');
        }
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.vue */ "./resources/js/src/pages/alumni/filter.vue");
/* harmony import */ var _form_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue */ "./resources/js/src/pages/alumni/form.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    GunFilter: _filter_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    GunForm: _form_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      isedit: false,
      selectedItem: {},
      details: {},
      payload: {},
      showForm: false,
      data: {
        title: "Graduates",
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
      guns: [],
      headers: [{
        text: 'Id',
        align: 'start',
        sortable: true,
        value: 'id'
      }, {
        text: 'Image',
        align: 'start',
        sortable: false,
        value: 'image'
      }, {
        text: 'Name',
        align: 'start',
        sortable: true,
        value: 'name'
      }, {
        text: 'Type',
        align: 'start',
        sortable: true,
        value: 'type'
      }, {
        text: 'Ammunitions',
        align: 'start',
        sortable: false,
        value: 'ammunitions'
      }, {
        text: 'Stocks',
        align: 'start',
        sortable: true,
        value: 'stocks'
      }, {
        text: 'Price',
        align: 'start',
        sortable: true,
        value: 'price'
      }, {
        text: 'Action',
        align: 'center',
        sortable: false,
        value: 'action'
      }]
    };
  },
  methods: {
    addNew: function addNew() {
      this.$router.push({
        name: 'alumni-create'
      });
    },
    fetchPage: function fetchPage() {
      var _this = this;

      this.data.isFetching = true;

      var params = this._createParams(this.options);

      params = params + this._createFilterParams(this.data.filter);
      console.log(this.data.keyword, "keyword");
      if (this.data.keyword) params = params + '&keyword=' + this.data.keyword;
      axios.get("/admin/guns?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.guns = data.data;
        _this.data.isFetching = false;
        _this.total = data.total;
      });
    },
    resetFilter: function resetFilter() {
      this.data.filter = {};
      this.fetchPage();
    },
    cancel: function cancel() {
      this.isedit = false;
      this.showForm = false;
    },
    save: function save(val) {
      var _this2 = this;

      axios.post("/admin/guns", val).then(function (_ref2) {
        var data = _ref2.data;

        _this2.fetchPage();

        _this2.showForm = false;
      });
    },
    update: function update(val) {
      var _this3 = this;

      axios.put("/admin/guns/".concat(val.id), val).then(function (_ref3) {
        var data = _ref3.data;

        _this3.fetchPage();

        _this3.isedit = false;
        _this3.showForm = false;
      });
    },
    showEdit: function showEdit(val) {
      Object.assign(this.selectedItem, val);
      this.details.title = 'Update gun';
      this.isedit = true;
      this.showForm = true;
    },
    remove: function remove() {}
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".class-images[data-v-50cde6f1] {\n  display: flex;\n  justify-content: center;\n}\n.class-images .v-image[data-v-50cde6f1] {\n  cursor: pointer;\n}\n.image-text-field[data-v-50cde6f1] {\n  margin-top: -19px !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/index.vue?vue&type=style&index=0&id=2f8f2b75&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/index.vue?vue&type=style&index=0&id=2f8f2b75&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/index.vue?vue&type=style&index=0&id=2f8f2b75&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/index.vue?vue&type=style&index=0&id=2f8f2b75&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=2f8f2b75&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/index.vue?vue&type=style&index=0&id=2f8f2b75&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/filter.vue?vue&type=template&id=3bdc1a65&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/filter.vue?vue&type=template&id=3bdc1a65& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "filter-main-container" },
    [
      _c(
        "div",
        [
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c(
                "v-flex",
                {
                  staticClass: "d-block mb-5 mr-3",
                  attrs: { xs12: "", sm6: "" },
                },
                [
                  _c("label", [_vm._v("Ammunition_type")]),
                  _vm._v(" "),
                  _c("v-autocomplete", {
                    attrs: {
                      items: _vm.ammunitions,
                      "item-text": "name",
                      "item-value": "id",
                      "hide-details": "auto",
                      filled: "",
                      dense: "",
                      required: "",
                      clearable: "",
                    },
                    model: {
                      value: _vm.filter.ammunitions_type,
                      callback: function ($$v) {
                        _vm.$set(_vm.filter, "ammunitions_type", $$v)
                      },
                      expression: "filter.ammunitions_type",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { staticClass: "d-block mb-5", attrs: { xs12: "", sm6: "" } },
                [
                  _c("label", [_vm._v("gun_type")]),
                  _vm._v(" "),
                  _c("v-autocomplete", {
                    attrs: {
                      items: _vm.gun_types,
                      "item-text": "name",
                      "item-value": "id",
                      "hide-details": "auto",
                      filled: "",
                      dense: "",
                      required: "",
                      clearable: "",
                    },
                    model: {
                      value: _vm.filter.gun_type,
                      callback: function ($$v) {
                        _vm.$set(_vm.filter, "gun_type", $$v)
                      },
                      expression: "filter.gun_type",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-flex",
        { attrs: { xs12: "" } },
        [
          _c(
            "v-flex",
            { staticClass: "d-block mr-3", attrs: { xs12: "", sm6: "" } },
            [
              _c("label", [_vm._v("Price_from")]),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  filled: "",
                  dense: "",
                  "hide-details": "auto",
                  type: "number",
                },
                model: {
                  value: _vm.filter.min_price,
                  callback: function ($$v) {
                    _vm.$set(_vm.filter, "min_price", $$v)
                  },
                  expression: "filter.min_price",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { staticClass: "d-block", attrs: { xs12: "", sm6: "" } },
            [
              _c("label", [_vm._v("Price_to")]),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  filled: "",
                  dense: "",
                  "hide-details": "auto",
                  type: "number",
                },
                model: {
                  value: _vm.filter.max_price,
                  callback: function ($$v) {
                    _vm.$set(_vm.filter, "max_price", $$v)
                  },
                  expression: "filter.max_price",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/form.vue?vue&type=template&id=50cde6f1&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/form.vue?vue&type=template&id=50cde6f1&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { attrs: { height: "95vh" } },
    [
      _c("v-card-title", [
        _c("span", { staticClass: "text-h5" }, [
          _vm._v("Graduate Informations"),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-form",
            { ref: "form" },
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "class-images",
                          attrs: { cols: "12", sm: "12" },
                        },
                        [
                          _c("v-col", { attrs: { cols: "12", sm: "4" } }, [
                            _c(
                              "div",
                              { staticClass: "graduate-image-container" },
                              [
                                _c("img", {
                                  staticClass: "graduate-avatar",
                                  attrs: {
                                    src: _vm.payload.image_base64
                                      ? _vm.payload.image_base64
                                      : "/sample/no-image.png",
                                  },
                                  on: { click: _vm.triggerUpload },
                                }),
                                _vm._v(" "),
                                _c("input", {
                                  ref: "file_input",
                                  staticClass: "hidden",
                                  attrs: {
                                    type: "file",
                                    accept: "image/x-png,image/gif,image/jpeg",
                                  },
                                  on: {
                                    change: function ($event) {
                                      return _vm.onFileChange(
                                        $event.target.files
                                      )
                                    },
                                  },
                                }),
                              ]
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "8" } },
                            [
                              _c(
                                "v-row",
                                { staticClass: "mb-3" },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "12" } },
                                    [
                                      _c("h2", [
                                        _vm._v("Personal Informations"),
                                      ]),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "image-text-field",
                                      attrs: { cols: "12", sm: "4" },
                                    },
                                    [
                                      _c("label", [
                                        _c(
                                          "span",
                                          { staticClass: "text-danger" },
                                          [_vm._v("*")]
                                        ),
                                        _vm._v(" First name "),
                                      ]),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        ref: "first_name",
                                        attrs: {
                                          rules: [
                                            function () {
                                              return (
                                                !!_vm.payload.first_name ||
                                                "this field is required"
                                              )
                                            },
                                          ],
                                          "error-messages": _vm.errorMessages,
                                          required: "",
                                          "background-color": _vm.isdark
                                            ? "#777"
                                            : "",
                                          "hide-details": "auto",
                                          solo: "",
                                          dense: "",
                                        },
                                        model: {
                                          value: _vm.payload.first_name,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.payload,
                                              "first_name",
                                              $$v
                                            )
                                          },
                                          expression: "payload.first_name",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "image-text-field",
                                      attrs: { cols: "12", sm: "4" },
                                    },
                                    [
                                      _c("label", [
                                        _c(
                                          "span",
                                          { staticClass: "text-danger" },
                                          [_vm._v("*")]
                                        ),
                                        _vm._v(" Last name "),
                                      ]),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        ref: "last_name",
                                        attrs: {
                                          rules: [
                                            function () {
                                              return (
                                                !!_vm.payload.last_name ||
                                                "this field is required"
                                              )
                                            },
                                          ],
                                          "error-messages": _vm.errorMessages,
                                          required: "",
                                          "background-color": _vm.isdark
                                            ? "#777"
                                            : "",
                                          "hide-details": "auto",
                                          solo: "",
                                          dense: "",
                                        },
                                        model: {
                                          value: _vm.payload.last_name,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.payload,
                                              "last_name",
                                              $$v
                                            )
                                          },
                                          expression: "payload.last_name",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "image-text-field",
                                      attrs: { cols: "12", sm: "4" },
                                    },
                                    [
                                      _c("label", [
                                        _c(
                                          "span",
                                          { staticClass: "text-danger" },
                                          [_vm._v("*")]
                                        ),
                                        _vm._v(" Middle name "),
                                      ]),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        ref: "middle_name",
                                        attrs: {
                                          rules: [
                                            function () {
                                              return (
                                                !!_vm.payload.middle_name ||
                                                "this field is required"
                                              )
                                            },
                                          ],
                                          "error-messages": _vm.errorMessages,
                                          required: "",
                                          "background-color": _vm.isdark
                                            ? "#777"
                                            : "",
                                          solo: "",
                                          dense: "",
                                        },
                                        model: {
                                          value: _vm.payload.middle_name,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.payload,
                                              "middle_name",
                                              $$v
                                            )
                                          },
                                          expression: "payload.middle_name",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "image-text-field",
                                      attrs: { cols: "12", sm: "3" },
                                    },
                                    [
                                      _c("label", [
                                        _c(
                                          "span",
                                          { staticClass: "text-danger" },
                                          [_vm._v("*")]
                                        ),
                                        _vm._v(" Student number "),
                                      ]),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        ref: "student_number",
                                        attrs: {
                                          rules: [
                                            function () {
                                              return (
                                                !!_vm.payload.student_number ||
                                                "this field is required"
                                              )
                                            },
                                          ],
                                          "error-messages": _vm.errorMessages,
                                          required: "",
                                          "background-color": _vm.isdark
                                            ? "#777"
                                            : "",
                                          solo: "",
                                          dense: "",
                                        },
                                        model: {
                                          value: _vm.payload.student_number,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.payload,
                                              "student_number",
                                              $$v
                                            )
                                          },
                                          expression: "payload.student_number",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "image-text-field",
                                      attrs: { cols: "12", sm: "4" },
                                    },
                                    [
                                      _c("label", [
                                        _c(
                                          "span",
                                          { staticClass: "text-danger" },
                                          [_vm._v("*")]
                                        ),
                                        _vm._v(" Email "),
                                      ]),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        ref: "email",
                                        attrs: {
                                          rules: [
                                            function () {
                                              return (
                                                !!_vm.payload.email ||
                                                "this field is required"
                                              )
                                            },
                                          ],
                                          "error-messages": _vm.errorMessages,
                                          required: "",
                                          "background-color": _vm.isdark
                                            ? "#777"
                                            : "",
                                          solo: "",
                                          dense: "",
                                        },
                                        model: {
                                          value: _vm.payload.email,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.payload, "email", $$v)
                                          },
                                          expression: "payload.email",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "image-text-field",
                                      attrs: { cols: "12", sm: "3" },
                                    },
                                    [
                                      _c("label", [
                                        _c(
                                          "span",
                                          { staticClass: "text-danger" },
                                          [_vm._v("*")]
                                        ),
                                        _vm._v(" Contact number "),
                                      ]),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        ref: "contact_number",
                                        attrs: {
                                          rules: [
                                            function () {
                                              return (
                                                !!_vm.payload.contact_number ||
                                                "this field is required"
                                              )
                                            },
                                          ],
                                          "error-messages": _vm.errorMessages,
                                          required: "",
                                          "background-color": _vm.isdark
                                            ? "#777"
                                            : "",
                                          solo: "",
                                          dense: "",
                                          type: "number",
                                        },
                                        model: {
                                          value: _vm.payload.contact_number,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.payload,
                                              "contact_number",
                                              $$v
                                            )
                                          },
                                          expression: "payload.contact_number",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "image-text-field",
                                      attrs: { cols: "12", sm: "2" },
                                    },
                                    [
                                      _c("label", [
                                        _c(
                                          "span",
                                          { staticClass: "text-danger" },
                                          [_vm._v("*")]
                                        ),
                                        _vm._v(" Civil status "),
                                      ]),
                                      _vm._v(" "),
                                      _c("v-autocomplete", {
                                        attrs: {
                                          items: _vm.civil_status,
                                          "hide-details": "auto",
                                          "background-color": _vm.isdark
                                            ? "#777"
                                            : "",
                                          "menu-props": {
                                            "background-color": "#777",
                                          },
                                          filled: "",
                                          dense: "",
                                          solo: "",
                                          required: "",
                                        },
                                        model: {
                                          value: _vm.payload.civil_status,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.payload,
                                              "civil_status",
                                              $$v
                                            )
                                          },
                                          expression: "payload.civil_status",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "image-text-field",
                                      attrs: { cols: "12", sm: "3" },
                                    },
                                    [
                                      _c("label", [
                                        _c(
                                          "span",
                                          { staticClass: "text-danger" },
                                          [_vm._v("*")]
                                        ),
                                        _vm._v(" Birthday "),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-menu",
                                        {
                                          attrs: {
                                            "close-on-content-click": true,
                                            transition: "scale-transition",
                                            "offset-y": "",
                                            "min-width": "auto",
                                          },
                                          scopedSlots: _vm._u([
                                            {
                                              key: "activator",
                                              fn: function (ref) {
                                                var on = ref.on
                                                var attrs = ref.attrs
                                                return [
                                                  _c(
                                                    "v-text-field",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          attrs: {
                                                            readonly: "",
                                                            solo: "",
                                                            dense: "",
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.payload
                                                                .birthday,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.payload,
                                                                "birthday",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "payload.birthday",
                                                          },
                                                        },
                                                        "v-text-field",
                                                        attrs,
                                                        false
                                                      ),
                                                      on
                                                    )
                                                  ),
                                                ]
                                              },
                                            },
                                          ]),
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("v-date-picker", {
                                            attrs: {
                                              "no-title": "",
                                              scrollable: "",
                                            },
                                            model: {
                                              value: _vm.payload.birthday,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.payload,
                                                  "birthday",
                                                  $$v
                                                )
                                              },
                                              expression: "payload.birthday",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "image-text-field",
                                      attrs: { cols: "12", sm: "4" },
                                    },
                                    [
                                      _c("label", [
                                        _c(
                                          "span",
                                          { staticClass: "text-danger" },
                                          [_vm._v("*")]
                                        ),
                                        _vm._v(" Location of Residence "),
                                      ]),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        ref: "residence",
                                        attrs: {
                                          rules: [
                                            function () {
                                              return (
                                                !!_vm.payload.residence ||
                                                "this field is required"
                                              )
                                            },
                                          ],
                                          "error-messages": _vm.errorMessages,
                                          required: "",
                                          "background-color": _vm.isdark
                                            ? "#777"
                                            : "",
                                          solo: "",
                                          dense: "",
                                        },
                                        model: {
                                          value: _vm.payload.residence,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.payload,
                                              "residence",
                                              $$v
                                            )
                                          },
                                          expression: "payload.residence",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "image-text-field",
                                      attrs: { cols: "12", sm: "2" },
                                    },
                                    [
                                      _c("label", [
                                        _c(
                                          "span",
                                          { staticClass: "text-danger" },
                                          [_vm._v("*")]
                                        ),
                                        _vm._v(" Gender "),
                                      ]),
                                      _vm._v(" "),
                                      _c("v-autocomplete", {
                                        attrs: {
                                          items: _vm.genders,
                                          "hide-details": "auto",
                                          "background-color": _vm.isdark
                                            ? "#777"
                                            : "",
                                          "menu-props": {
                                            "background-color": "#777",
                                          },
                                          filled: "",
                                          dense: "",
                                          solo: "",
                                          required: "",
                                        },
                                        model: {
                                          value: _vm.payload.gender,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.payload, "gender", $$v)
                                          },
                                          expression: "payload.gender",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "6" },
                        },
                        [
                          _c(
                            "v-row",
                            { staticClass: "mb-3" },
                            [
                              _c("v-col", { attrs: { cols: "12", sm: "12" } }, [
                                _c("h2", [_vm._v("Employment Informations")]),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: "image-text-field",
                                  attrs: { cols: "12", sm: "2" },
                                },
                                [
                                  _c("label", [
                                    _c("span", { staticClass: "text-danger" }, [
                                      _vm._v("*"),
                                    ]),
                                    _vm._v(" Employed "),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-autocomplete", {
                                    attrs: {
                                      items: _vm.booleanOptions,
                                      "hide-details": "auto",
                                      "background-color": _vm.isdark
                                        ? "#777"
                                        : "",
                                      "menu-props": {
                                        "background-color": "#777",
                                      },
                                      filled: "",
                                      dense: "",
                                      solo: "",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.payload.employed,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.payload, "employed", $$v)
                                      },
                                      expression: "payload.employed",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.payload.employed == "Yes"
                                ? _c(
                                    "v-col",
                                    {
                                      staticClass: "image-text-field",
                                      attrs: { cols: "12", sm: "5" },
                                    },
                                    [
                                      _c("label", [
                                        _vm._v(" Employment date "),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-menu",
                                        {
                                          attrs: {
                                            "close-on-content-click": true,
                                            transition: "scale-transition",
                                            "offset-y": "",
                                            "min-width": "auto",
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "activator",
                                                fn: function (ref) {
                                                  var on = ref.on
                                                  var attrs = ref.attrs
                                                  return [
                                                    _c(
                                                      "v-text-field",
                                                      _vm._g(
                                                        _vm._b(
                                                          {
                                                            attrs: {
                                                              readonly: "",
                                                              solo: "",
                                                              dense: "",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.payload
                                                                  .employment_date,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.payload,
                                                                    "employment_date",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "payload.employment_date",
                                                            },
                                                          },
                                                          "v-text-field",
                                                          attrs,
                                                          false
                                                        ),
                                                        on
                                                      )
                                                    ),
                                                  ]
                                                },
                                              },
                                            ],
                                            null,
                                            false,
                                            306365112
                                          ),
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("v-date-picker", {
                                            attrs: {
                                              "no-title": "",
                                              scrollable: "",
                                            },
                                            model: {
                                              value:
                                                _vm.payload.employment_date,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.payload,
                                                  "employment_date",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "payload.employment_date",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.payload.employed == "Yes"
                                ? _c(
                                    "v-col",
                                    {
                                      staticClass: "image-text-field",
                                      attrs: { cols: "12", sm: "5" },
                                    },
                                    [
                                      _c("label", [
                                        _c(
                                          "span",
                                          { staticClass: "text-danger" },
                                          [_vm._v("*")]
                                        ),
                                        _vm._v(" Employed "),
                                      ]),
                                      _vm._v(" "),
                                      _c("v-autocomplete", {
                                        attrs: {
                                          items: _vm.booleanOptions,
                                          "hide-details": "auto",
                                          "background-color": _vm.isdark
                                            ? "#777"
                                            : "",
                                          "menu-props": {
                                            "background-color": "#777",
                                          },
                                          filled: "",
                                          dense: "",
                                          solo: "",
                                          required: "",
                                        },
                                        model: {
                                          value: _vm.payload.employed,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.payload,
                                              "employed",
                                              $$v
                                            )
                                          },
                                          expression: "payload.employed",
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "image-text-field",
                          attrs: { cols: "12", sm: "6" },
                        },
                        [
                          _c(
                            "v-row",
                            [
                              _c("v-col", { attrs: { cols: "12", sm: "12" } }, [
                                _c("h2", [_vm._v("Educational Informations")]),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-row"),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/index.vue?vue&type=template&id=2f8f2b75&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/index.vue?vue&type=template&id=2f8f2b75&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "ma-5", attrs: { elevation: "1", "max-height": "90vh" } },
    [
      _c(
        "v-card-text",
        [
          _c("table-header", {
            attrs: { data: _vm.data },
            on: {
              addNew: _vm.addNew,
              refresh: _vm.fetchPage,
              search: _vm.fetchPage,
              resetFilters: _vm.resetFilter,
              filterRecord: _vm.fetchPage,
            },
            scopedSlots: _vm._u([
              {
                key: "custom_filter",
                fn: function () {
                  return [
                    _c("gun-filter", { attrs: { filter: _vm.data.filter } }),
                  ]
                },
                proxy: true,
              },
            ]),
          }),
          _vm._v(" "),
          _c("v-data-table", {
            attrs: {
              headers: _vm.headers,
              items: _vm.guns,
              "max-height": "100%",
              "single-select": false,
              "show-select": "",
              search: _vm.data.keyword,
              "server-items-length": _vm.total,
              "footer-props": _vm.footerPages,
              options: _vm.options,
              "items-per-page": _vm.options.itemsPerPage,
              loading: _vm.data.isFetching,
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
                key: "item.image",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _c("v-img", {
                      attrs: {
                        width: "50",
                        contain: true,
                        src: item.image ? item.image : "/sample/gun.png",
                      },
                    }),
                  ]
                },
              },
              {
                key: "item.price",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.price + " €") +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "item.type",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.gun_type.name) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "item.ammunitions",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _c(
                      "v-row",
                      [
                        _c(
                          "v-col",
                          { attrs: { cols: "12", sm: "10" } },
                          [
                            _c(
                              "v-chip-group",
                              {
                                attrs: {
                                  mandatory: "",
                                  "active-class": "primary--text",
                                },
                              },
                              [
                                _vm._l(
                                  item.ammunitions,
                                  function (ammunition, index) {
                                    return [
                                      index < 2
                                        ? _c("v-chip", { key: ammunition.id }, [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(ammunition.name) +
                                                "\n                                "
                                            ),
                                          ])
                                        : _vm._e(),
                                    ]
                                  }
                                ),
                                _vm._v(" "),
                                item.ammunitions.length > 2
                                  ? [
                                      _c("v-chip", [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(
                                              "+" +
                                                (item.ammunitions.length - 2)
                                            ) +
                                            "\n                                "
                                        ),
                                      ]),
                                    ]
                                  : _vm._e(),
                              ],
                              2
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]
                },
              },
              {
                key: "item.action",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _c("table-action", {
                      attrs: { item: item },
                      on: { editItem: _vm.showEdit, deleteItem: _vm.remove },
                    }),
                  ]
                },
              },
            ]),
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", width: "700px" },
          model: {
            value: _vm.showForm,
            callback: function ($$v) {
              _vm.showForm = $$v
            },
            expression: "showForm",
          },
        },
        [
          _c("gun-form", {
            attrs: {
              selected_item: _vm.selectedItem,
              isedit: _vm.isedit,
              details: _vm.details,
              show: _vm.showForm,
            },
            on: { cancel: _vm.cancel, save: _vm.save, edit: _vm.update },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/pages/alumni/filter.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/pages/alumni/filter.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_vue_vue_type_template_id_3bdc1a65___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.vue?vue&type=template&id=3bdc1a65& */ "./resources/js/src/pages/alumni/filter.vue?vue&type=template&id=3bdc1a65&");
/* harmony import */ var _filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/alumni/filter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _filter_vue_vue_type_template_id_3bdc1a65___WEBPACK_IMPORTED_MODULE_0__["render"],
  _filter_vue_vue_type_template_id_3bdc1a65___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/alumni/filter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/alumni/filter.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/filter.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./filter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/filter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/alumni/filter.vue?vue&type=template&id=3bdc1a65&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/filter.vue?vue&type=template&id=3bdc1a65& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_template_id_3bdc1a65___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./filter.vue?vue&type=template&id=3bdc1a65& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/filter.vue?vue&type=template&id=3bdc1a65&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_template_id_3bdc1a65___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_template_id_3bdc1a65___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/alumni/form.vue":
/*!************************************************!*\
  !*** ./resources/js/src/pages/alumni/form.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_50cde6f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=50cde6f1&scoped=true& */ "./resources/js/src/pages/alumni/form.vue?vue&type=template&id=50cde6f1&scoped=true&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/alumni/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _form_vue_vue_type_style_index_0_id_50cde6f1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true& */ "./resources/js/src/pages/alumni/form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_50cde6f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_50cde6f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "50cde6f1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/alumni/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/alumni/form.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/alumni/form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_50cde6f1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/form.vue?vue&type=style&index=0&id=50cde6f1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_50cde6f1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_50cde6f1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_50cde6f1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_50cde6f1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/pages/alumni/form.vue?vue&type=template&id=50cde6f1&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/form.vue?vue&type=template&id=50cde6f1&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_50cde6f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=50cde6f1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/form.vue?vue&type=template&id=50cde6f1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_50cde6f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_50cde6f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/alumni/index.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/pages/alumni/index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2f8f2b75_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2f8f2b75&scoped=true& */ "./resources/js/src/pages/alumni/index.vue?vue&type=template&id=2f8f2b75&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/alumni/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_2f8f2b75_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=2f8f2b75&lang=scss&scoped=true& */ "./resources/js/src/pages/alumni/index.vue?vue&type=style&index=0&id=2f8f2b75&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2f8f2b75_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2f8f2b75_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2f8f2b75",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/alumni/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/alumni/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/alumni/index.vue?vue&type=style&index=0&id=2f8f2b75&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/index.vue?vue&type=style&index=0&id=2f8f2b75&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f8f2b75_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=2f8f2b75&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/index.vue?vue&type=style&index=0&id=2f8f2b75&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f8f2b75_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f8f2b75_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f8f2b75_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f8f2b75_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/pages/alumni/index.vue?vue&type=template&id=2f8f2b75&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/index.vue?vue&type=template&id=2f8f2b75&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f8f2b75_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2f8f2b75&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/index.vue?vue&type=template&id=2f8f2b75&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f8f2b75_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f8f2b75_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);