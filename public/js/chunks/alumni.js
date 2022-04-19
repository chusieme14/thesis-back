(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alumni"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/csv-form.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/csv-form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    show: {}
  },
  data: function data() {
    return {
      graduates: [],
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
      headers: [{
        text: 'Student number',
        align: 'start',
        sortable: true,
        value: 'student_number'
      }, {
        text: 'First name',
        align: 'start',
        sortable: true,
        value: 'first_name'
      }, {
        text: 'Last name',
        align: 'start',
        sortable: true,
        value: 'last_name'
      }, {
        text: 'Middle name',
        align: 'start',
        sortable: true,
        value: 'middle_name'
      }, {
        text: 'Email',
        align: 'start',
        sortable: true,
        value: 'email'
      }, {
        text: 'Contact number',
        align: 'start',
        sortable: true,
        value: 'contact_number'
      }, {
        text: 'Batch',
        align: 'start',
        sortable: true,
        value: 'batch'
      }, {
        text: 'Section',
        align: 'start',
        sortable: true,
        value: 'section'
      }, {
        text: 'Course',
        align: 'start',
        sortable: true,
        value: 'course'
      }, {
        text: 'Valid',
        align: 'start',
        sortable: true,
        value: 'status'
      }, {
        text: 'Reason',
        align: 'start',
        sortable: true,
        value: 'reason'
      }]
    };
  },
  methods: {
    resetFilter: function resetFilter() {
      this.data.filter = {};
      this.fetchPage();
    },
    fetchPage: function fetchPage() {
      var _this = this;

      var session = localStorage.getItem("session");
      this.data.isFetching = true;

      var params = this._createParams(this.options);

      params = params + this._createFilterParams(this.data.filter);
      params = params + '&session=' + session;
      console.log(this.data.keyword, "keyword");
      if (this.data.keyword) params = params + '&keyword=' + this.data.keyword;
      axios.get("/admin/graduates/temp-uploads?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        console.log(data.data);
        _this.graduates = data.data;
        _this.data.isFetching = false;
        _this.total = data.total;
      });
    }
  },
  watch: {
    "show": {
      handler: function handler(val) {
        if (val) {// this.getTempUpload()
        }
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/edit.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      courses: [],
      defualt_image: "/sample/gun.png",
      payload: {
        prof_exam_passed: 'No',
        detail: {}
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
      booleanOptions: [{
        id: 0,
        name: 'No'
      }, {
        id: 1,
        name: 'Yes'
      }],
      attainmentOptions: [{
        id: 1,
        name: 'Baccalaureate Degree'
      }, {
        id: 2,
        name: 'Masteral'
      }, {
        id: 3,
        name: 'Doctorate'
      }],
      employmentStatus: ['Contractual', 'Permanent', 'Self-employed', 'Casual', 'Not Applicable']
    };
  },
  methods: {
    getCourses: function getCourses() {
      var _this = this;

      var params = ''; // if(this.data.keyword)
      //     params = params + '&keyword=' + this.data.keyword

      axios.get("/admin/courses?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.courses = data.data;
      });
    },
    pluck: function pluck(items, key) {
      return items.map(function (item) {
        return item[key];
      });
    },
    getAmmunitions: function getAmmunitions() {
      var _this2 = this;

      var params = this._createParams(this.options);

      if (this.search) params = params + '&keyword=' + this.search;
      axios.get("/admin/ammunitions?".concat(params)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.ammunitions = data.data;
        _this2.total = data.total;
        _this2.isfetching = false;
      });
    },
    getGunTypes: function getGunTypes() {
      var _this3 = this;

      axios.get("/admin/gun-types?per_page=-1").then(function (_ref3) {
        var data = _ref3.data;
        _this3.gunTypes = data.data;

        if (!_this3.isedit) {
          _this3.payload.gun_type_id = _this3.gunTypes[0].id;
        }

        _this3.isfetching = false;
      });
    },
    triggerUpload: function triggerUpload() {
      this.$refs.file_input.click();
    },
    onFileChange: function onFileChange(file) {
      var _this4 = this;

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

                _this4.errorDialog = true;
                _this4.errorText = 'Please choose an image file';
                _context.next = 12;
                break;

              case 7:
                imageURL = URL.createObjectURL(imageFile);
                _this4.avatar_blob = imageURL;
                _context.next = 11;
                return _this4.createImageBase64(imageFile);

              case 11:
                _this4.payload.image_base64 = _context.sent;

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
      this.$router.push({
        name: 'graduates'
      });
    },
    save: function save() {
      var _this5 = this;

      if (!this.$refs.form.validate()) return;
      console.log(this.payload, "save payload"); // if(this.isedit){
      //     this.$emit('edit',this.payload)
      //     return
      // }
      // this.$emit('save',this.payload)

      this.payload.password = 'password';
      axios.post("/admin/graduates", this.payload).then(function (_ref4) {
        var data = _ref4.data;

        _this5.$router.push({
          name: 'graduates'
        });
      });
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
  created: function created() {
    this.getCourses();
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 5;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, " - ").concat(start + 1));
      }

      return schoolYear;
    }
  }
});

/***/ }),

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
/* harmony import */ var _csv_form_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csv-form.vue */ "./resources/js/src/pages/alumni/csv-form.vue");
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ConForm: _csv_form_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
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
      file: null,
      ismultiple: false,
      isfetching: true,
      search: null,
      isdark: false,
      errorMessages: '',
      unlimited: false,
      gunTypes: [],
      courses: [],
      defualt_image: "/sample/gun.png",
      payload: {
        prof_exam_passed: 'No',
        detail: {}
      },
      civil_status: ['Single', 'Married', 'Separated', 'Widowed'],
      genders: ['Male', 'Famale'],
      booleanOptions: [{
        id: 0,
        name: 'No'
      }, {
        id: 1,
        name: 'Yes'
      }],
      attainmentOptions: [{
        id: 1,
        name: 'Baccalaureate Degree'
      }, {
        id: 2,
        name: 'Masteral'
      }, {
        id: 3,
        name: 'Doctorate'
      }],
      employmentStatus: ['Contractual', 'Permanent', 'Self-employed', 'Casual', 'Not Applicable']
    };
  },
  methods: {
    closeDialog: function closeDialog() {
      var _this = this;

      var session = localStorage.getItem("session");
      axios["delete"]("/admin/graduates/temp-uploads/".concat(session, "/remove")).then(function (_ref) {
        _objectDestructuringEmpty(_ref);

        _this.ismultiple = false;
        localStorage.removeItem("session");
      });
    },
    saveMultiple: function saveMultiple() {
      var _this2 = this;

      var session = localStorage.getItem("session");
      axios.get("/admin/graduates/temp-uploads/".concat(session, "/save")).then(function (_ref2) {
        var data = _ref2.data;
        _this2.ismultiple = false;
        localStorage.removeItem("session");
      });
    },
    preventReload: function preventReload() {
      window.onbeforeunload = function () {
        return "Are you sure you want to refresh the window?, selected file will be removed!";
      };

      this.isimport = false;
    },
    triggerInputFile: function triggerInputFile() {
      this.$refs.fileInput.click();
      this.preventReload();
    },
    handleFileUpload: function handleFileUpload() {
      this.file = this.$refs.fileInput.files[0];
      this.uploadFile();
    },
    uploadFile: function uploadFile() {
      var _this3 = this;

      var session = new Date().getTime();
      var payload = new FormData();
      payload.append('file', this.file);
      payload.append('session', session);
      axios.post("/admin/graduates/upload-file", payload).then(function (_ref3) {
        var data = _ref3.data;

        if (data.message == 'success') {
          localStorage.setItem('session', session);
          _this3.ismultiple = true;
        }

        _this3.file = null;
        _this3.$refs.fileInput.value = null;
      });
    },
    getCourses: function getCourses() {
      var _this4 = this;

      var params = ''; // if(this.data.keyword)
      //     params = params + '&keyword=' + this.data.keyword

      axios.get("/admin/courses?".concat(params)).then(function (_ref4) {
        var data = _ref4.data;
        _this4.courses = data.data;
      });
    },
    pluck: function pluck(items, key) {
      return items.map(function (item) {
        return item[key];
      });
    },
    triggerUpload: function triggerUpload() {
      this.$refs.file_input.click();
    },
    cancel: function cancel() {
      this.reset();
      this.$router.push({
        name: 'graduates'
      });
    },
    save: function save() {
      var _this5 = this;

      if (!this.$refs.form.validate()) return;
      console.log(this.payload, "save payload"); // if(this.isedit){
      //     this.$emit('edit',this.payload)
      //     return
      // }
      // this.$emit('save',this.payload)

      this.payload.password = 'password';
      axios.post("/admin/graduates", this.payload).then(function (_ref5) {
        var data = _ref5.data;

        _this5.$router.push({
          name: 'graduates'
        });
      });
    },
    reset: function reset() {
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
  created: function created() {
    this.getCourses();
  },
  mounted: function mounted() {
    if (localStorage.getItem("session")) {
      this.ismultiple = true;
    }
  },
  computed: {
    years: function years() {
      var schoolYear = [];
      var year = new Date().getFullYear();
      var startYear = year - 5;

      for (var start = year - 1; start >= startYear; start--) {
        schoolYear.push("".concat(start, " - ").concat(start + 1));
      }

      return schoolYear;
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    GunFilter: _filter_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      isedit: false,
      isdelete: false,
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
      graduates: [],
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
        value: 'fullname'
      }, {
        text: 'Email',
        align: 'start',
        sortable: true,
        value: 'email'
      }, {
        text: 'Student number',
        align: 'start',
        sortable: false,
        value: 'student_number'
      }, {
        text: 'Batch',
        align: 'start',
        sortable: true,
        value: 'batch'
      }, {
        text: 'Section',
        align: 'start',
        sortable: true,
        value: 'section'
      }, {
        text: 'Course',
        align: 'start',
        sortable: true,
        value: 'course'
      }, {
        text: 'Action',
        align: 'start',
        sortable: false,
        value: 'action'
      }]
    };
  },
  methods: {
    addNew: function addNew() {
      this.$router.push({
        name: 'graduates-create'
      });
    },
    fetchPage: function fetchPage() {
      var _this = this;

      this.data.isFetching = true;

      var params = this._createParams(this.options);

      params = params + this._createFilterParams(this.data.filter);
      console.log(this.data.keyword, "keyword");
      if (this.data.keyword) params = params + '&keyword=' + this.data.keyword;
      axios.get("/admin/graduates?".concat(params)).then(function (_ref) {
        var data = _ref.data;
        _this.graduates = data.data;
        _this.data.isFetching = false;
        _this.total = data.total;
      });
    },
    resetFilter: function resetFilter() {
      this.data.filter = {};
      this.fetchPage();
    },
    cancel: function cancel() {
      this.isdelete = false;
      this.isedit = false;
      this.showForm = false;
    },
    save: function save(val) {
      var _this2 = this;

      console.log(val, "save");
      axios.post("/admin/graduates", val).then(function (_ref2) {
        var data = _ref2.data;

        _this2.fetchPage();

        _this2.showForm = false;
      });
    },
    update: function update(val) {
      var _this3 = this;

      axios.put("/admin/graduates/".concat(val.id), val).then(function (_ref3) {
        var data = _ref3.data;

        _this3.fetchPage();

        _this3.isedit = false;
        _this3.showForm = false;
      });
    },
    showEdit: function showEdit(val) {
      this.$router.push({
        name: 'profile',
        params: {
          graduates_id: val.id
        }
      });
    },
    showDelete: function showDelete(val) {
      Object.assign(this.selectedItem, val);
      this.details.title = 'Delete';
      this.details.message = "Are you sure you want to remove ".concat(this.selectedItem.fullname, "?");
      this.isdelete = true;
    },
    remove: function remove() {
      var _this4 = this;

      axios["delete"]("/admin/graduates/".concat(this.selectedItem.id)).then(function (_ref4) {
        var data = _ref4.data;

        _this4.fetchPage();

        _this4.cancel();
      });
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/view.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/view.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    menus: function menus() {
      return [{
        // text: this._lang('client.view.profile'),
        text: 'Profile',
        route: "client-profile",
        icon: "person"
      }, {
        // text: this._lang('client.view.statistics'),
        text: 'Subscription',
        route: "client-subscription",
        icon: "mdi-chart-bar"
      }, {
        // text: this._lang('client.view.subscriptions'),
        text: 'Documents',
        route: "client-document",
        icon: "mdi-file-document"
      }, {
        // text: this._lang('client.view.payments'),
        text: 'Bookings',
        route: "client-booking",
        icon: "mdi-bookmark-check-outline"
      }, {
        // text: this._lang('client.view.payments'),
        text: 'Credit',
        route: "client-credit",
        icon: "mdi-credit-card-outline"
      }];
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".class-images[data-v-d7e19592] {\n  display: flex;\n  justify-content: center;\n}\n.class-images .v-image[data-v-d7e19592] {\n  cursor: pointer;\n}\n.image-text-field[data-v-d7e19592] {\n  margin-top: -19px !important;\n}\n.custom-card-action[data-v-d7e19592] {\n  display: flex;\n  justify-content: flex-end;\n}", ""]);

// exports


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
exports.push([module.i, ".class-images[data-v-50cde6f1] {\n  display: flex;\n  justify-content: center;\n}\n.class-images .v-image[data-v-50cde6f1] {\n  cursor: pointer;\n}\n.image-text-field[data-v-50cde6f1] {\n  margin-top: -19px !important;\n}\n.custom-card-action[data-v-50cde6f1] {\n  display: flex;\n  justify-content: flex-end;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/csv-form.vue?vue&type=template&id=1795fc58&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/csv-form.vue?vue&type=template&id=1795fc58& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _vm.show
    ? _c(
        "v-card",
        [
          _c("v-card-title"),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("table-header", {
                attrs: { data: _vm.data, hide: ["addNew"] },
                on: {
                  refresh: _vm.fetchPage,
                  search: _vm.fetchPage,
                  resetFilters: _vm.resetFilter,
                  filterRecord: _vm.fetchPage,
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "custom_filter",
                      fn: function () {
                        return [
                          _c("gun-filter", {
                            attrs: { filter: _vm.data.filter },
                          }),
                        ]
                      },
                      proxy: true,
                    },
                  ],
                  null,
                  false,
                  3669381223
                ),
              }),
              _vm._v(" "),
              _c("v-data-table", {
                staticClass: "table-fix-height",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.graduates,
                  "single-select": false,
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
                scopedSlots: _vm._u(
                  [
                    {
                      key: "item.status",
                      fn: function (ref) {
                        var item = ref.item
                        return [
                          !item.status
                            ? _c(
                                "v-btn",
                                { attrs: { icon: "", color: "error" } },
                                [_c("v-icon", [_vm._v("mdi-close")])],
                                1
                              )
                            : _c(
                                "v-btn",
                                { attrs: { icon: "", color: "success" } },
                                [_c("v-icon", [_vm._v("mdi-check")])],
                                1
                              ),
                        ]
                      },
                    },
                  ],
                  null,
                  false,
                  1125010116
                ),
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "error" },
                  on: {
                    click: function ($event) {
                      return _vm.$emit("close")
                    },
                  },
                },
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "success" },
                  on: {
                    click: function ($event) {
                      return _vm.$emit("save")
                    },
                  },
                },
                [_vm._v("Save")]
              ),
            ],
            1
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/edit.vue?vue&type=template&id=d7e19592&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/edit.vue?vue&type=template&id=d7e19592&scoped=true& ***!
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
    { attrs: { "max-height": "92vh" } },
    [
      _c(
        "v-card-title",
        [
          _c("span", { staticClass: "text-h5" }, [
            _vm._v("Graduate Informations"),
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-btn", { attrs: { color: "success" } }, [
            _vm._v("Multiple add"),
          ]),
        ],
        1
      ),
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
                                        attrs: {
                                          rules: [
                                            function () {
                                              return (
                                                !!_vm.payload.first_name || ""
                                              )
                                            },
                                          ],
                                          "background-color": _vm.isdark
                                            ? "#777"
                                            : "",
                                          "hide-details": "auto",
                                          dense: "",
                                          filled: "",
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
                                        attrs: {
                                          rules: [
                                            function () {
                                              return (
                                                !!_vm.payload.last_name || ""
                                              )
                                            },
                                          ],
                                          "background-color": _vm.isdark
                                            ? "#777"
                                            : "",
                                          "hide-details": "auto",
                                          dense: "",
                                          filled: "",
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
                                        attrs: {
                                          rules: [
                                            function () {
                                              return (
                                                !!_vm.payload.middle_name || ""
                                              )
                                            },
                                          ],
                                          "background-color": _vm.isdark
                                            ? "#777"
                                            : "",
                                          dense: "",
                                          filled: "",
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
                                        attrs: {
                                          rules: [
                                            function () {
                                              return (
                                                !!_vm.payload.student_number ||
                                                ""
                                              )
                                            },
                                          ],
                                          "background-color": _vm.isdark
                                            ? "#777"
                                            : "",
                                          dense: "",
                                          filled: "",
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
                                        attrs: {
                                          rules: [
                                            function () {
                                              return !!_vm.payload.email || ""
                                            },
                                          ],
                                          "background-color": _vm.isdark
                                            ? "#777"
                                            : "",
                                          dense: "",
                                          filled: "",
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
                                        attrs: {
                                          rules: [
                                            function () {
                                              return (
                                                !!_vm.payload.contact_number ||
                                                ""
                                              )
                                            },
                                          ],
                                          "background-color": _vm.isdark
                                            ? "#777"
                                            : "",
                                          dense: "",
                                          filled: "",
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
                                      _c("label", [_vm._v("Civil status ")]),
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
                                        },
                                        model: {
                                          value:
                                            _vm.payload.detail.civil_status,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.payload.detail,
                                              "civil_status",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "payload.detail.civil_status",
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
                                      _c("label", [_vm._v("Birthday ")]),
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
                                                            dense: "",
                                                            filled: "",
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.payload.detail
                                                                .birthday,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.payload
                                                                  .detail,
                                                                "birthday",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "payload.detail.birthday",
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
                                              value:
                                                _vm.payload.detail.birthday,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.payload.detail,
                                                  "birthday",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "payload.detail.birthday",
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
                                        _vm._v(" Location of Residence "),
                                      ]),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: {
                                          "error-messages": _vm.errorMessages,
                                          "background-color": _vm.isdark
                                            ? "#777"
                                            : "",
                                          filled: "",
                                          dense: "",
                                        },
                                        model: {
                                          value: _vm.payload.detail.residence,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.payload.detail,
                                              "residence",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "payload.detail.residence",
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
                                      _c("label", [_vm._v(" Gender ")]),
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
                                        },
                                        model: {
                                          value: _vm.payload.detail.gender,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.payload.detail,
                                              "gender",
                                              $$v
                                            )
                                          },
                                          expression: "payload.detail.gender",
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
                                _c("h2", [_vm._v("Educational Informations")]),
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
                                  attrs: { cols: "12", sm: "7", md: "5" },
                                },
                                [
                                  _c("label", [
                                    _vm._v("High educational attainment "),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-autocomplete", {
                                    attrs: {
                                      items: _vm.attainmentOptions,
                                      "hide-details": "auto",
                                      "background-color": _vm.isdark
                                        ? "#777"
                                        : "",
                                      "menu-props": {
                                        "background-color": "#777",
                                      },
                                      "item-text": "name",
                                      "item-value": "id",
                                      filled: "",
                                      dense: "",
                                    },
                                    model: {
                                      value: _vm.payload.detail.attainment,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.payload.detail,
                                          "attainment",
                                          $$v
                                        )
                                      },
                                      expression: "payload.detail.attainment",
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
                                  attrs: { cols: "12", sm: "5", md: "3" },
                                },
                                [
                                  _c("label", [_vm._v(" Prof. Exam Passed  ")]),
                                  _vm._v(" "),
                                  _c("v-autocomplete", {
                                    attrs: {
                                      items: _vm.booleanOptions,
                                      "item-text": "name",
                                      "item-value": "id",
                                      "hide-details": "auto",
                                      "background-color": _vm.isdark
                                        ? "#777"
                                        : "",
                                      "menu-props": {
                                        "background-color": "#777",
                                      },
                                      filled: "",
                                      dense: "",
                                    },
                                    model: {
                                      value:
                                        _vm.payload.detail.prof_exam_passed,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.payload.detail,
                                          "prof_exam_passed",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "payload.detail.prof_exam_passed",
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
                                  _c("label", [_vm._v(" Award(s) ")]),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      "background-color": _vm.isdark
                                        ? "#777"
                                        : "",
                                      dense: "",
                                      filled: "",
                                    },
                                    model: {
                                      value: _vm.payload.detail.awards,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.payload.detail,
                                          "awards",
                                          $$v
                                        )
                                      },
                                      expression: "payload.detail.awards",
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
                                  attrs: { cols: "12", sm: "5", md: "7" },
                                },
                                [
                                  _c("label", [
                                    _c("span", { staticClass: "text-danger" }, [
                                      _vm._v("*"),
                                    ]),
                                    _vm._v(" Course  "),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-autocomplete", {
                                    attrs: {
                                      rules: [
                                        function () {
                                          return !!_vm.payload.course_id || ""
                                        },
                                      ],
                                      items: _vm.courses,
                                      "item-text": "name",
                                      "item-value": "id",
                                      "hide-details": "auto",
                                      "background-color": _vm.isdark
                                        ? "#777"
                                        : "",
                                      "menu-props": {
                                        "background-color": "#777",
                                      },
                                      filled: "",
                                      dense: "",
                                    },
                                    model: {
                                      value: _vm.payload.course_id,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.payload, "course_id", $$v)
                                      },
                                      expression: "payload.course_id",
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
                                  attrs: { cols: "12", sm: "5", md: "2" },
                                },
                                [
                                  _c("label", [
                                    _c("span", { staticClass: "text-danger" }, [
                                      _vm._v("*"),
                                    ]),
                                    _vm._v(" Section  "),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      rules: [
                                        function () {
                                          return !!_vm.payload.section || ""
                                        },
                                      ],
                                      "hide-details": "auto",
                                      "background-color": _vm.isdark
                                        ? "#777"
                                        : "",
                                      "menu-props": {
                                        "background-color": "#777",
                                      },
                                      filled: "",
                                      dense: "",
                                    },
                                    model: {
                                      value: _vm.payload.section,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.payload, "section", $$v)
                                      },
                                      expression: "payload.section",
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
                                  attrs: { cols: "12", sm: "5", md: "3" },
                                },
                                [
                                  _c("label", [
                                    _c("span", { staticClass: "text-danger" }, [
                                      _vm._v("*"),
                                    ]),
                                    _vm._v(" Year Graduated "),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-autocomplete", {
                                    attrs: {
                                      rules: [
                                        function () {
                                          return !!_vm.payload.batch || ""
                                        },
                                      ],
                                      items: _vm.years,
                                      "hide-details": "auto",
                                      "background-color": _vm.isdark
                                        ? "#777"
                                        : "",
                                      "menu-props": {
                                        "background-color": "#777",
                                      },
                                      filled: "",
                                      dense: "",
                                    },
                                    model: {
                                      value: _vm.payload.batch,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.payload, "batch", $$v)
                                      },
                                      expression: "payload.batch",
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
                                  _c("label", [_vm._v("Employed ")]),
                                  _vm._v(" "),
                                  _c("v-autocomplete", {
                                    attrs: {
                                      items: _vm.booleanOptions,
                                      "item-text": "name",
                                      "item-value": "id",
                                      "hide-details": "auto",
                                      "background-color": _vm.isdark
                                        ? "#777"
                                        : "",
                                      "menu-props": {
                                        "background-color": "#777",
                                      },
                                      filled: "",
                                      dense: "",
                                    },
                                    model: {
                                      value: _vm.payload.detail.employed,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.payload.detail,
                                          "employed",
                                          $$v
                                        )
                                      },
                                      expression: "payload.detail.employed",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.payload.employed == 1
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
                                                              dense: "",
                                                              filled: "",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.payload
                                                                  .detail
                                                                  .employment_date,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.payload
                                                                      .detail,
                                                                    "employment_date",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "payload.detail.employment_date",
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
                                            1063819766
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
                                                _vm.payload.detail
                                                  .employment_date,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.payload.detail,
                                                  "employment_date",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "payload.detail.employment_date",
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
                                        _vm._v("Status of Employment "),
                                      ]),
                                      _vm._v(" "),
                                      _c("v-autocomplete", {
                                        attrs: {
                                          items: _vm.employmentStatus,
                                          "hide-details": "auto",
                                          "background-color": _vm.isdark
                                            ? "#777"
                                            : "",
                                          "menu-props": {
                                            "background-color": "#777",
                                          },
                                          filled: "",
                                          dense: "",
                                        },
                                        model: {
                                          value:
                                            _vm.payload.detail
                                              .employment_status,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.payload.detail,
                                              "employment_status",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "payload.detail.employment_status",
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
        "v-card-actions",
        { staticClass: "custom-card-action mr-5" },
        [
          _c(
            "v-btn",
            {
              staticClass: "mr-2",
              attrs: { color: "error" },
              on: { click: _vm.cancel },
            },
            [_vm._v("Cancel")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { color: "success" }, on: { click: _vm.save } },
            [_vm._v("Save")]
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
    { attrs: { "max-height": "92vh" } },
    [
      _c(
        "v-card-title",
        [
          _c("span", { staticClass: "text-h5" }, [
            _vm._v("Graduate Informations"),
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { color: "success" },
              on: {
                click: function ($event) {
                  return _vm.triggerInputFile()
                },
              },
            },
            [_vm._v("Multiple add")]
          ),
          _vm._v(" "),
          _c("input", {
            ref: "fileInput",
            attrs: {
              type: "file",
              accept:
                ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
              hidden: "",
            },
            on: {
              change: function ($event) {
                return _vm.handleFileUpload()
              },
            },
          }),
        ],
        1
      ),
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
                                        attrs: {
                                          rules: [
                                            function () {
                                              return (
                                                !!_vm.payload.first_name || ""
                                              )
                                            },
                                          ],
                                          "hide-details": "auto",
                                          dense: "",
                                          filled: "",
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
                                        attrs: {
                                          rules: [
                                            function () {
                                              return (
                                                !!_vm.payload.last_name || ""
                                              )
                                            },
                                          ],
                                          "hide-details": "auto",
                                          dense: "",
                                          filled: "",
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
                                        attrs: {
                                          rules: [
                                            function () {
                                              return (
                                                !!_vm.payload.middle_name || ""
                                              )
                                            },
                                          ],
                                          dense: "",
                                          filled: "",
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
                                        attrs: {
                                          rules: [
                                            function () {
                                              return (
                                                !!_vm.payload.student_number ||
                                                ""
                                              )
                                            },
                                          ],
                                          dense: "",
                                          filled: "",
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
                                        attrs: {
                                          rules: [
                                            function () {
                                              return !!_vm.payload.email || ""
                                            },
                                          ],
                                          dense: "",
                                          filled: "",
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
                                        attrs: {
                                          rules: [
                                            function () {
                                              return (
                                                !!_vm.payload.contact_number ||
                                                ""
                                              )
                                            },
                                          ],
                                          dense: "",
                                          filled: "",
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
                                      _c("label", [_vm._v("Civil status ")]),
                                      _vm._v(" "),
                                      _c("v-autocomplete", {
                                        attrs: {
                                          items: _vm.civil_status,
                                          "hide-details": "auto",
                                          "menu-props": {
                                            "background-color": "#777",
                                          },
                                          filled: "",
                                          dense: "",
                                        },
                                        model: {
                                          value:
                                            _vm.payload.detail.civil_status,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.payload.detail,
                                              "civil_status",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "payload.detail.civil_status",
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
                                      _c("label", [_vm._v("Birthday ")]),
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
                                                            dense: "",
                                                            filled: "",
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.payload.detail
                                                                .birthday,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.payload
                                                                  .detail,
                                                                "birthday",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "payload.detail.birthday",
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
                                              value:
                                                _vm.payload.detail.birthday,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.payload.detail,
                                                  "birthday",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "payload.detail.birthday",
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
                                        _vm._v(" Location of Residence "),
                                      ]),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: {
                                          "error-messages": _vm.errorMessages,
                                          filled: "",
                                          dense: "",
                                        },
                                        model: {
                                          value: _vm.payload.detail.residence,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.payload.detail,
                                              "residence",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "payload.detail.residence",
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
                                      _c("label", [_vm._v(" Gender ")]),
                                      _vm._v(" "),
                                      _c("v-autocomplete", {
                                        attrs: {
                                          items: _vm.genders,
                                          "hide-details": "auto",
                                          "menu-props": {
                                            "background-color": "#777",
                                          },
                                          filled: "",
                                          dense: "",
                                        },
                                        model: {
                                          value: _vm.payload.detail.gender,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.payload.detail,
                                              "gender",
                                              $$v
                                            )
                                          },
                                          expression: "payload.detail.gender",
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
                                _c("h2", [_vm._v("Educational Informations")]),
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
                                  attrs: { cols: "12", sm: "7", md: "5" },
                                },
                                [
                                  _c("label", [
                                    _vm._v("High educational attainment "),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-autocomplete", {
                                    attrs: {
                                      items: _vm.attainmentOptions,
                                      "hide-details": "auto",
                                      "menu-props": {
                                        "background-color": "#777",
                                      },
                                      "item-text": "name",
                                      "item-value": "id",
                                      filled: "",
                                      dense: "",
                                    },
                                    model: {
                                      value: _vm.payload.detail.attainment,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.payload.detail,
                                          "attainment",
                                          $$v
                                        )
                                      },
                                      expression: "payload.detail.attainment",
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
                                  attrs: { cols: "12", sm: "5", md: "3" },
                                },
                                [
                                  _c("label", [_vm._v(" Prof. Exam Passed  ")]),
                                  _vm._v(" "),
                                  _c("v-autocomplete", {
                                    attrs: {
                                      items: _vm.booleanOptions,
                                      "item-text": "name",
                                      "item-value": "id",
                                      "hide-details": "auto",
                                      "menu-props": {
                                        "background-color": "#777",
                                      },
                                      filled: "",
                                      dense: "",
                                    },
                                    model: {
                                      value:
                                        _vm.payload.detail.prof_exam_passed,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.payload.detail,
                                          "prof_exam_passed",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "payload.detail.prof_exam_passed",
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
                                  _c("label", [_vm._v(" Award(s) ")]),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: { dense: "", filled: "" },
                                    model: {
                                      value: _vm.payload.detail.awards,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.payload.detail,
                                          "awards",
                                          $$v
                                        )
                                      },
                                      expression: "payload.detail.awards",
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
                                  attrs: { cols: "12", sm: "5", md: "7" },
                                },
                                [
                                  _c("label", [
                                    _c("span", { staticClass: "text-danger" }, [
                                      _vm._v("*"),
                                    ]),
                                    _vm._v(" Course  "),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-autocomplete", {
                                    attrs: {
                                      rules: [
                                        function () {
                                          return !!_vm.payload.course_id || ""
                                        },
                                      ],
                                      items: _vm.courses,
                                      "item-text": "name",
                                      "item-value": "id",
                                      "hide-details": "auto",
                                      "menu-props": {
                                        "background-color": "#777",
                                      },
                                      filled: "",
                                      dense: "",
                                    },
                                    model: {
                                      value: _vm.payload.course_id,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.payload, "course_id", $$v)
                                      },
                                      expression: "payload.course_id",
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
                                  attrs: { cols: "12", sm: "5", md: "2" },
                                },
                                [
                                  _c("label", [
                                    _c("span", { staticClass: "text-danger" }, [
                                      _vm._v("*"),
                                    ]),
                                    _vm._v(" Section  "),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      rules: [
                                        function () {
                                          return !!_vm.payload.section || ""
                                        },
                                      ],
                                      "hide-details": "auto",
                                      "menu-props": {
                                        "background-color": "#777",
                                      },
                                      filled: "",
                                      dense: "",
                                    },
                                    model: {
                                      value: _vm.payload.section,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.payload, "section", $$v)
                                      },
                                      expression: "payload.section",
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
                                  attrs: { cols: "12", sm: "5", md: "3" },
                                },
                                [
                                  _c("label", [
                                    _c("span", { staticClass: "text-danger" }, [
                                      _vm._v("*"),
                                    ]),
                                    _vm._v(" Year Graduated "),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-autocomplete", {
                                    attrs: {
                                      rules: [
                                        function () {
                                          return !!_vm.payload.batch || ""
                                        },
                                      ],
                                      items: _vm.years,
                                      "hide-details": "auto",
                                      "menu-props": {
                                        "background-color": "#777",
                                      },
                                      filled: "",
                                      dense: "",
                                    },
                                    model: {
                                      value: _vm.payload.batch,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.payload, "batch", $$v)
                                      },
                                      expression: "payload.batch",
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
                                  _c("label", [_vm._v("Employed ")]),
                                  _vm._v(" "),
                                  _c("v-autocomplete", {
                                    attrs: {
                                      items: _vm.booleanOptions,
                                      "item-text": "name",
                                      "item-value": "id",
                                      "hide-details": "auto",
                                      "menu-props": {
                                        "background-color": "#777",
                                      },
                                      filled: "",
                                      dense: "",
                                    },
                                    model: {
                                      value: _vm.payload.detail.employed,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.payload.detail,
                                          "employed",
                                          $$v
                                        )
                                      },
                                      expression: "payload.detail.employed",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.payload.employed == 1
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
                                                              dense: "",
                                                              filled: "",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.payload
                                                                  .detail
                                                                  .employment_date,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.payload
                                                                      .detail,
                                                                    "employment_date",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "payload.detail.employment_date",
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
                                            1063819766
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
                                                _vm.payload.detail
                                                  .employment_date,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.payload.detail,
                                                  "employment_date",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "payload.detail.employment_date",
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
                                        _vm._v("Status of Employment "),
                                      ]),
                                      _vm._v(" "),
                                      _c("v-autocomplete", {
                                        attrs: {
                                          items: _vm.employmentStatus,
                                          "hide-details": "auto",
                                          "menu-props": {
                                            "background-color": "#777",
                                          },
                                          filled: "",
                                          dense: "",
                                        },
                                        model: {
                                          value:
                                            _vm.payload.detail
                                              .employment_status,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.payload.detail,
                                              "employment_status",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "payload.detail.employment_status",
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
        "v-card-actions",
        { staticClass: "custom-card-action mr-5" },
        [
          _c(
            "v-btn",
            {
              staticClass: "mr-2",
              attrs: { color: "error" },
              on: { click: _vm.cancel },
            },
            [_vm._v("Cancel")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { color: "success" }, on: { click: _vm.save } },
            [_vm._v("Save")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            fullscreen: "",
            "hide-overlay": "",
            transition: "dialog-bottom-transition",
          },
          model: {
            value: _vm.ismultiple,
            callback: function ($$v) {
              _vm.ismultiple = $$v
            },
            expression: "ismultiple",
          },
        },
        [
          _c("con-form", {
            attrs: { show: _vm.ismultiple },
            on: { close: _vm.closeDialog, save: _vm.saveMultiple },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/index.vue?vue&type=template&id=2f8f2b75&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/index.vue?vue&type=template&id=2f8f2b75& ***!
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
    { attrs: { elevation: "1", "max-height": "92vh" } },
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
              items: _vm.graduates,
              "max-height": "100%",
              "single-select": false,
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
                key: "item.course",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.course.code) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "item.action",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _c(
                      "v-row",
                      [
                        _c(
                          "v-btn",
                          { attrs: { color: "warning", icon: "" } },
                          [
                            _c("v-icon", { attrs: { small: "" } }, [
                              _vm._v(
                                "\n                            mdi-printer\n                        "
                              ),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("table-action", {
                          attrs: { item: item },
                          on: {
                            editItem: _vm.showEdit,
                            deleteItem: _vm.showDelete,
                          },
                        }),
                      ],
                      1
                    ),
                  ]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/view.vue?vue&type=template&id=7bd93c52&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/pages/alumni/view.vue?vue&type=template&id=7bd93c52& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("content-view", { attrs: { menus: _vm.menus } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/pages/alumni/csv-form.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/pages/alumni/csv-form.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _csv_form_vue_vue_type_template_id_1795fc58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csv-form.vue?vue&type=template&id=1795fc58& */ "./resources/js/src/pages/alumni/csv-form.vue?vue&type=template&id=1795fc58&");
/* harmony import */ var _csv_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./csv-form.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/alumni/csv-form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _csv_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _csv_form_vue_vue_type_template_id_1795fc58___WEBPACK_IMPORTED_MODULE_0__["render"],
  _csv_form_vue_vue_type_template_id_1795fc58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/alumni/csv-form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/alumni/csv-form.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/csv-form.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_csv_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./csv-form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/csv-form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_csv_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/alumni/csv-form.vue?vue&type=template&id=1795fc58&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/csv-form.vue?vue&type=template&id=1795fc58& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_csv_form_vue_vue_type_template_id_1795fc58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./csv-form.vue?vue&type=template&id=1795fc58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/csv-form.vue?vue&type=template&id=1795fc58&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_csv_form_vue_vue_type_template_id_1795fc58___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_csv_form_vue_vue_type_template_id_1795fc58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/alumni/edit.vue":
/*!************************************************!*\
  !*** ./resources/js/src/pages/alumni/edit.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_d7e19592_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=d7e19592&scoped=true& */ "./resources/js/src/pages/alumni/edit.vue?vue&type=template&id=d7e19592&scoped=true&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/alumni/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _edit_vue_vue_type_style_index_0_id_d7e19592_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true& */ "./resources/js/src/pages/alumni/edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_d7e19592_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_d7e19592_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d7e19592",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/alumni/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/alumni/edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/alumni/edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_d7e19592_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/edit.vue?vue&type=style&index=0&id=d7e19592&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_d7e19592_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_d7e19592_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_d7e19592_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_id_d7e19592_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/pages/alumni/edit.vue?vue&type=template&id=d7e19592&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/edit.vue?vue&type=template&id=d7e19592&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_d7e19592_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=d7e19592&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/edit.vue?vue&type=template&id=d7e19592&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_d7e19592_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_d7e19592_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _index_vue_vue_type_template_id_2f8f2b75___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2f8f2b75& */ "./resources/js/src/pages/alumni/index.vue?vue&type=template&id=2f8f2b75&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/alumni/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2f8f2b75___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2f8f2b75___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
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

/***/ "./resources/js/src/pages/alumni/index.vue?vue&type=template&id=2f8f2b75&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/index.vue?vue&type=template&id=2f8f2b75& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f8f2b75___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2f8f2b75& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/index.vue?vue&type=template&id=2f8f2b75&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f8f2b75___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2f8f2b75___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/pages/alumni/view.vue":
/*!************************************************!*\
  !*** ./resources/js/src/pages/alumni/view.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_7bd93c52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=7bd93c52& */ "./resources/js/src/pages/alumni/view.vue?vue&type=template&id=7bd93c52&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./resources/js/src/pages/alumni/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_7bd93c52___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_7bd93c52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/pages/alumni/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/pages/alumni/view.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/view.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/pages/alumni/view.vue?vue&type=template&id=7bd93c52&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/pages/alumni/view.vue?vue&type=template&id=7bd93c52& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_7bd93c52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=7bd93c52& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/pages/alumni/view.vue?vue&type=template&id=7bd93c52&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_7bd93c52___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_7bd93c52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);