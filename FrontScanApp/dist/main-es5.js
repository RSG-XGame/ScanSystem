function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/core-js/es6/reflect.js":
  /*!*********************************************!*\
    !*** ./node_modules/core-js/es6/reflect.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsEs6ReflectJs(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! ../modules/es6.reflect.apply */
    "./node_modules/core-js/modules/es6.reflect.apply.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.construct */
    "./node_modules/core-js/modules/es6.reflect.construct.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.define-property */
    "./node_modules/core-js/modules/es6.reflect.define-property.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.delete-property */
    "./node_modules/core-js/modules/es6.reflect.delete-property.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.enumerate */
    "./node_modules/core-js/modules/es6.reflect.enumerate.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.get */
    "./node_modules/core-js/modules/es6.reflect.get.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.get-own-property-descriptor */
    "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.get-prototype-of */
    "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.has */
    "./node_modules/core-js/modules/es6.reflect.has.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.is-extensible */
    "./node_modules/core-js/modules/es6.reflect.is-extensible.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.own-keys */
    "./node_modules/core-js/modules/es6.reflect.own-keys.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.prevent-extensions */
    "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.set */
    "./node_modules/core-js/modules/es6.reflect.set.js");

    __webpack_require__(
    /*! ../modules/es6.reflect.set-prototype-of */
    "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");

    module.exports = __webpack_require__(
    /*! ../modules/_core */
    "./node_modules/core-js/modules/_core.js").Reflect;
    /***/
  },

  /***/
  "./node_modules/core-js/es7/reflect.js":
  /*!*********************************************!*\
    !*** ./node_modules/core-js/es7/reflect.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsEs7ReflectJs(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! ../modules/es7.reflect.define-metadata */
    "./node_modules/core-js/modules/es7.reflect.define-metadata.js");

    __webpack_require__(
    /*! ../modules/es7.reflect.delete-metadata */
    "./node_modules/core-js/modules/es7.reflect.delete-metadata.js");

    __webpack_require__(
    /*! ../modules/es7.reflect.get-metadata */
    "./node_modules/core-js/modules/es7.reflect.get-metadata.js");

    __webpack_require__(
    /*! ../modules/es7.reflect.get-metadata-keys */
    "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");

    __webpack_require__(
    /*! ../modules/es7.reflect.get-own-metadata */
    "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js");

    __webpack_require__(
    /*! ../modules/es7.reflect.get-own-metadata-keys */
    "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");

    __webpack_require__(
    /*! ../modules/es7.reflect.has-metadata */
    "./node_modules/core-js/modules/es7.reflect.has-metadata.js");

    __webpack_require__(
    /*! ../modules/es7.reflect.has-own-metadata */
    "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js");

    __webpack_require__(
    /*! ../modules/es7.reflect.metadata */
    "./node_modules/core-js/modules/es7.reflect.metadata.js");

    module.exports = __webpack_require__(
    /*! ../modules/_core */
    "./node_modules/core-js/modules/_core.js").Reflect;
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_a-function.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/modules/_a-function.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_aFunctionJs(module, exports) {
    module.exports = function (it) {
      if (typeof it != 'function') throw TypeError(it + ' is not a function!');
      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_an-instance.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/modules/_an-instance.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_anInstanceJs(module, exports) {
    module.exports = function (it, Constructor, name, forbiddenField) {
      if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
        throw TypeError(name + ': incorrect invocation!');
      }

      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_an-object.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/modules/_an-object.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_anObjectJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ./_is-object */
    "./node_modules/core-js/modules/_is-object.js");

    module.exports = function (it) {
      if (!isObject(it)) throw TypeError(it + ' is not an object!');
      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_array-from-iterable.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_arrayFromIterableJs(module, exports, __webpack_require__) {
    var forOf = __webpack_require__(
    /*! ./_for-of */
    "./node_modules/core-js/modules/_for-of.js");

    module.exports = function (iter, ITERATOR) {
      var result = [];
      forOf(iter, false, result.push, result, ITERATOR);
      return result;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_array-includes.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/modules/_array-includes.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_arrayIncludesJs(module, exports, __webpack_require__) {
    // false -> Array#indexOf
    // true  -> Array#includes
    var toIObject = __webpack_require__(
    /*! ./_to-iobject */
    "./node_modules/core-js/modules/_to-iobject.js");

    var toLength = __webpack_require__(
    /*! ./_to-length */
    "./node_modules/core-js/modules/_to-length.js");

    var toAbsoluteIndex = __webpack_require__(
    /*! ./_to-absolute-index */
    "./node_modules/core-js/modules/_to-absolute-index.js");

    module.exports = function (IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = toIObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value; // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare

        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++]; // eslint-disable-next-line no-self-compare

          if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
        } else for (; length > index; index++) {
          if (IS_INCLUDES || index in O) {
            if (O[index] === el) return IS_INCLUDES || index || 0;
          }
        }
        return !IS_INCLUDES && -1;
      };
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_array-methods.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/modules/_array-methods.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_arrayMethodsJs(module, exports, __webpack_require__) {
    // 0 -> Array#forEach
    // 1 -> Array#map
    // 2 -> Array#filter
    // 3 -> Array#some
    // 4 -> Array#every
    // 5 -> Array#find
    // 6 -> Array#findIndex
    var ctx = __webpack_require__(
    /*! ./_ctx */
    "./node_modules/core-js/modules/_ctx.js");

    var IObject = __webpack_require__(
    /*! ./_iobject */
    "./node_modules/core-js/modules/_iobject.js");

    var toObject = __webpack_require__(
    /*! ./_to-object */
    "./node_modules/core-js/modules/_to-object.js");

    var toLength = __webpack_require__(
    /*! ./_to-length */
    "./node_modules/core-js/modules/_to-length.js");

    var asc = __webpack_require__(
    /*! ./_array-species-create */
    "./node_modules/core-js/modules/_array-species-create.js");

    module.exports = function (TYPE, $create) {
      var IS_MAP = TYPE == 1;
      var IS_FILTER = TYPE == 2;
      var IS_SOME = TYPE == 3;
      var IS_EVERY = TYPE == 4;
      var IS_FIND_INDEX = TYPE == 6;
      var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
      var create = $create || asc;
      return function ($this, callbackfn, that) {
        var O = toObject($this);
        var self = IObject(O);
        var f = ctx(callbackfn, that, 3);
        var length = toLength(self.length);
        var index = 0;
        var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
        var val, res;

        for (; length > index; index++) {
          if (NO_HOLES || index in self) {
            val = self[index];
            res = f(val, index, O);

            if (TYPE) {
              if (IS_MAP) result[index] = res; // map
              else if (res) switch (TYPE) {
                  case 3:
                    return true;
                  // some

                  case 5:
                    return val;
                  // find

                  case 6:
                    return index;
                  // findIndex

                  case 2:
                    result.push(val);
                  // filter
                } else if (IS_EVERY) return false; // every
            }
          }
        }

        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
      };
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_array-species-constructor.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_arraySpeciesConstructorJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ./_is-object */
    "./node_modules/core-js/modules/_is-object.js");

    var isArray = __webpack_require__(
    /*! ./_is-array */
    "./node_modules/core-js/modules/_is-array.js");

    var SPECIES = __webpack_require__(
    /*! ./_wks */
    "./node_modules/core-js/modules/_wks.js")('species');

    module.exports = function (original) {
      var C;

      if (isArray(original)) {
        C = original.constructor; // cross-realm fallback

        if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;

        if (isObject(C)) {
          C = C[SPECIES];
          if (C === null) C = undefined;
        }
      }

      return C === undefined ? Array : C;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_array-species-create.js":
  /*!***************************************************************!*\
    !*** ./node_modules/core-js/modules/_array-species-create.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_arraySpeciesCreateJs(module, exports, __webpack_require__) {
    // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
    var speciesConstructor = __webpack_require__(
    /*! ./_array-species-constructor */
    "./node_modules/core-js/modules/_array-species-constructor.js");

    module.exports = function (original, length) {
      return new (speciesConstructor(original))(length);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_bind.js":
  /*!***********************************************!*\
    !*** ./node_modules/core-js/modules/_bind.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_bindJs(module, exports, __webpack_require__) {
    "use strict";

    var aFunction = __webpack_require__(
    /*! ./_a-function */
    "./node_modules/core-js/modules/_a-function.js");

    var isObject = __webpack_require__(
    /*! ./_is-object */
    "./node_modules/core-js/modules/_is-object.js");

    var invoke = __webpack_require__(
    /*! ./_invoke */
    "./node_modules/core-js/modules/_invoke.js");

    var arraySlice = [].slice;
    var factories = {};

    var construct = function construct(F, len, args) {
      if (!(len in factories)) {
        for (var n = [], i = 0; i < len; i++) {
          n[i] = 'a[' + i + ']';
        } // eslint-disable-next-line no-new-func


        factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
      }

      return factories[len](F, args);
    };

    module.exports = Function.bind || function bind(that
    /* , ...args */
    ) {
      var fn = aFunction(this);
      var partArgs = arraySlice.call(arguments, 1);

      var bound = function bound()
      /* args... */
      {
        var args = partArgs.concat(arraySlice.call(arguments));
        return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
      };

      if (isObject(fn.prototype)) bound.prototype = fn.prototype;
      return bound;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_classof.js":
  /*!**************************************************!*\
    !*** ./node_modules/core-js/modules/_classof.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_classofJs(module, exports, __webpack_require__) {
    // getting tag from 19.1.3.6 Object.prototype.toString()
    var cof = __webpack_require__(
    /*! ./_cof */
    "./node_modules/core-js/modules/_cof.js");

    var TAG = __webpack_require__(
    /*! ./_wks */
    "./node_modules/core-js/modules/_wks.js")('toStringTag'); // ES3 wrong here


    var ARG = cof(function () {
      return arguments;
    }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

    var tryGet = function tryGet(it, key) {
      try {
        return it[key];
      } catch (e) {
        /* empty */
      }
    };

    module.exports = function (it) {
      var O, T, B;
      return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
      : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T // builtinTag case
      : ARG ? cof(O) // ES3 arguments fallback
      : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_cof.js":
  /*!**********************************************!*\
    !*** ./node_modules/core-js/modules/_cof.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_cofJs(module, exports) {
    var toString = {}.toString;

    module.exports = function (it) {
      return toString.call(it).slice(8, -1);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_collection-strong.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/modules/_collection-strong.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_collectionStrongJs(module, exports, __webpack_require__) {
    "use strict";

    var dP = __webpack_require__(
    /*! ./_object-dp */
    "./node_modules/core-js/modules/_object-dp.js").f;

    var create = __webpack_require__(
    /*! ./_object-create */
    "./node_modules/core-js/modules/_object-create.js");

    var redefineAll = __webpack_require__(
    /*! ./_redefine-all */
    "./node_modules/core-js/modules/_redefine-all.js");

    var ctx = __webpack_require__(
    /*! ./_ctx */
    "./node_modules/core-js/modules/_ctx.js");

    var anInstance = __webpack_require__(
    /*! ./_an-instance */
    "./node_modules/core-js/modules/_an-instance.js");

    var forOf = __webpack_require__(
    /*! ./_for-of */
    "./node_modules/core-js/modules/_for-of.js");

    var $iterDefine = __webpack_require__(
    /*! ./_iter-define */
    "./node_modules/core-js/modules/_iter-define.js");

    var step = __webpack_require__(
    /*! ./_iter-step */
    "./node_modules/core-js/modules/_iter-step.js");

    var setSpecies = __webpack_require__(
    /*! ./_set-species */
    "./node_modules/core-js/modules/_set-species.js");

    var DESCRIPTORS = __webpack_require__(
    /*! ./_descriptors */
    "./node_modules/core-js/modules/_descriptors.js");

    var fastKey = __webpack_require__(
    /*! ./_meta */
    "./node_modules/core-js/modules/_meta.js").fastKey;

    var validate = __webpack_require__(
    /*! ./_validate-collection */
    "./node_modules/core-js/modules/_validate-collection.js");

    var SIZE = DESCRIPTORS ? '_s' : 'size';

    var getEntry = function getEntry(that, key) {
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return that._i[index]; // frozen object case

      for (entry = that._f; entry; entry = entry.n) {
        if (entry.k == key) return entry;
      }
    };

    module.exports = {
      getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
        var C = wrapper(function (that, iterable) {
          anInstance(that, C, NAME, '_i');
          that._t = NAME; // collection type

          that._i = create(null); // index

          that._f = undefined; // first entry

          that._l = undefined; // last entry

          that[SIZE] = 0; // size

          if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        });
        redefineAll(C.prototype, {
          // 23.1.3.1 Map.prototype.clear()
          // 23.2.3.2 Set.prototype.clear()
          clear: function clear() {
            for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
              entry.r = true;
              if (entry.p) entry.p = entry.p.n = undefined;
              delete data[entry.i];
            }

            that._f = that._l = undefined;
            that[SIZE] = 0;
          },
          // 23.1.3.3 Map.prototype.delete(key)
          // 23.2.3.4 Set.prototype.delete(value)
          'delete': function _delete(key) {
            var that = validate(this, NAME);
            var entry = getEntry(that, key);

            if (entry) {
              var next = entry.n;
              var prev = entry.p;
              delete that._i[entry.i];
              entry.r = true;
              if (prev) prev.n = next;
              if (next) next.p = prev;
              if (that._f == entry) that._f = next;
              if (that._l == entry) that._l = prev;
              that[SIZE]--;
            }

            return !!entry;
          },
          // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
          // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
          forEach: function forEach(callbackfn
          /* , that = undefined */
          ) {
            validate(this, NAME);
            var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
            var entry;

            while (entry = entry ? entry.n : this._f) {
              f(entry.v, entry.k, this); // revert to the last existing entry

              while (entry && entry.r) {
                entry = entry.p;
              }
            }
          },
          // 23.1.3.7 Map.prototype.has(key)
          // 23.2.3.7 Set.prototype.has(value)
          has: function has(key) {
            return !!getEntry(validate(this, NAME), key);
          }
        });
        if (DESCRIPTORS) dP(C.prototype, 'size', {
          get: function get() {
            return validate(this, NAME)[SIZE];
          }
        });
        return C;
      },
      def: function def(that, key, value) {
        var entry = getEntry(that, key);
        var prev, index; // change existing entry

        if (entry) {
          entry.v = value; // create new entry
        } else {
          that._l = entry = {
            i: index = fastKey(key, true),
            // <- index
            k: key,
            // <- key
            v: value,
            // <- value
            p: prev = that._l,
            // <- previous entry
            n: undefined,
            // <- next entry
            r: false // <- removed

          };
          if (!that._f) that._f = entry;
          if (prev) prev.n = entry;
          that[SIZE]++; // add to index

          if (index !== 'F') that._i[index] = entry;
        }

        return that;
      },
      getEntry: getEntry,
      setStrong: function setStrong(C, NAME, IS_MAP) {
        // add .keys, .values, .entries, [@@iterator]
        // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
        $iterDefine(C, NAME, function (iterated, kind) {
          this._t = validate(iterated, NAME); // target

          this._k = kind; // kind

          this._l = undefined; // previous
        }, function () {
          var that = this;
          var kind = that._k;
          var entry = that._l; // revert to the last existing entry

          while (entry && entry.r) {
            entry = entry.p;
          } // get next entry


          if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
            // or finish the iteration
            that._t = undefined;
            return step(1);
          } // return step by kind


          if (kind == 'keys') return step(0, entry.k);
          if (kind == 'values') return step(0, entry.v);
          return step(0, [entry.k, entry.v]);
        }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

        setSpecies(NAME);
      }
    };
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_collection-weak.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/modules/_collection-weak.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_collectionWeakJs(module, exports, __webpack_require__) {
    "use strict";

    var redefineAll = __webpack_require__(
    /*! ./_redefine-all */
    "./node_modules/core-js/modules/_redefine-all.js");

    var getWeak = __webpack_require__(
    /*! ./_meta */
    "./node_modules/core-js/modules/_meta.js").getWeak;

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    var isObject = __webpack_require__(
    /*! ./_is-object */
    "./node_modules/core-js/modules/_is-object.js");

    var anInstance = __webpack_require__(
    /*! ./_an-instance */
    "./node_modules/core-js/modules/_an-instance.js");

    var forOf = __webpack_require__(
    /*! ./_for-of */
    "./node_modules/core-js/modules/_for-of.js");

    var createArrayMethod = __webpack_require__(
    /*! ./_array-methods */
    "./node_modules/core-js/modules/_array-methods.js");

    var $has = __webpack_require__(
    /*! ./_has */
    "./node_modules/core-js/modules/_has.js");

    var validate = __webpack_require__(
    /*! ./_validate-collection */
    "./node_modules/core-js/modules/_validate-collection.js");

    var arrayFind = createArrayMethod(5);
    var arrayFindIndex = createArrayMethod(6);
    var id = 0; // fallback for uncaught frozen keys

    var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
      return that._l || (that._l = new UncaughtFrozenStore());
    };

    var UncaughtFrozenStore = function UncaughtFrozenStore() {
      this.a = [];
    };

    var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
      return arrayFind(store.a, function (it) {
        return it[0] === key;
      });
    };

    UncaughtFrozenStore.prototype = {
      get: function get(key) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) return entry[1];
      },
      has: function has(key) {
        return !!findUncaughtFrozen(this, key);
      },
      set: function set(key, value) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) entry[1] = value;else this.a.push([key, value]);
      },
      'delete': function _delete(key) {
        var index = arrayFindIndex(this.a, function (it) {
          return it[0] === key;
        });
        if (~index) this.a.splice(index, 1);
        return !!~index;
      }
    };
    module.exports = {
      getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
        var C = wrapper(function (that, iterable) {
          anInstance(that, C, NAME, '_i');
          that._t = NAME; // collection type

          that._i = id++; // collection id

          that._l = undefined; // leak store for uncaught frozen objects

          if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        });
        redefineAll(C.prototype, {
          // 23.3.3.2 WeakMap.prototype.delete(key)
          // 23.4.3.3 WeakSet.prototype.delete(value)
          'delete': function _delete(key) {
            if (!isObject(key)) return false;
            var data = getWeak(key);
            if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
            return data && $has(data, this._i) && delete data[this._i];
          },
          // 23.3.3.4 WeakMap.prototype.has(key)
          // 23.4.3.4 WeakSet.prototype.has(value)
          has: function has(key) {
            if (!isObject(key)) return false;
            var data = getWeak(key);
            if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
            return data && $has(data, this._i);
          }
        });
        return C;
      },
      def: function def(that, key, value) {
        var data = getWeak(anObject(key), true);
        if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
        return that;
      },
      ufstore: uncaughtFrozenStore
    };
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_collection.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/modules/_collection.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_collectionJs(module, exports, __webpack_require__) {
    "use strict";

    var global = __webpack_require__(
    /*! ./_global */
    "./node_modules/core-js/modules/_global.js");

    var $export = __webpack_require__(
    /*! ./_export */
    "./node_modules/core-js/modules/_export.js");

    var redefine = __webpack_require__(
    /*! ./_redefine */
    "./node_modules/core-js/modules/_redefine.js");

    var redefineAll = __webpack_require__(
    /*! ./_redefine-all */
    "./node_modules/core-js/modules/_redefine-all.js");

    var meta = __webpack_require__(
    /*! ./_meta */
    "./node_modules/core-js/modules/_meta.js");

    var forOf = __webpack_require__(
    /*! ./_for-of */
    "./node_modules/core-js/modules/_for-of.js");

    var anInstance = __webpack_require__(
    /*! ./_an-instance */
    "./node_modules/core-js/modules/_an-instance.js");

    var isObject = __webpack_require__(
    /*! ./_is-object */
    "./node_modules/core-js/modules/_is-object.js");

    var fails = __webpack_require__(
    /*! ./_fails */
    "./node_modules/core-js/modules/_fails.js");

    var $iterDetect = __webpack_require__(
    /*! ./_iter-detect */
    "./node_modules/core-js/modules/_iter-detect.js");

    var setToStringTag = __webpack_require__(
    /*! ./_set-to-string-tag */
    "./node_modules/core-js/modules/_set-to-string-tag.js");

    var inheritIfRequired = __webpack_require__(
    /*! ./_inherit-if-required */
    "./node_modules/core-js/modules/_inherit-if-required.js");

    module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
      var Base = global[NAME];
      var C = Base;
      var ADDER = IS_MAP ? 'set' : 'add';
      var proto = C && C.prototype;
      var O = {};

      var fixMethod = function fixMethod(KEY) {
        var fn = proto[KEY];
        redefine(proto, KEY, KEY == 'delete' ? function (a) {
          return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
        } : KEY == 'has' ? function has(a) {
          return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
        } : KEY == 'get' ? function get(a) {
          return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
        } : KEY == 'add' ? function add(a) {
          fn.call(this, a === 0 ? 0 : a);
          return this;
        } : function set(a, b) {
          fn.call(this, a === 0 ? 0 : a, b);
          return this;
        });
      };

      if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
        new C().entries().next();
      }))) {
        // create collection constructor
        C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
        redefineAll(C.prototype, methods);
        meta.NEED = true;
      } else {
        var instance = new C(); // early implementations not supports chaining

        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false

        var THROWS_ON_PRIMITIVES = fails(function () {
          instance.has(1);
        }); // most early implementations doesn't supports iterables, most modern - not close it correctly

        var ACCEPT_ITERABLES = $iterDetect(function (iter) {
          new C(iter);
        }); // eslint-disable-line no-new
        // for early implementations -0 and +0 not the same

        var BUGGY_ZERO = !IS_WEAK && fails(function () {
          // V8 ~ Chromium 42- fails only with 5+ elements
          var $instance = new C();
          var index = 5;

          while (index--) {
            $instance[ADDER](index, index);
          }

          return !$instance.has(-0);
        });

        if (!ACCEPT_ITERABLES) {
          C = wrapper(function (target, iterable) {
            anInstance(target, C, NAME);
            var that = inheritIfRequired(new Base(), target, C);
            if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
            return that;
          });
          C.prototype = proto;
          proto.constructor = C;
        }

        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
          fixMethod('delete');
          fixMethod('has');
          IS_MAP && fixMethod('get');
        }

        if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

        if (IS_WEAK && proto.clear) delete proto.clear;
      }

      setToStringTag(C, NAME);
      O[NAME] = C;
      $export($export.G + $export.W + $export.F * (C != Base), O);
      if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
      return C;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_core.js":
  /*!***********************************************!*\
    !*** ./node_modules/core-js/modules/_core.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_coreJs(module, exports) {
    var core = module.exports = {
      version: '2.6.11'
    };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

    /***/
  },

  /***/
  "./node_modules/core-js/modules/_ctx.js":
  /*!**********************************************!*\
    !*** ./node_modules/core-js/modules/_ctx.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_ctxJs(module, exports, __webpack_require__) {
    // optional / simple context binding
    var aFunction = __webpack_require__(
    /*! ./_a-function */
    "./node_modules/core-js/modules/_a-function.js");

    module.exports = function (fn, that, length) {
      aFunction(fn);
      if (that === undefined) return fn;

      switch (length) {
        case 1:
          return function (a) {
            return fn.call(that, a);
          };

        case 2:
          return function (a, b) {
            return fn.call(that, a, b);
          };

        case 3:
          return function (a, b, c) {
            return fn.call(that, a, b, c);
          };
      }

      return function ()
      /* ...args */
      {
        return fn.apply(that, arguments);
      };
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_defined.js":
  /*!**************************************************!*\
    !*** ./node_modules/core-js/modules/_defined.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_definedJs(module, exports) {
    // 7.2.1 RequireObjectCoercible(argument)
    module.exports = function (it) {
      if (it == undefined) throw TypeError("Can't call method on  " + it);
      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_descriptors.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/modules/_descriptors.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_descriptorsJs(module, exports, __webpack_require__) {
    // Thank's IE8 for his funny defineProperty
    module.exports = !__webpack_require__(
    /*! ./_fails */
    "./node_modules/core-js/modules/_fails.js")(function () {
      return Object.defineProperty({}, 'a', {
        get: function get() {
          return 7;
        }
      }).a != 7;
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_dom-create.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/modules/_dom-create.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_domCreateJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ./_is-object */
    "./node_modules/core-js/modules/_is-object.js");

    var document = __webpack_require__(
    /*! ./_global */
    "./node_modules/core-js/modules/_global.js").document; // typeof document.createElement is 'object' in old IE


    var is = isObject(document) && isObject(document.createElement);

    module.exports = function (it) {
      return is ? document.createElement(it) : {};
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_enum-bug-keys.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_enumBugKeysJs(module, exports) {
    // IE 8- don't enum bug keys
    module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_export.js":
  /*!*************************************************!*\
    !*** ./node_modules/core-js/modules/_export.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_exportJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ./_global */
    "./node_modules/core-js/modules/_global.js");

    var core = __webpack_require__(
    /*! ./_core */
    "./node_modules/core-js/modules/_core.js");

    var hide = __webpack_require__(
    /*! ./_hide */
    "./node_modules/core-js/modules/_hide.js");

    var redefine = __webpack_require__(
    /*! ./_redefine */
    "./node_modules/core-js/modules/_redefine.js");

    var ctx = __webpack_require__(
    /*! ./_ctx */
    "./node_modules/core-js/modules/_ctx.js");

    var PROTOTYPE = 'prototype';

    var $export = function $export(type, name, source) {
      var IS_FORCED = type & $export.F;
      var IS_GLOBAL = type & $export.G;
      var IS_STATIC = type & $export.S;
      var IS_PROTO = type & $export.P;
      var IS_BIND = type & $export.B;
      var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
      var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
      var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
      var key, own, out, exp;
      if (IS_GLOBAL) source = name;

      for (key in source) {
        // contains in native
        own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

        out = (own ? target : source)[key]; // bind timers to global for call from export context

        exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // extend global

        if (target) redefine(target, key, out, type & $export.U); // export

        if (exports[key] != out) hide(exports, key, exp);
        if (IS_PROTO && expProto[key] != out) expProto[key] = out;
      }
    };

    global.core = core; // type bitmap

    $export.F = 1; // forced

    $export.G = 2; // global

    $export.S = 4; // static

    $export.P = 8; // proto

    $export.B = 16; // bind

    $export.W = 32; // wrap

    $export.U = 64; // safe

    $export.R = 128; // real proto method for `library`

    module.exports = $export;
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_fails.js":
  /*!************************************************!*\
    !*** ./node_modules/core-js/modules/_fails.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_failsJs(module, exports) {
    module.exports = function (exec) {
      try {
        return !!exec();
      } catch (e) {
        return true;
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_for-of.js":
  /*!*************************************************!*\
    !*** ./node_modules/core-js/modules/_for-of.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_forOfJs(module, exports, __webpack_require__) {
    var ctx = __webpack_require__(
    /*! ./_ctx */
    "./node_modules/core-js/modules/_ctx.js");

    var call = __webpack_require__(
    /*! ./_iter-call */
    "./node_modules/core-js/modules/_iter-call.js");

    var isArrayIter = __webpack_require__(
    /*! ./_is-array-iter */
    "./node_modules/core-js/modules/_is-array-iter.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    var toLength = __webpack_require__(
    /*! ./_to-length */
    "./node_modules/core-js/modules/_to-length.js");

    var getIterFn = __webpack_require__(
    /*! ./core.get-iterator-method */
    "./node_modules/core-js/modules/core.get-iterator-method.js");

    var BREAK = {};
    var RETURN = {};

    var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
      var iterFn = ITERATOR ? function () {
        return iterable;
      } : getIterFn(iterable);
      var f = ctx(fn, that, entries ? 2 : 1);
      var index = 0;
      var length, step, iterator, result;
      if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

      if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
        result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
        if (result === BREAK || result === RETURN) return result;
      } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
        result = call(iterator, f, step.value, entries);
        if (result === BREAK || result === RETURN) return result;
      }
    };

    exports.BREAK = BREAK;
    exports.RETURN = RETURN;
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_function-to-string.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/modules/_function-to-string.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_functionToStringJs(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! ./_shared */
    "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_global.js":
  /*!*************************************************!*\
    !*** ./node_modules/core-js/modules/_global.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_globalJs(module, exports) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
    : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

    /***/
  },

  /***/
  "./node_modules/core-js/modules/_has.js":
  /*!**********************************************!*\
    !*** ./node_modules/core-js/modules/_has.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_hasJs(module, exports) {
    var hasOwnProperty = {}.hasOwnProperty;

    module.exports = function (it, key) {
      return hasOwnProperty.call(it, key);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_hide.js":
  /*!***********************************************!*\
    !*** ./node_modules/core-js/modules/_hide.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_hideJs(module, exports, __webpack_require__) {
    var dP = __webpack_require__(
    /*! ./_object-dp */
    "./node_modules/core-js/modules/_object-dp.js");

    var createDesc = __webpack_require__(
    /*! ./_property-desc */
    "./node_modules/core-js/modules/_property-desc.js");

    module.exports = __webpack_require__(
    /*! ./_descriptors */
    "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
      return dP.f(object, key, createDesc(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_html.js":
  /*!***********************************************!*\
    !*** ./node_modules/core-js/modules/_html.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_htmlJs(module, exports, __webpack_require__) {
    var document = __webpack_require__(
    /*! ./_global */
    "./node_modules/core-js/modules/_global.js").document;

    module.exports = document && document.documentElement;
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_ie8-dom-define.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_ie8DomDefineJs(module, exports, __webpack_require__) {
    module.exports = !__webpack_require__(
    /*! ./_descriptors */
    "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(
    /*! ./_fails */
    "./node_modules/core-js/modules/_fails.js")(function () {
      return Object.defineProperty(__webpack_require__(
      /*! ./_dom-create */
      "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', {
        get: function get() {
          return 7;
        }
      }).a != 7;
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_inherit-if-required.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_inheritIfRequiredJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ./_is-object */
    "./node_modules/core-js/modules/_is-object.js");

    var setPrototypeOf = __webpack_require__(
    /*! ./_set-proto */
    "./node_modules/core-js/modules/_set-proto.js").set;

    module.exports = function (that, target, C) {
      var S = target.constructor;
      var P;

      if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
        setPrototypeOf(that, P);
      }

      return that;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_invoke.js":
  /*!*************************************************!*\
    !*** ./node_modules/core-js/modules/_invoke.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_invokeJs(module, exports) {
    // fast apply, http://jsperf.lnkit.com/fast-apply/5
    module.exports = function (fn, args, that) {
      var un = that === undefined;

      switch (args.length) {
        case 0:
          return un ? fn() : fn.call(that);

        case 1:
          return un ? fn(args[0]) : fn.call(that, args[0]);

        case 2:
          return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

        case 3:
          return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

        case 4:
          return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
      }

      return fn.apply(that, args);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_iobject.js":
  /*!**************************************************!*\
    !*** ./node_modules/core-js/modules/_iobject.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_iobjectJs(module, exports, __webpack_require__) {
    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    var cof = __webpack_require__(
    /*! ./_cof */
    "./node_modules/core-js/modules/_cof.js"); // eslint-disable-next-line no-prototype-builtins


    module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
      return cof(it) == 'String' ? it.split('') : Object(it);
    };
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_is-array-iter.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_isArrayIterJs(module, exports, __webpack_require__) {
    // check on default Array iterator
    var Iterators = __webpack_require__(
    /*! ./_iterators */
    "./node_modules/core-js/modules/_iterators.js");

    var ITERATOR = __webpack_require__(
    /*! ./_wks */
    "./node_modules/core-js/modules/_wks.js")('iterator');

    var ArrayProto = Array.prototype;

    module.exports = function (it) {
      return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_is-array.js":
  /*!***************************************************!*\
    !*** ./node_modules/core-js/modules/_is-array.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_isArrayJs(module, exports, __webpack_require__) {
    // 7.2.2 IsArray(argument)
    var cof = __webpack_require__(
    /*! ./_cof */
    "./node_modules/core-js/modules/_cof.js");

    module.exports = Array.isArray || function isArray(arg) {
      return cof(arg) == 'Array';
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_is-object.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/modules/_is-object.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_isObjectJs(module, exports) {
    module.exports = function (it) {
      return typeof it === 'object' ? it !== null : typeof it === 'function';
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_iter-call.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/modules/_iter-call.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_iterCallJs(module, exports, __webpack_require__) {
    // call something on iterator step with safe closing on error
    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    module.exports = function (iterator, fn, value, entries) {
      try {
        return entries ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
      } catch (e) {
        var ret = iterator['return'];
        if (ret !== undefined) anObject(ret.call(iterator));
        throw e;
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_iter-create.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/modules/_iter-create.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_iterCreateJs(module, exports, __webpack_require__) {
    "use strict";

    var create = __webpack_require__(
    /*! ./_object-create */
    "./node_modules/core-js/modules/_object-create.js");

    var descriptor = __webpack_require__(
    /*! ./_property-desc */
    "./node_modules/core-js/modules/_property-desc.js");

    var setToStringTag = __webpack_require__(
    /*! ./_set-to-string-tag */
    "./node_modules/core-js/modules/_set-to-string-tag.js");

    var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

    __webpack_require__(
    /*! ./_hide */
    "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(
    /*! ./_wks */
    "./node_modules/core-js/modules/_wks.js")('iterator'), function () {
      return this;
    });

    module.exports = function (Constructor, NAME, next) {
      Constructor.prototype = create(IteratorPrototype, {
        next: descriptor(1, next)
      });
      setToStringTag(Constructor, NAME + ' Iterator');
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_iter-define.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/modules/_iter-define.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_iterDefineJs(module, exports, __webpack_require__) {
    "use strict";

    var LIBRARY = __webpack_require__(
    /*! ./_library */
    "./node_modules/core-js/modules/_library.js");

    var $export = __webpack_require__(
    /*! ./_export */
    "./node_modules/core-js/modules/_export.js");

    var redefine = __webpack_require__(
    /*! ./_redefine */
    "./node_modules/core-js/modules/_redefine.js");

    var hide = __webpack_require__(
    /*! ./_hide */
    "./node_modules/core-js/modules/_hide.js");

    var Iterators = __webpack_require__(
    /*! ./_iterators */
    "./node_modules/core-js/modules/_iterators.js");

    var $iterCreate = __webpack_require__(
    /*! ./_iter-create */
    "./node_modules/core-js/modules/_iter-create.js");

    var setToStringTag = __webpack_require__(
    /*! ./_set-to-string-tag */
    "./node_modules/core-js/modules/_set-to-string-tag.js");

    var getPrototypeOf = __webpack_require__(
    /*! ./_object-gpo */
    "./node_modules/core-js/modules/_object-gpo.js");

    var ITERATOR = __webpack_require__(
    /*! ./_wks */
    "./node_modules/core-js/modules/_wks.js")('iterator');

    var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

    var FF_ITERATOR = '@@iterator';
    var KEYS = 'keys';
    var VALUES = 'values';

    var returnThis = function returnThis() {
      return this;
    };

    module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
      $iterCreate(Constructor, NAME, next);

      var getMethod = function getMethod(kind) {
        if (!BUGGY && kind in proto) return proto[kind];

        switch (kind) {
          case KEYS:
            return function keys() {
              return new Constructor(this, kind);
            };

          case VALUES:
            return function values() {
              return new Constructor(this, kind);
            };
        }

        return function entries() {
          return new Constructor(this, kind);
        };
      };

      var TAG = NAME + ' Iterator';
      var DEF_VALUES = DEFAULT == VALUES;
      var VALUES_BUG = false;
      var proto = Base.prototype;
      var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
      var $default = $native || getMethod(DEFAULT);
      var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
      var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
      var methods, key, IteratorPrototype; // Fix native

      if ($anyNative) {
        IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
          // Set @@toStringTag to native iterators
          setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

          if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
        }
      } // fix Array#{values, @@iterator}.name in V8 / FF


      if (DEF_VALUES && $native && $native.name !== VALUES) {
        VALUES_BUG = true;

        $default = function values() {
          return $native.call(this);
        };
      } // Define iterator


      if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
        hide(proto, ITERATOR, $default);
      } // Plug for library


      Iterators[NAME] = $default;
      Iterators[TAG] = returnThis;

      if (DEFAULT) {
        methods = {
          values: DEF_VALUES ? $default : getMethod(VALUES),
          keys: IS_SET ? $default : getMethod(KEYS),
          entries: $entries
        };
        if (FORCED) for (key in methods) {
          if (!(key in proto)) redefine(proto, key, methods[key]);
        } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
      }

      return methods;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_iter-detect.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/modules/_iter-detect.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_iterDetectJs(module, exports, __webpack_require__) {
    var ITERATOR = __webpack_require__(
    /*! ./_wks */
    "./node_modules/core-js/modules/_wks.js")('iterator');

    var SAFE_CLOSING = false;

    try {
      var riter = [7][ITERATOR]();

      riter['return'] = function () {
        SAFE_CLOSING = true;
      }; // eslint-disable-next-line no-throw-literal


      Array.from(riter, function () {
        throw 2;
      });
    } catch (e) {
      /* empty */
    }

    module.exports = function (exec, skipClosing) {
      if (!skipClosing && !SAFE_CLOSING) return false;
      var safe = false;

      try {
        var arr = [7];
        var iter = arr[ITERATOR]();

        iter.next = function () {
          return {
            done: safe = true
          };
        };

        arr[ITERATOR] = function () {
          return iter;
        };

        exec(arr);
      } catch (e) {
        /* empty */
      }

      return safe;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_iter-step.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/modules/_iter-step.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_iterStepJs(module, exports) {
    module.exports = function (done, value) {
      return {
        value: value,
        done: !!done
      };
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_iterators.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/modules/_iterators.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_iteratorsJs(module, exports) {
    module.exports = {};
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_library.js":
  /*!**************************************************!*\
    !*** ./node_modules/core-js/modules/_library.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_libraryJs(module, exports) {
    module.exports = false;
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_meta.js":
  /*!***********************************************!*\
    !*** ./node_modules/core-js/modules/_meta.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_metaJs(module, exports, __webpack_require__) {
    var META = __webpack_require__(
    /*! ./_uid */
    "./node_modules/core-js/modules/_uid.js")('meta');

    var isObject = __webpack_require__(
    /*! ./_is-object */
    "./node_modules/core-js/modules/_is-object.js");

    var has = __webpack_require__(
    /*! ./_has */
    "./node_modules/core-js/modules/_has.js");

    var setDesc = __webpack_require__(
    /*! ./_object-dp */
    "./node_modules/core-js/modules/_object-dp.js").f;

    var id = 0;

    var isExtensible = Object.isExtensible || function () {
      return true;
    };

    var FREEZE = !__webpack_require__(
    /*! ./_fails */
    "./node_modules/core-js/modules/_fails.js")(function () {
      return isExtensible(Object.preventExtensions({}));
    });

    var setMeta = function setMeta(it) {
      setDesc(it, META, {
        value: {
          i: 'O' + ++id,
          // object ID
          w: {} // weak collections IDs

        }
      });
    };

    var fastKey = function fastKey(it, create) {
      // return primitive with prefix
      if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

      if (!has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F'; // not necessary to add metadata

        if (!create) return 'E'; // add missing metadata

        setMeta(it); // return object ID
      }

      return it[META].i;
    };

    var getWeak = function getWeak(it, create) {
      if (!has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true; // not necessary to add metadata

        if (!create) return false; // add missing metadata

        setMeta(it); // return hash weak collections IDs
      }

      return it[META].w;
    }; // add metadata on freeze-family methods calling


    var onFreeze = function onFreeze(it) {
      if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
      return it;
    };

    var meta = module.exports = {
      KEY: META,
      NEED: false,
      fastKey: fastKey,
      getWeak: getWeak,
      onFreeze: onFreeze
    };
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_metadata.js":
  /*!***************************************************!*\
    !*** ./node_modules/core-js/modules/_metadata.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_metadataJs(module, exports, __webpack_require__) {
    var Map = __webpack_require__(
    /*! ./es6.map */
    "./node_modules/core-js/modules/es6.map.js");

    var $export = __webpack_require__(
    /*! ./_export */
    "./node_modules/core-js/modules/_export.js");

    var shared = __webpack_require__(
    /*! ./_shared */
    "./node_modules/core-js/modules/_shared.js")('metadata');

    var store = shared.store || (shared.store = new (__webpack_require__(
    /*! ./es6.weak-map */
    "./node_modules/core-js/modules/es6.weak-map.js"))());

    var getOrCreateMetadataMap = function getOrCreateMetadataMap(target, targetKey, create) {
      var targetMetadata = store.get(target);

      if (!targetMetadata) {
        if (!create) return undefined;
        store.set(target, targetMetadata = new Map());
      }

      var keyMetadata = targetMetadata.get(targetKey);

      if (!keyMetadata) {
        if (!create) return undefined;
        targetMetadata.set(targetKey, keyMetadata = new Map());
      }

      return keyMetadata;
    };

    var ordinaryHasOwnMetadata = function ordinaryHasOwnMetadata(MetadataKey, O, P) {
      var metadataMap = getOrCreateMetadataMap(O, P, false);
      return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
    };

    var ordinaryGetOwnMetadata = function ordinaryGetOwnMetadata(MetadataKey, O, P) {
      var metadataMap = getOrCreateMetadataMap(O, P, false);
      return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
    };

    var ordinaryDefineOwnMetadata = function ordinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
      getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
    };

    var ordinaryOwnMetadataKeys = function ordinaryOwnMetadataKeys(target, targetKey) {
      var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
      var keys = [];
      if (metadataMap) metadataMap.forEach(function (_, key) {
        keys.push(key);
      });
      return keys;
    };

    var toMetaKey = function toMetaKey(it) {
      return it === undefined || typeof it == 'symbol' ? it : String(it);
    };

    var exp = function exp(O) {
      $export($export.S, 'Reflect', O);
    };

    module.exports = {
      store: store,
      map: getOrCreateMetadataMap,
      has: ordinaryHasOwnMetadata,
      get: ordinaryGetOwnMetadata,
      set: ordinaryDefineOwnMetadata,
      keys: ordinaryOwnMetadataKeys,
      key: toMetaKey,
      exp: exp
    };
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_object-assign.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/modules/_object-assign.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_objectAssignJs(module, exports, __webpack_require__) {
    "use strict"; // 19.1.2.1 Object.assign(target, source, ...)

    var DESCRIPTORS = __webpack_require__(
    /*! ./_descriptors */
    "./node_modules/core-js/modules/_descriptors.js");

    var getKeys = __webpack_require__(
    /*! ./_object-keys */
    "./node_modules/core-js/modules/_object-keys.js");

    var gOPS = __webpack_require__(
    /*! ./_object-gops */
    "./node_modules/core-js/modules/_object-gops.js");

    var pIE = __webpack_require__(
    /*! ./_object-pie */
    "./node_modules/core-js/modules/_object-pie.js");

    var toObject = __webpack_require__(
    /*! ./_to-object */
    "./node_modules/core-js/modules/_to-object.js");

    var IObject = __webpack_require__(
    /*! ./_iobject */
    "./node_modules/core-js/modules/_iobject.js");

    var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

    module.exports = !$assign || __webpack_require__(
    /*! ./_fails */
    "./node_modules/core-js/modules/_fails.js")(function () {
      var A = {};
      var B = {}; // eslint-disable-next-line no-undef

      var S = Symbol();
      var K = 'abcdefghijklmnopqrst';
      A[S] = 7;
      K.split('').forEach(function (k) {
        B[k] = k;
      });
      return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
    }) ? function assign(target, source) {
      // eslint-disable-line no-unused-vars
      var T = toObject(target);
      var aLen = arguments.length;
      var index = 1;
      var getSymbols = gOPS.f;
      var isEnum = pIE.f;

      while (aLen > index) {
        var S = IObject(arguments[index++]);
        var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
        var length = keys.length;
        var j = 0;
        var key;

        while (length > j) {
          key = keys[j++];
          if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
        }
      }

      return T;
    } : $assign;
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_object-create.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/modules/_object-create.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_objectCreateJs(module, exports, __webpack_require__) {
    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    var dPs = __webpack_require__(
    /*! ./_object-dps */
    "./node_modules/core-js/modules/_object-dps.js");

    var enumBugKeys = __webpack_require__(
    /*! ./_enum-bug-keys */
    "./node_modules/core-js/modules/_enum-bug-keys.js");

    var IE_PROTO = __webpack_require__(
    /*! ./_shared-key */
    "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

    var Empty = function Empty() {
      /* empty */
    };

    var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

    var _createDict = function createDict() {
      // Thrash, waste and sodomy: IE GC bug
      var iframe = __webpack_require__(
      /*! ./_dom-create */
      "./node_modules/core-js/modules/_dom-create.js")('iframe');

      var i = enumBugKeys.length;
      var lt = '<';
      var gt = '>';
      var iframeDocument;
      iframe.style.display = 'none';

      __webpack_require__(
      /*! ./_html */
      "./node_modules/core-js/modules/_html.js").appendChild(iframe);

      iframe.src = 'javascript:'; // eslint-disable-line no-script-url
      // createDict = iframe.contentWindow.Object;
      // html.removeChild(iframe);

      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
      iframeDocument.close();
      _createDict = iframeDocument.F;

      while (i--) {
        delete _createDict[PROTOTYPE][enumBugKeys[i]];
      }

      return _createDict();
    };

    module.exports = Object.create || function create(O, Properties) {
      var result;

      if (O !== null) {
        Empty[PROTOTYPE] = anObject(O);
        result = new Empty();
        Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

        result[IE_PROTO] = O;
      } else result = _createDict();

      return Properties === undefined ? result : dPs(result, Properties);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_object-dp.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/modules/_object-dp.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_objectDpJs(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    var IE8_DOM_DEFINE = __webpack_require__(
    /*! ./_ie8-dom-define */
    "./node_modules/core-js/modules/_ie8-dom-define.js");

    var toPrimitive = __webpack_require__(
    /*! ./_to-primitive */
    "./node_modules/core-js/modules/_to-primitive.js");

    var dP = Object.defineProperty;
    exports.f = __webpack_require__(
    /*! ./_descriptors */
    "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return dP(O, P, Attributes);
      } catch (e) {
        /* empty */
      }
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_object-dps.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/modules/_object-dps.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_objectDpsJs(module, exports, __webpack_require__) {
    var dP = __webpack_require__(
    /*! ./_object-dp */
    "./node_modules/core-js/modules/_object-dp.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    var getKeys = __webpack_require__(
    /*! ./_object-keys */
    "./node_modules/core-js/modules/_object-keys.js");

    module.exports = __webpack_require__(
    /*! ./_descriptors */
    "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var keys = getKeys(Properties);
      var length = keys.length;
      var i = 0;
      var P;

      while (length > i) {
        dP.f(O, P = keys[i++], Properties[P]);
      }

      return O;
    };
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_object-gopd.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/modules/_object-gopd.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_objectGopdJs(module, exports, __webpack_require__) {
    var pIE = __webpack_require__(
    /*! ./_object-pie */
    "./node_modules/core-js/modules/_object-pie.js");

    var createDesc = __webpack_require__(
    /*! ./_property-desc */
    "./node_modules/core-js/modules/_property-desc.js");

    var toIObject = __webpack_require__(
    /*! ./_to-iobject */
    "./node_modules/core-js/modules/_to-iobject.js");

    var toPrimitive = __webpack_require__(
    /*! ./_to-primitive */
    "./node_modules/core-js/modules/_to-primitive.js");

    var has = __webpack_require__(
    /*! ./_has */
    "./node_modules/core-js/modules/_has.js");

    var IE8_DOM_DEFINE = __webpack_require__(
    /*! ./_ie8-dom-define */
    "./node_modules/core-js/modules/_ie8-dom-define.js");

    var gOPD = Object.getOwnPropertyDescriptor;
    exports.f = __webpack_require__(
    /*! ./_descriptors */
    "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
      O = toIObject(O);
      P = toPrimitive(P, true);
      if (IE8_DOM_DEFINE) try {
        return gOPD(O, P);
      } catch (e) {
        /* empty */
      }
      if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
    };
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_object-gopn.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/modules/_object-gopn.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_objectGopnJs(module, exports, __webpack_require__) {
    // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
    var $keys = __webpack_require__(
    /*! ./_object-keys-internal */
    "./node_modules/core-js/modules/_object-keys-internal.js");

    var hiddenKeys = __webpack_require__(
    /*! ./_enum-bug-keys */
    "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return $keys(O, hiddenKeys);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_object-gops.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/modules/_object-gops.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_objectGopsJs(module, exports) {
    exports.f = Object.getOwnPropertySymbols;
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_object-gpo.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/modules/_object-gpo.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_objectGpoJs(module, exports, __webpack_require__) {
    // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
    var has = __webpack_require__(
    /*! ./_has */
    "./node_modules/core-js/modules/_has.js");

    var toObject = __webpack_require__(
    /*! ./_to-object */
    "./node_modules/core-js/modules/_to-object.js");

    var IE_PROTO = __webpack_require__(
    /*! ./_shared-key */
    "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

    var ObjectProto = Object.prototype;

    module.exports = Object.getPrototypeOf || function (O) {
      O = toObject(O);
      if (has(O, IE_PROTO)) return O[IE_PROTO];

      if (typeof O.constructor == 'function' && O instanceof O.constructor) {
        return O.constructor.prototype;
      }

      return O instanceof Object ? ObjectProto : null;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_object-keys-internal.js":
  /*!***************************************************************!*\
    !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_objectKeysInternalJs(module, exports, __webpack_require__) {
    var has = __webpack_require__(
    /*! ./_has */
    "./node_modules/core-js/modules/_has.js");

    var toIObject = __webpack_require__(
    /*! ./_to-iobject */
    "./node_modules/core-js/modules/_to-iobject.js");

    var arrayIndexOf = __webpack_require__(
    /*! ./_array-includes */
    "./node_modules/core-js/modules/_array-includes.js")(false);

    var IE_PROTO = __webpack_require__(
    /*! ./_shared-key */
    "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

    module.exports = function (object, names) {
      var O = toIObject(object);
      var i = 0;
      var result = [];
      var key;

      for (key in O) {
        if (key != IE_PROTO) has(O, key) && result.push(key);
      } // Don't enum bug & hidden keys


      while (names.length > i) {
        if (has(O, key = names[i++])) {
          ~arrayIndexOf(result, key) || result.push(key);
        }
      }

      return result;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_object-keys.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/modules/_object-keys.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_objectKeysJs(module, exports, __webpack_require__) {
    // 19.1.2.14 / 15.2.3.14 Object.keys(O)
    var $keys = __webpack_require__(
    /*! ./_object-keys-internal */
    "./node_modules/core-js/modules/_object-keys-internal.js");

    var enumBugKeys = __webpack_require__(
    /*! ./_enum-bug-keys */
    "./node_modules/core-js/modules/_enum-bug-keys.js");

    module.exports = Object.keys || function keys(O) {
      return $keys(O, enumBugKeys);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_object-pie.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/modules/_object-pie.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_objectPieJs(module, exports) {
    exports.f = {}.propertyIsEnumerable;
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_own-keys.js":
  /*!***************************************************!*\
    !*** ./node_modules/core-js/modules/_own-keys.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_ownKeysJs(module, exports, __webpack_require__) {
    // all object keys, includes non-enumerable and symbols
    var gOPN = __webpack_require__(
    /*! ./_object-gopn */
    "./node_modules/core-js/modules/_object-gopn.js");

    var gOPS = __webpack_require__(
    /*! ./_object-gops */
    "./node_modules/core-js/modules/_object-gops.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    var Reflect = __webpack_require__(
    /*! ./_global */
    "./node_modules/core-js/modules/_global.js").Reflect;

    module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
      var keys = gOPN.f(anObject(it));
      var getSymbols = gOPS.f;
      return getSymbols ? keys.concat(getSymbols(it)) : keys;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_property-desc.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/modules/_property-desc.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_propertyDescJs(module, exports) {
    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_redefine-all.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/modules/_redefine-all.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_redefineAllJs(module, exports, __webpack_require__) {
    var redefine = __webpack_require__(
    /*! ./_redefine */
    "./node_modules/core-js/modules/_redefine.js");

    module.exports = function (target, src, safe) {
      for (var key in src) {
        redefine(target, key, src[key], safe);
      }

      return target;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_redefine.js":
  /*!***************************************************!*\
    !*** ./node_modules/core-js/modules/_redefine.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_redefineJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ./_global */
    "./node_modules/core-js/modules/_global.js");

    var hide = __webpack_require__(
    /*! ./_hide */
    "./node_modules/core-js/modules/_hide.js");

    var has = __webpack_require__(
    /*! ./_has */
    "./node_modules/core-js/modules/_has.js");

    var SRC = __webpack_require__(
    /*! ./_uid */
    "./node_modules/core-js/modules/_uid.js")('src');

    var $toString = __webpack_require__(
    /*! ./_function-to-string */
    "./node_modules/core-js/modules/_function-to-string.js");

    var TO_STRING = 'toString';
    var TPL = ('' + $toString).split(TO_STRING);

    __webpack_require__(
    /*! ./_core */
    "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
      return $toString.call(it);
    };

    (module.exports = function (O, key, val, safe) {
      var isFunction = typeof val == 'function';
      if (isFunction) has(val, 'name') || hide(val, 'name', key);
      if (O[key] === val) return;
      if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

      if (O === global) {
        O[key] = val;
      } else if (!safe) {
        delete O[key];
        hide(O, key, val);
      } else if (O[key]) {
        O[key] = val;
      } else {
        hide(O, key, val);
      } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

    })(Function.prototype, TO_STRING, function toString() {
      return typeof this == 'function' && this[SRC] || $toString.call(this);
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_set-proto.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/modules/_set-proto.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_setProtoJs(module, exports, __webpack_require__) {
    // Works with __proto__ only. Old v8 can't work with null proto objects.

    /* eslint-disable no-proto */
    var isObject = __webpack_require__(
    /*! ./_is-object */
    "./node_modules/core-js/modules/_is-object.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    var check = function check(O, proto) {
      anObject(O);
      if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
    };

    module.exports = {
      set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
      function (test, buggy, set) {
        try {
          set = __webpack_require__(
          /*! ./_ctx */
          "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(
          /*! ./_object-gopd */
          "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
          set(test, []);
          buggy = !(test instanceof Array);
        } catch (e) {
          buggy = true;
        }

        return function setPrototypeOf(O, proto) {
          check(O, proto);
          if (buggy) O.__proto__ = proto;else set(O, proto);
          return O;
        };
      }({}, false) : undefined),
      check: check
    };
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_set-species.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/modules/_set-species.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_setSpeciesJs(module, exports, __webpack_require__) {
    "use strict";

    var global = __webpack_require__(
    /*! ./_global */
    "./node_modules/core-js/modules/_global.js");

    var dP = __webpack_require__(
    /*! ./_object-dp */
    "./node_modules/core-js/modules/_object-dp.js");

    var DESCRIPTORS = __webpack_require__(
    /*! ./_descriptors */
    "./node_modules/core-js/modules/_descriptors.js");

    var SPECIES = __webpack_require__(
    /*! ./_wks */
    "./node_modules/core-js/modules/_wks.js")('species');

    module.exports = function (KEY) {
      var C = global[KEY];
      if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
        configurable: true,
        get: function get() {
          return this;
        }
      });
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_set-to-string-tag.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_setToStringTagJs(module, exports, __webpack_require__) {
    var def = __webpack_require__(
    /*! ./_object-dp */
    "./node_modules/core-js/modules/_object-dp.js").f;

    var has = __webpack_require__(
    /*! ./_has */
    "./node_modules/core-js/modules/_has.js");

    var TAG = __webpack_require__(
    /*! ./_wks */
    "./node_modules/core-js/modules/_wks.js")('toStringTag');

    module.exports = function (it, tag, stat) {
      if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
        configurable: true,
        value: tag
      });
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_shared-key.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/modules/_shared-key.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_sharedKeyJs(module, exports, __webpack_require__) {
    var shared = __webpack_require__(
    /*! ./_shared */
    "./node_modules/core-js/modules/_shared.js")('keys');

    var uid = __webpack_require__(
    /*! ./_uid */
    "./node_modules/core-js/modules/_uid.js");

    module.exports = function (key) {
      return shared[key] || (shared[key] = uid(key));
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_shared.js":
  /*!*************************************************!*\
    !*** ./node_modules/core-js/modules/_shared.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_sharedJs(module, exports, __webpack_require__) {
    var core = __webpack_require__(
    /*! ./_core */
    "./node_modules/core-js/modules/_core.js");

    var global = __webpack_require__(
    /*! ./_global */
    "./node_modules/core-js/modules/_global.js");

    var SHARED = '__core-js_shared__';
    var store = global[SHARED] || (global[SHARED] = {});
    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: core.version,
      mode: __webpack_require__(
      /*! ./_library */
      "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
      copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/_to-absolute-index.js":
  /*!************************************************************!*\
    !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_toAbsoluteIndexJs(module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(
    /*! ./_to-integer */
    "./node_modules/core-js/modules/_to-integer.js");

    var max = Math.max;
    var min = Math.min;

    module.exports = function (index, length) {
      index = toInteger(index);
      return index < 0 ? max(index + length, 0) : min(index, length);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_to-integer.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/modules/_to-integer.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_toIntegerJs(module, exports) {
    // 7.1.4 ToInteger
    var ceil = Math.ceil;
    var floor = Math.floor;

    module.exports = function (it) {
      return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_to-iobject.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/modules/_to-iobject.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_toIobjectJs(module, exports, __webpack_require__) {
    // to indexed object, toObject with fallback for non-array-like ES3 strings
    var IObject = __webpack_require__(
    /*! ./_iobject */
    "./node_modules/core-js/modules/_iobject.js");

    var defined = __webpack_require__(
    /*! ./_defined */
    "./node_modules/core-js/modules/_defined.js");

    module.exports = function (it) {
      return IObject(defined(it));
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_to-length.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/modules/_to-length.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_toLengthJs(module, exports, __webpack_require__) {
    // 7.1.15 ToLength
    var toInteger = __webpack_require__(
    /*! ./_to-integer */
    "./node_modules/core-js/modules/_to-integer.js");

    var min = Math.min;

    module.exports = function (it) {
      return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_to-object.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/modules/_to-object.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_toObjectJs(module, exports, __webpack_require__) {
    // 7.1.13 ToObject(argument)
    var defined = __webpack_require__(
    /*! ./_defined */
    "./node_modules/core-js/modules/_defined.js");

    module.exports = function (it) {
      return Object(defined(it));
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_to-primitive.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/modules/_to-primitive.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_toPrimitiveJs(module, exports, __webpack_require__) {
    // 7.1.1 ToPrimitive(input [, PreferredType])
    var isObject = __webpack_require__(
    /*! ./_is-object */
    "./node_modules/core-js/modules/_is-object.js"); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string


    module.exports = function (it, S) {
      if (!isObject(it)) return it;
      var fn, val;
      if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
      if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
      if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
      throw TypeError("Can't convert object to primitive value");
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_uid.js":
  /*!**********************************************!*\
    !*** ./node_modules/core-js/modules/_uid.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_uidJs(module, exports) {
    var id = 0;
    var px = Math.random();

    module.exports = function (key) {
      return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_validate-collection.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/modules/_validate-collection.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_validateCollectionJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ./_is-object */
    "./node_modules/core-js/modules/_is-object.js");

    module.exports = function (it, TYPE) {
      if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/_wks.js":
  /*!**********************************************!*\
    !*** ./node_modules/core-js/modules/_wks.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModules_wksJs(module, exports, __webpack_require__) {
    var store = __webpack_require__(
    /*! ./_shared */
    "./node_modules/core-js/modules/_shared.js")('wks');

    var uid = __webpack_require__(
    /*! ./_uid */
    "./node_modules/core-js/modules/_uid.js");

    var Symbol = __webpack_require__(
    /*! ./_global */
    "./node_modules/core-js/modules/_global.js").Symbol;

    var USE_SYMBOL = typeof Symbol == 'function';

    var $exports = module.exports = function (name) {
      return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
    };

    $exports.store = store;
    /***/
  },

  /***/
  "./node_modules/core-js/modules/core.get-iterator-method.js":
  /*!******************************************************************!*\
    !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesCoreGetIteratorMethodJs(module, exports, __webpack_require__) {
    var classof = __webpack_require__(
    /*! ./_classof */
    "./node_modules/core-js/modules/_classof.js");

    var ITERATOR = __webpack_require__(
    /*! ./_wks */
    "./node_modules/core-js/modules/_wks.js")('iterator');

    var Iterators = __webpack_require__(
    /*! ./_iterators */
    "./node_modules/core-js/modules/_iterators.js");

    module.exports = __webpack_require__(
    /*! ./_core */
    "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
      if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/es6.map.js":
  /*!*************************************************!*\
    !*** ./node_modules/core-js/modules/es6.map.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6MapJs(module, exports, __webpack_require__) {
    "use strict";

    var strong = __webpack_require__(
    /*! ./_collection-strong */
    "./node_modules/core-js/modules/_collection-strong.js");

    var validate = __webpack_require__(
    /*! ./_validate-collection */
    "./node_modules/core-js/modules/_validate-collection.js");

    var MAP = 'Map'; // 23.1 Map Objects

    module.exports = __webpack_require__(
    /*! ./_collection */
    "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
      return function Map() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
      };
    }, {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = strong.getEntry(validate(this, MAP), key);
        return entry && entry.v;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
      }
    }, strong, true);
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es6.reflect.apply.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectApplyJs(module, exports, __webpack_require__) {
    // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
    var $export = __webpack_require__(
    /*! ./_export */
    "./node_modules/core-js/modules/_export.js");

    var aFunction = __webpack_require__(
    /*! ./_a-function */
    "./node_modules/core-js/modules/_a-function.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    var rApply = (__webpack_require__(
    /*! ./_global */
    "./node_modules/core-js/modules/_global.js").Reflect || {}).apply;
    var fApply = Function.apply; // MS Edge argumentsList argument is optional

    $export($export.S + $export.F * !__webpack_require__(
    /*! ./_fails */
    "./node_modules/core-js/modules/_fails.js")(function () {
      rApply(function () {
        /* empty */
      });
    }), 'Reflect', {
      apply: function apply(target, thisArgument, argumentsList) {
        var T = aFunction(target);
        var L = anObject(argumentsList);
        return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es6.reflect.construct.js":
  /*!***************************************************************!*\
    !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectConstructJs(module, exports, __webpack_require__) {
    // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
    var $export = __webpack_require__(
    /*! ./_export */
    "./node_modules/core-js/modules/_export.js");

    var create = __webpack_require__(
    /*! ./_object-create */
    "./node_modules/core-js/modules/_object-create.js");

    var aFunction = __webpack_require__(
    /*! ./_a-function */
    "./node_modules/core-js/modules/_a-function.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    var isObject = __webpack_require__(
    /*! ./_is-object */
    "./node_modules/core-js/modules/_is-object.js");

    var fails = __webpack_require__(
    /*! ./_fails */
    "./node_modules/core-js/modules/_fails.js");

    var bind = __webpack_require__(
    /*! ./_bind */
    "./node_modules/core-js/modules/_bind.js");

    var rConstruct = (__webpack_require__(
    /*! ./_global */
    "./node_modules/core-js/modules/_global.js").Reflect || {}).construct; // MS Edge supports only 2 arguments and argumentsList argument is optional
    // FF Nightly sets third argument as `new.target`, but does not create `this` from it

    var NEW_TARGET_BUG = fails(function () {
      function F() {
        /* empty */
      }

      return !(rConstruct(function () {
        /* empty */
      }, [], F) instanceof F);
    });
    var ARGS_BUG = !fails(function () {
      rConstruct(function () {
        /* empty */
      });
    });
    $export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
      construct: function construct(Target, args
      /* , newTarget */
      ) {
        aFunction(Target);
        anObject(args);
        var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
        if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);

        if (Target == newTarget) {
          // w/o altered newTarget, optimization for 0-4 arguments
          switch (args.length) {
            case 0:
              return new Target();

            case 1:
              return new Target(args[0]);

            case 2:
              return new Target(args[0], args[1]);

            case 3:
              return new Target(args[0], args[1], args[2]);

            case 4:
              return new Target(args[0], args[1], args[2], args[3]);
          } // w/o altered newTarget, lot of arguments case


          var $args = [null];
          $args.push.apply($args, args);
          return new (bind.apply(Target, $args))();
        } // with altered newTarget, not support built-in constructors


        var proto = newTarget.prototype;
        var instance = create(isObject(proto) ? proto : Object.prototype);
        var result = Function.apply.call(Target, instance, args);
        return isObject(result) ? result : instance;
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es6.reflect.define-property.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectDefinePropertyJs(module, exports, __webpack_require__) {
    // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
    var dP = __webpack_require__(
    /*! ./_object-dp */
    "./node_modules/core-js/modules/_object-dp.js");

    var $export = __webpack_require__(
    /*! ./_export */
    "./node_modules/core-js/modules/_export.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    var toPrimitive = __webpack_require__(
    /*! ./_to-primitive */
    "./node_modules/core-js/modules/_to-primitive.js"); // MS Edge has broken Reflect.defineProperty - throwing instead of returning false


    $export($export.S + $export.F * __webpack_require__(
    /*! ./_fails */
    "./node_modules/core-js/modules/_fails.js")(function () {
      // eslint-disable-next-line no-undef
      Reflect.defineProperty(dP.f({}, 1, {
        value: 1
      }), 1, {
        value: 2
      });
    }), 'Reflect', {
      defineProperty: function defineProperty(target, propertyKey, attributes) {
        anObject(target);
        propertyKey = toPrimitive(propertyKey, true);
        anObject(attributes);

        try {
          dP.f(target, propertyKey, attributes);
          return true;
        } catch (e) {
          return false;
        }
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es6.reflect.delete-property.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectDeletePropertyJs(module, exports, __webpack_require__) {
    // 26.1.4 Reflect.deleteProperty(target, propertyKey)
    var $export = __webpack_require__(
    /*! ./_export */
    "./node_modules/core-js/modules/_export.js");

    var gOPD = __webpack_require__(
    /*! ./_object-gopd */
    "./node_modules/core-js/modules/_object-gopd.js").f;

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    $export($export.S, 'Reflect', {
      deleteProperty: function deleteProperty(target, propertyKey) {
        var desc = gOPD(anObject(target), propertyKey);
        return desc && !desc.configurable ? false : delete target[propertyKey];
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es6.reflect.enumerate.js":
  /*!***************************************************************!*\
    !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectEnumerateJs(module, exports, __webpack_require__) {
    "use strict"; // 26.1.5 Reflect.enumerate(target)

    var $export = __webpack_require__(
    /*! ./_export */
    "./node_modules/core-js/modules/_export.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    var Enumerate = function Enumerate(iterated) {
      this._t = anObject(iterated); // target

      this._i = 0; // next index

      var keys = this._k = []; // keys

      var key;

      for (key in iterated) {
        keys.push(key);
      }
    };

    __webpack_require__(
    /*! ./_iter-create */
    "./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
      var that = this;
      var keys = that._k;
      var key;

      do {
        if (that._i >= keys.length) return {
          value: undefined,
          done: true
        };
      } while (!((key = keys[that._i++]) in that._t));

      return {
        value: key,
        done: false
      };
    });

    $export($export.S, 'Reflect', {
      enumerate: function enumerate(target) {
        return new Enumerate(target);
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
    \*********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectGetOwnPropertyDescriptorJs(module, exports, __webpack_require__) {
    // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
    var gOPD = __webpack_require__(
    /*! ./_object-gopd */
    "./node_modules/core-js/modules/_object-gopd.js");

    var $export = __webpack_require__(
    /*! ./_export */
    "./node_modules/core-js/modules/_export.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    $export($export.S, 'Reflect', {
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
        return gOPD.f(anObject(target), propertyKey);
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectGetPrototypeOfJs(module, exports, __webpack_require__) {
    // 26.1.8 Reflect.getPrototypeOf(target)
    var $export = __webpack_require__(
    /*! ./_export */
    "./node_modules/core-js/modules/_export.js");

    var getProto = __webpack_require__(
    /*! ./_object-gpo */
    "./node_modules/core-js/modules/_object-gpo.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    $export($export.S, 'Reflect', {
      getPrototypeOf: function getPrototypeOf(target) {
        return getProto(anObject(target));
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es6.reflect.get.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectGetJs(module, exports, __webpack_require__) {
    // 26.1.6 Reflect.get(target, propertyKey [, receiver])
    var gOPD = __webpack_require__(
    /*! ./_object-gopd */
    "./node_modules/core-js/modules/_object-gopd.js");

    var getPrototypeOf = __webpack_require__(
    /*! ./_object-gpo */
    "./node_modules/core-js/modules/_object-gpo.js");

    var has = __webpack_require__(
    /*! ./_has */
    "./node_modules/core-js/modules/_has.js");

    var $export = __webpack_require__(
    /*! ./_export */
    "./node_modules/core-js/modules/_export.js");

    var isObject = __webpack_require__(
    /*! ./_is-object */
    "./node_modules/core-js/modules/_is-object.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    function get(target, propertyKey
    /* , receiver */
    ) {
      var receiver = arguments.length < 3 ? target : arguments[2];
      var desc, proto;
      if (anObject(target) === receiver) return target[propertyKey];
      if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
      if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
    }

    $export($export.S, 'Reflect', {
      get: get
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es6.reflect.has.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectHasJs(module, exports, __webpack_require__) {
    // 26.1.9 Reflect.has(target, propertyKey)
    var $export = __webpack_require__(
    /*! ./_export */
    "./node_modules/core-js/modules/_export.js");

    $export($export.S, 'Reflect', {
      has: function has(target, propertyKey) {
        return propertyKey in target;
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectIsExtensibleJs(module, exports, __webpack_require__) {
    // 26.1.10 Reflect.isExtensible(target)
    var $export = __webpack_require__(
    /*! ./_export */
    "./node_modules/core-js/modules/_export.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    var $isExtensible = Object.isExtensible;
    $export($export.S, 'Reflect', {
      isExtensible: function isExtensible(target) {
        anObject(target);
        return $isExtensible ? $isExtensible(target) : true;
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es6.reflect.own-keys.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectOwnKeysJs(module, exports, __webpack_require__) {
    // 26.1.11 Reflect.ownKeys(target)
    var $export = __webpack_require__(
    /*! ./_export */
    "./node_modules/core-js/modules/_export.js");

    $export($export.S, 'Reflect', {
      ownKeys: __webpack_require__(
      /*! ./_own-keys */
      "./node_modules/core-js/modules/_own-keys.js")
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
  /*!************************************************************************!*\
    !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
    \************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectPreventExtensionsJs(module, exports, __webpack_require__) {
    // 26.1.12 Reflect.preventExtensions(target)
    var $export = __webpack_require__(
    /*! ./_export */
    "./node_modules/core-js/modules/_export.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    var $preventExtensions = Object.preventExtensions;
    $export($export.S, 'Reflect', {
      preventExtensions: function preventExtensions(target) {
        anObject(target);

        try {
          if ($preventExtensions) $preventExtensions(target);
          return true;
        } catch (e) {
          return false;
        }
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectSetPrototypeOfJs(module, exports, __webpack_require__) {
    // 26.1.14 Reflect.setPrototypeOf(target, proto)
    var $export = __webpack_require__(
    /*! ./_export */
    "./node_modules/core-js/modules/_export.js");

    var setProto = __webpack_require__(
    /*! ./_set-proto */
    "./node_modules/core-js/modules/_set-proto.js");

    if (setProto) $export($export.S, 'Reflect', {
      setPrototypeOf: function setPrototypeOf(target, proto) {
        setProto.check(target, proto);

        try {
          setProto.set(target, proto);
          return true;
        } catch (e) {
          return false;
        }
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es6.reflect.set.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6ReflectSetJs(module, exports, __webpack_require__) {
    // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
    var dP = __webpack_require__(
    /*! ./_object-dp */
    "./node_modules/core-js/modules/_object-dp.js");

    var gOPD = __webpack_require__(
    /*! ./_object-gopd */
    "./node_modules/core-js/modules/_object-gopd.js");

    var getPrototypeOf = __webpack_require__(
    /*! ./_object-gpo */
    "./node_modules/core-js/modules/_object-gpo.js");

    var has = __webpack_require__(
    /*! ./_has */
    "./node_modules/core-js/modules/_has.js");

    var $export = __webpack_require__(
    /*! ./_export */
    "./node_modules/core-js/modules/_export.js");

    var createDesc = __webpack_require__(
    /*! ./_property-desc */
    "./node_modules/core-js/modules/_property-desc.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    var isObject = __webpack_require__(
    /*! ./_is-object */
    "./node_modules/core-js/modules/_is-object.js");

    function set(target, propertyKey, V
    /* , receiver */
    ) {
      var receiver = arguments.length < 4 ? target : arguments[3];
      var ownDesc = gOPD.f(anObject(target), propertyKey);
      var existingDescriptor, proto;

      if (!ownDesc) {
        if (isObject(proto = getPrototypeOf(target))) {
          return set(proto, propertyKey, V, receiver);
        }

        ownDesc = createDesc(0);
      }

      if (has(ownDesc, 'value')) {
        if (ownDesc.writable === false || !isObject(receiver)) return false;

        if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
          if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
          existingDescriptor.value = V;
          dP.f(receiver, propertyKey, existingDescriptor);
        } else dP.f(receiver, propertyKey, createDesc(0, V));

        return true;
      }

      return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
    }

    $export($export.S, 'Reflect', {
      set: set
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es6.set.js":
  /*!*************************************************!*\
    !*** ./node_modules/core-js/modules/es6.set.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6SetJs(module, exports, __webpack_require__) {
    "use strict";

    var strong = __webpack_require__(
    /*! ./_collection-strong */
    "./node_modules/core-js/modules/_collection-strong.js");

    var validate = __webpack_require__(
    /*! ./_validate-collection */
    "./node_modules/core-js/modules/_validate-collection.js");

    var SET = 'Set'; // 23.2 Set Objects

    module.exports = __webpack_require__(
    /*! ./_collection */
    "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
      return function Set() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
      };
    }, {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
      }
    }, strong);
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es6.weak-map.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs6WeakMapJs(module, exports, __webpack_require__) {
    "use strict";

    var global = __webpack_require__(
    /*! ./_global */
    "./node_modules/core-js/modules/_global.js");

    var each = __webpack_require__(
    /*! ./_array-methods */
    "./node_modules/core-js/modules/_array-methods.js")(0);

    var redefine = __webpack_require__(
    /*! ./_redefine */
    "./node_modules/core-js/modules/_redefine.js");

    var meta = __webpack_require__(
    /*! ./_meta */
    "./node_modules/core-js/modules/_meta.js");

    var assign = __webpack_require__(
    /*! ./_object-assign */
    "./node_modules/core-js/modules/_object-assign.js");

    var weak = __webpack_require__(
    /*! ./_collection-weak */
    "./node_modules/core-js/modules/_collection-weak.js");

    var isObject = __webpack_require__(
    /*! ./_is-object */
    "./node_modules/core-js/modules/_is-object.js");

    var validate = __webpack_require__(
    /*! ./_validate-collection */
    "./node_modules/core-js/modules/_validate-collection.js");

    var NATIVE_WEAK_MAP = __webpack_require__(
    /*! ./_validate-collection */
    "./node_modules/core-js/modules/_validate-collection.js");

    var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
    var WEAK_MAP = 'WeakMap';
    var getWeak = meta.getWeak;
    var isExtensible = Object.isExtensible;
    var uncaughtFrozenStore = weak.ufstore;
    var InternalMap;

    var wrapper = function wrapper(get) {
      return function WeakMap() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
      };
    };

    var methods = {
      // 23.3.3.3 WeakMap.prototype.get(key)
      get: function get(key) {
        if (isObject(key)) {
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
          return data ? data[this._i] : undefined;
        }
      },
      // 23.3.3.5 WeakMap.prototype.set(key, value)
      set: function set(key, value) {
        return weak.def(validate(this, WEAK_MAP), key, value);
      }
    }; // 23.3 WeakMap Objects

    var $WeakMap = module.exports = __webpack_require__(
    /*! ./_collection */
    "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true); // IE11 WeakMap frozen keys fix


    if (NATIVE_WEAK_MAP && IS_IE11) {
      InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
      assign(InternalMap.prototype, methods);
      meta.NEED = true;
      each(['delete', 'has', 'get', 'set'], function (key) {
        var proto = $WeakMap.prototype;
        var method = proto[key];
        redefine(proto, key, function (a, b) {
          // store frozen objects on internal weakmap shim
          if (isObject(a) && !isExtensible(a)) {
            if (!this._f) this._f = new InternalMap();

            var result = this._f[key](a, b);

            return key == 'set' ? this : result; // store all the rest on native weakmap
          }

          return method.call(this, a, b);
        });
      });
    }
    /***/

  },

  /***/
  "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs7ReflectDefineMetadataJs(module, exports, __webpack_require__) {
    var metadata = __webpack_require__(
    /*! ./_metadata */
    "./node_modules/core-js/modules/_metadata.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    var toMetaKey = metadata.key;
    var ordinaryDefineOwnMetadata = metadata.set;
    metadata.exp({
      defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
        ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs7ReflectDeleteMetadataJs(module, exports, __webpack_require__) {
    var metadata = __webpack_require__(
    /*! ./_metadata */
    "./node_modules/core-js/modules/_metadata.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    var toMetaKey = metadata.key;
    var getOrCreateMetadataMap = metadata.map;
    var store = metadata.store;
    metadata.exp({
      deleteMetadata: function deleteMetadata(metadataKey, target
      /* , targetKey */
      ) {
        var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
        var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
        if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
        if (metadataMap.size) return true;
        var targetMetadata = store.get(target);
        targetMetadata['delete'](targetKey);
        return !!targetMetadata.size || store['delete'](target);
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs7ReflectGetMetadataKeysJs(module, exports, __webpack_require__) {
    var Set = __webpack_require__(
    /*! ./es6.set */
    "./node_modules/core-js/modules/es6.set.js");

    var from = __webpack_require__(
    /*! ./_array-from-iterable */
    "./node_modules/core-js/modules/_array-from-iterable.js");

    var metadata = __webpack_require__(
    /*! ./_metadata */
    "./node_modules/core-js/modules/_metadata.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    var getPrototypeOf = __webpack_require__(
    /*! ./_object-gpo */
    "./node_modules/core-js/modules/_object-gpo.js");

    var ordinaryOwnMetadataKeys = metadata.keys;
    var toMetaKey = metadata.key;

    var ordinaryMetadataKeys = function ordinaryMetadataKeys(O, P) {
      var oKeys = ordinaryOwnMetadataKeys(O, P);
      var parent = getPrototypeOf(O);
      if (parent === null) return oKeys;
      var pKeys = ordinaryMetadataKeys(parent, P);
      return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
    };

    metadata.exp({
      getMetadataKeys: function getMetadataKeys(target
      /* , targetKey */
      ) {
        return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
  /*!******************************************************************!*\
    !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs7ReflectGetMetadataJs(module, exports, __webpack_require__) {
    var metadata = __webpack_require__(
    /*! ./_metadata */
    "./node_modules/core-js/modules/_metadata.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    var getPrototypeOf = __webpack_require__(
    /*! ./_object-gpo */
    "./node_modules/core-js/modules/_object-gpo.js");

    var ordinaryHasOwnMetadata = metadata.has;
    var ordinaryGetOwnMetadata = metadata.get;
    var toMetaKey = metadata.key;

    var ordinaryGetMetadata = function ordinaryGetMetadata(MetadataKey, O, P) {
      var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
      if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
      var parent = getPrototypeOf(O);
      return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
    };

    metadata.exp({
      getMetadata: function getMetadata(metadataKey, target
      /* , targetKey */
      ) {
        return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
    \***************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs7ReflectGetOwnMetadataKeysJs(module, exports, __webpack_require__) {
    var metadata = __webpack_require__(
    /*! ./_metadata */
    "./node_modules/core-js/modules/_metadata.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    var ordinaryOwnMetadataKeys = metadata.keys;
    var toMetaKey = metadata.key;
    metadata.exp({
      getOwnMetadataKeys: function getOwnMetadataKeys(target
      /* , targetKey */
      ) {
        return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs7ReflectGetOwnMetadataJs(module, exports, __webpack_require__) {
    var metadata = __webpack_require__(
    /*! ./_metadata */
    "./node_modules/core-js/modules/_metadata.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    var ordinaryGetOwnMetadata = metadata.get;
    var toMetaKey = metadata.key;
    metadata.exp({
      getOwnMetadata: function getOwnMetadata(metadataKey, target
      /* , targetKey */
      ) {
        return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
  /*!******************************************************************!*\
    !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs7ReflectHasMetadataJs(module, exports, __webpack_require__) {
    var metadata = __webpack_require__(
    /*! ./_metadata */
    "./node_modules/core-js/modules/_metadata.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    var getPrototypeOf = __webpack_require__(
    /*! ./_object-gpo */
    "./node_modules/core-js/modules/_object-gpo.js");

    var ordinaryHasOwnMetadata = metadata.has;
    var toMetaKey = metadata.key;

    var ordinaryHasMetadata = function ordinaryHasMetadata(MetadataKey, O, P) {
      var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
      if (hasOwn) return true;
      var parent = getPrototypeOf(O);
      return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
    };

    metadata.exp({
      hasMetadata: function hasMetadata(metadataKey, target
      /* , targetKey */
      ) {
        return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs7ReflectHasOwnMetadataJs(module, exports, __webpack_require__) {
    var metadata = __webpack_require__(
    /*! ./_metadata */
    "./node_modules/core-js/modules/_metadata.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    var ordinaryHasOwnMetadata = metadata.has;
    var toMetaKey = metadata.key;
    metadata.exp({
      hasOwnMetadata: function hasOwnMetadata(metadataKey, target
      /* , targetKey */
      ) {
        return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es7.reflect.metadata.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEs7ReflectMetadataJs(module, exports, __webpack_require__) {
    var $metadata = __webpack_require__(
    /*! ./_metadata */
    "./node_modules/core-js/modules/_metadata.js");

    var anObject = __webpack_require__(
    /*! ./_an-object */
    "./node_modules/core-js/modules/_an-object.js");

    var aFunction = __webpack_require__(
    /*! ./_a-function */
    "./node_modules/core-js/modules/_a-function.js");

    var toMetaKey = $metadata.key;
    var ordinaryDefineOwnMetadata = $metadata.set;
    $metadata.exp({
      metadata: function metadata(metadataKey, metadataValue) {
        return function decorator(target, targetKey) {
          ordinaryDefineOwnMetadata(metadataKey, metadataValue, (targetKey !== undefined ? anObject : aFunction)(target), toMetaKey(targetKey));
        };
      }
    });
    /***/
  },

  /***/
  "./node_modules/hammerjs/hammer.js":
  /*!*****************************************!*\
    !*** ./node_modules/hammerjs/hammer.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesHammerjsHammerJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    /*! Hammer.JS - v2.0.7 - 2016-04-22
    * http://hammerjs.github.io/
    *
    * Copyright (c) 2016 Jorik Tangelder;
    * Licensed under the MIT license */


    (function (window, document, exportName, undefined) {
      'use strict';

      var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
      var TEST_ELEMENT = document.createElement('div');
      var TYPE_FUNCTION = 'function';
      var round = Math.round;
      var abs = Math.abs;
      var now = Date.now;
      /**
       * set a timeout with a given scope
       * @param {Function} fn
       * @param {Number} timeout
       * @param {Object} context
       * @returns {number}
       */

      function setTimeoutContext(fn, timeout, context) {
        return setTimeout(bindFn(fn, context), timeout);
      }
      /**
       * if the argument is an array, we want to execute the fn on each entry
       * if it aint an array we don't want to do a thing.
       * this is used by all the methods that accept a single and array argument.
       * @param {*|Array} arg
       * @param {String} fn
       * @param {Object} [context]
       * @returns {Boolean}
       */


      function invokeArrayArg(arg, fn, context) {
        if (Array.isArray(arg)) {
          each(arg, context[fn], context);
          return true;
        }

        return false;
      }
      /**
       * walk objects and arrays
       * @param {Object} obj
       * @param {Function} iterator
       * @param {Object} context
       */


      function each(obj, iterator, context) {
        var i;

        if (!obj) {
          return;
        }

        if (obj.forEach) {
          obj.forEach(iterator, context);
        } else if (obj.length !== undefined) {
          i = 0;

          while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
          }
        } else {
          for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
          }
        }
      }
      /**
       * wrap a method with a deprecation warning and stack trace
       * @param {Function} method
       * @param {String} name
       * @param {String} message
       * @returns {Function} A new function wrapping the supplied method.
       */


      function deprecate(method, name, message) {
        var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
        return function () {
          var e = new Error('get-stack-trace');
          var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '').replace(/^\s+at\s+/gm, '').replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';
          var log = window.console && (window.console.warn || window.console.log);

          if (log) {
            log.call(window.console, deprecationMessage, stack);
          }

          return method.apply(this, arguments);
        };
      }
      /**
       * extend object.
       * means that properties in dest will be overwritten by the ones in src.
       * @param {Object} target
       * @param {...Object} objects_to_assign
       * @returns {Object} target
       */


      var assign;

      if (typeof Object.assign !== 'function') {
        assign = function assign(target) {
          if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
          }

          var output = Object(target);

          for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];

            if (source !== undefined && source !== null) {
              for (var nextKey in source) {
                if (source.hasOwnProperty(nextKey)) {
                  output[nextKey] = source[nextKey];
                }
              }
            }
          }

          return output;
        };
      } else {
        assign = Object.assign;
      }
      /**
       * extend object.
       * means that properties in dest will be overwritten by the ones in src.
       * @param {Object} dest
       * @param {Object} src
       * @param {Boolean} [merge=false]
       * @returns {Object} dest
       */


      var extend = deprecate(function extend(dest, src, merge) {
        var keys = Object.keys(src);
        var i = 0;

        while (i < keys.length) {
          if (!merge || merge && dest[keys[i]] === undefined) {
            dest[keys[i]] = src[keys[i]];
          }

          i++;
        }

        return dest;
      }, 'extend', 'Use `assign`.');
      /**
       * merge the values from src in the dest.
       * means that properties that exist in dest will not be overwritten by src
       * @param {Object} dest
       * @param {Object} src
       * @returns {Object} dest
       */

      var merge = deprecate(function merge(dest, src) {
        return extend(dest, src, true);
      }, 'merge', 'Use `assign`.');
      /**
       * simple class inheritance
       * @param {Function} child
       * @param {Function} base
       * @param {Object} [properties]
       */

      function inherit(child, base, properties) {
        var baseP = base.prototype,
            childP;
        childP = child.prototype = Object.create(baseP);
        childP.constructor = child;
        childP._super = baseP;

        if (properties) {
          assign(childP, properties);
        }
      }
      /**
       * simple function bind
       * @param {Function} fn
       * @param {Object} context
       * @returns {Function}
       */


      function bindFn(fn, context) {
        return function boundFn() {
          return fn.apply(context, arguments);
        };
      }
      /**
       * let a boolean value also be a function that must return a boolean
       * this first item in args will be used as the context
       * @param {Boolean|Function} val
       * @param {Array} [args]
       * @returns {Boolean}
       */


      function boolOrFn(val, args) {
        if (typeof val == TYPE_FUNCTION) {
          return val.apply(args ? args[0] || undefined : undefined, args);
        }

        return val;
      }
      /**
       * use the val2 when val1 is undefined
       * @param {*} val1
       * @param {*} val2
       * @returns {*}
       */


      function ifUndefined(val1, val2) {
        return val1 === undefined ? val2 : val1;
      }
      /**
       * addEventListener with multiple events at once
       * @param {EventTarget} target
       * @param {String} types
       * @param {Function} handler
       */


      function addEventListeners(target, types, handler) {
        each(splitStr(types), function (type) {
          target.addEventListener(type, handler, false);
        });
      }
      /**
       * removeEventListener with multiple events at once
       * @param {EventTarget} target
       * @param {String} types
       * @param {Function} handler
       */


      function removeEventListeners(target, types, handler) {
        each(splitStr(types), function (type) {
          target.removeEventListener(type, handler, false);
        });
      }
      /**
       * find if a node is in the given parent
       * @method hasParent
       * @param {HTMLElement} node
       * @param {HTMLElement} parent
       * @return {Boolean} found
       */


      function hasParent(node, parent) {
        while (node) {
          if (node == parent) {
            return true;
          }

          node = node.parentNode;
        }

        return false;
      }
      /**
       * small indexOf wrapper
       * @param {String} str
       * @param {String} find
       * @returns {Boolean} found
       */


      function inStr(str, find) {
        return str.indexOf(find) > -1;
      }
      /**
       * split string on whitespace
       * @param {String} str
       * @returns {Array} words
       */


      function splitStr(str) {
        return str.trim().split(/\s+/g);
      }
      /**
       * find if a array contains the object using indexOf or a simple polyFill
       * @param {Array} src
       * @param {String} find
       * @param {String} [findByKey]
       * @return {Boolean|Number} false when not found, or the index
       */


      function inArray(src, find, findByKey) {
        if (src.indexOf && !findByKey) {
          return src.indexOf(find);
        } else {
          var i = 0;

          while (i < src.length) {
            if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
              return i;
            }

            i++;
          }

          return -1;
        }
      }
      /**
       * convert array-like objects to real arrays
       * @param {Object} obj
       * @returns {Array}
       */


      function toArray(obj) {
        return Array.prototype.slice.call(obj, 0);
      }
      /**
       * unique array with objects based on a key (like 'id') or just by the array's value
       * @param {Array} src [{id:1},{id:2},{id:1}]
       * @param {String} [key]
       * @param {Boolean} [sort=False]
       * @returns {Array} [{id:1},{id:2}]
       */


      function uniqueArray(src, key, sort) {
        var results = [];
        var values = [];
        var i = 0;

        while (i < src.length) {
          var val = key ? src[i][key] : src[i];

          if (inArray(values, val) < 0) {
            results.push(src[i]);
          }

          values[i] = val;
          i++;
        }

        if (sort) {
          if (!key) {
            results = results.sort();
          } else {
            results = results.sort(function sortUniqueArray(a, b) {
              return a[key] > b[key];
            });
          }
        }

        return results;
      }
      /**
       * get the prefixed property
       * @param {Object} obj
       * @param {String} property
       * @returns {String|Undefined} prefixed
       */


      function prefixed(obj, property) {
        var prefix, prop;
        var camelProp = property[0].toUpperCase() + property.slice(1);
        var i = 0;

        while (i < VENDOR_PREFIXES.length) {
          prefix = VENDOR_PREFIXES[i];
          prop = prefix ? prefix + camelProp : property;

          if (prop in obj) {
            return prop;
          }

          i++;
        }

        return undefined;
      }
      /**
       * get a unique id
       * @returns {number} uniqueId
       */


      var _uniqueId = 1;

      function uniqueId() {
        return _uniqueId++;
      }
      /**
       * get the window object of an element
       * @param {HTMLElement} element
       * @returns {DocumentView|Window}
       */


      function getWindowForElement(element) {
        var doc = element.ownerDocument || element;
        return doc.defaultView || doc.parentWindow || window;
      }

      var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
      var SUPPORT_TOUCH = 'ontouchstart' in window;
      var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
      var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
      var INPUT_TYPE_TOUCH = 'touch';
      var INPUT_TYPE_PEN = 'pen';
      var INPUT_TYPE_MOUSE = 'mouse';
      var INPUT_TYPE_KINECT = 'kinect';
      var COMPUTE_INTERVAL = 25;
      var INPUT_START = 1;
      var INPUT_MOVE = 2;
      var INPUT_END = 4;
      var INPUT_CANCEL = 8;
      var DIRECTION_NONE = 1;
      var DIRECTION_LEFT = 2;
      var DIRECTION_RIGHT = 4;
      var DIRECTION_UP = 8;
      var DIRECTION_DOWN = 16;
      var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
      var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
      var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
      var PROPS_XY = ['x', 'y'];
      var PROPS_CLIENT_XY = ['clientX', 'clientY'];
      /**
       * create new input type manager
       * @param {Manager} manager
       * @param {Function} callback
       * @returns {Input}
       * @constructor
       */

      function Input(manager, callback) {
        var self = this;
        this.manager = manager;
        this.callback = callback;
        this.element = manager.element;
        this.target = manager.options.inputTarget; // smaller wrapper around the handler, for the scope and the enabled state of the manager,
        // so when disabled the input events are completely bypassed.

        this.domHandler = function (ev) {
          if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
          }
        };

        this.init();
      }

      Input.prototype = {
        /**
         * should handle the inputEvent data and trigger the callback
         * @virtual
         */
        handler: function handler() {},

        /**
         * bind the events
         */
        init: function init() {
          this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
          this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
          this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
        },

        /**
         * unbind the events
         */
        destroy: function destroy() {
          this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
          this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
          this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
        }
      };
      /**
       * create new input type manager
       * called by the Manager constructor
       * @param {Hammer} manager
       * @returns {Input}
       */

      function createInputInstance(manager) {
        var Type;
        var inputClass = manager.options.inputClass;

        if (inputClass) {
          Type = inputClass;
        } else if (SUPPORT_POINTER_EVENTS) {
          Type = PointerEventInput;
        } else if (SUPPORT_ONLY_TOUCH) {
          Type = TouchInput;
        } else if (!SUPPORT_TOUCH) {
          Type = MouseInput;
        } else {
          Type = TouchMouseInput;
        }

        return new Type(manager, inputHandler);
      }
      /**
       * handle input events
       * @param {Manager} manager
       * @param {String} eventType
       * @param {Object} input
       */


      function inputHandler(manager, eventType, input) {
        var pointersLen = input.pointers.length;
        var changedPointersLen = input.changedPointers.length;
        var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
        var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
        input.isFirst = !!isFirst;
        input.isFinal = !!isFinal;

        if (isFirst) {
          manager.session = {};
        } // source event is the normalized value of the domEvents
        // like 'touchstart, mouseup, pointerdown'


        input.eventType = eventType; // compute scale, rotation etc

        computeInputData(manager, input); // emit secret event

        manager.emit('hammer.input', input);
        manager.recognize(input);
        manager.session.prevInput = input;
      }
      /**
       * extend the data with some usable properties like scale, rotate, velocity etc
       * @param {Object} manager
       * @param {Object} input
       */


      function computeInputData(manager, input) {
        var session = manager.session;
        var pointers = input.pointers;
        var pointersLength = pointers.length; // store the first input to calculate the distance and direction

        if (!session.firstInput) {
          session.firstInput = simpleCloneInputData(input);
        } // to compute scale and rotation we need to store the multiple touches


        if (pointersLength > 1 && !session.firstMultiple) {
          session.firstMultiple = simpleCloneInputData(input);
        } else if (pointersLength === 1) {
          session.firstMultiple = false;
        }

        var firstInput = session.firstInput;
        var firstMultiple = session.firstMultiple;
        var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
        var center = input.center = getCenter(pointers);
        input.timeStamp = now();
        input.deltaTime = input.timeStamp - firstInput.timeStamp;
        input.angle = getAngle(offsetCenter, center);
        input.distance = getDistance(offsetCenter, center);
        computeDeltaXY(session, input);
        input.offsetDirection = getDirection(input.deltaX, input.deltaY);
        var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
        input.overallVelocityX = overallVelocity.x;
        input.overallVelocityY = overallVelocity.y;
        input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
        input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
        input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
        input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
        computeIntervalInputData(session, input); // find the correct target

        var target = manager.element;

        if (hasParent(input.srcEvent.target, target)) {
          target = input.srcEvent.target;
        }

        input.target = target;
      }

      function computeDeltaXY(session, input) {
        var center = input.center;
        var offset = session.offsetDelta || {};
        var prevDelta = session.prevDelta || {};
        var prevInput = session.prevInput || {};

        if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
          prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
          };
          offset = session.offsetDelta = {
            x: center.x,
            y: center.y
          };
        }

        input.deltaX = prevDelta.x + (center.x - offset.x);
        input.deltaY = prevDelta.y + (center.y - offset.y);
      }
      /**
       * velocity is calculated every x ms
       * @param {Object} session
       * @param {Object} input
       */


      function computeIntervalInputData(session, input) {
        var last = session.lastInterval || input,
            deltaTime = input.timeStamp - last.timeStamp,
            velocity,
            velocityX,
            velocityY,
            direction;

        if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
          var deltaX = input.deltaX - last.deltaX;
          var deltaY = input.deltaY - last.deltaY;
          var v = getVelocity(deltaTime, deltaX, deltaY);
          velocityX = v.x;
          velocityY = v.y;
          velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
          direction = getDirection(deltaX, deltaY);
          session.lastInterval = input;
        } else {
          // use latest velocity info if it doesn't overtake a minimum period
          velocity = last.velocity;
          velocityX = last.velocityX;
          velocityY = last.velocityY;
          direction = last.direction;
        }

        input.velocity = velocity;
        input.velocityX = velocityX;
        input.velocityY = velocityY;
        input.direction = direction;
      }
      /**
       * create a simple clone from the input used for storage of firstInput and firstMultiple
       * @param {Object} input
       * @returns {Object} clonedInputData
       */


      function simpleCloneInputData(input) {
        // make a simple copy of the pointers because we will get a reference if we don't
        // we only need clientXY for the calculations
        var pointers = [];
        var i = 0;

        while (i < input.pointers.length) {
          pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
          };
          i++;
        }

        return {
          timeStamp: now(),
          pointers: pointers,
          center: getCenter(pointers),
          deltaX: input.deltaX,
          deltaY: input.deltaY
        };
      }
      /**
       * get the center of all the pointers
       * @param {Array} pointers
       * @return {Object} center contains `x` and `y` properties
       */


      function getCenter(pointers) {
        var pointersLength = pointers.length; // no need to loop when only one touch

        if (pointersLength === 1) {
          return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
          };
        }

        var x = 0,
            y = 0,
            i = 0;

        while (i < pointersLength) {
          x += pointers[i].clientX;
          y += pointers[i].clientY;
          i++;
        }

        return {
          x: round(x / pointersLength),
          y: round(y / pointersLength)
        };
      }
      /**
       * calculate the velocity between two points. unit is in px per ms.
       * @param {Number} deltaTime
       * @param {Number} x
       * @param {Number} y
       * @return {Object} velocity `x` and `y`
       */


      function getVelocity(deltaTime, x, y) {
        return {
          x: x / deltaTime || 0,
          y: y / deltaTime || 0
        };
      }
      /**
       * get the direction between two points
       * @param {Number} x
       * @param {Number} y
       * @return {Number} direction
       */


      function getDirection(x, y) {
        if (x === y) {
          return DIRECTION_NONE;
        }

        if (abs(x) >= abs(y)) {
          return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
        }

        return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
      }
      /**
       * calculate the absolute distance between two points
       * @param {Object} p1 {x, y}
       * @param {Object} p2 {x, y}
       * @param {Array} [props] containing x and y keys
       * @return {Number} distance
       */


      function getDistance(p1, p2, props) {
        if (!props) {
          props = PROPS_XY;
        }

        var x = p2[props[0]] - p1[props[0]],
            y = p2[props[1]] - p1[props[1]];
        return Math.sqrt(x * x + y * y);
      }
      /**
       * calculate the angle between two coordinates
       * @param {Object} p1
       * @param {Object} p2
       * @param {Array} [props] containing x and y keys
       * @return {Number} angle
       */


      function getAngle(p1, p2, props) {
        if (!props) {
          props = PROPS_XY;
        }

        var x = p2[props[0]] - p1[props[0]],
            y = p2[props[1]] - p1[props[1]];
        return Math.atan2(y, x) * 180 / Math.PI;
      }
      /**
       * calculate the rotation degrees between two pointersets
       * @param {Array} start array of pointers
       * @param {Array} end array of pointers
       * @return {Number} rotation
       */


      function getRotation(start, end) {
        return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
      }
      /**
       * calculate the scale factor between two pointersets
       * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
       * @param {Array} start array of pointers
       * @param {Array} end array of pointers
       * @return {Number} scale
       */


      function getScale(start, end) {
        return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
      }

      var MOUSE_INPUT_MAP = {
        mousedown: INPUT_START,
        mousemove: INPUT_MOVE,
        mouseup: INPUT_END
      };
      var MOUSE_ELEMENT_EVENTS = 'mousedown';
      var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
      /**
       * Mouse events input
       * @constructor
       * @extends Input
       */

      function MouseInput() {
        this.evEl = MOUSE_ELEMENT_EVENTS;
        this.evWin = MOUSE_WINDOW_EVENTS;
        this.pressed = false; // mousedown state

        Input.apply(this, arguments);
      }

      inherit(MouseInput, Input, {
        /**
         * handle mouse events
         * @param {Object} ev
         */
        handler: function MEhandler(ev) {
          var eventType = MOUSE_INPUT_MAP[ev.type]; // on start we want to have the left mouse button down

          if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
          }

          if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
          } // mouse must be down


          if (!this.pressed) {
            return;
          }

          if (eventType & INPUT_END) {
            this.pressed = false;
          }

          this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
          });
        }
      });
      var POINTER_INPUT_MAP = {
        pointerdown: INPUT_START,
        pointermove: INPUT_MOVE,
        pointerup: INPUT_END,
        pointercancel: INPUT_CANCEL,
        pointerout: INPUT_CANCEL
      }; // in IE10 the pointer types is defined as an enum

      var IE10_POINTER_TYPE_ENUM = {
        2: INPUT_TYPE_TOUCH,
        3: INPUT_TYPE_PEN,
        4: INPUT_TYPE_MOUSE,
        5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816

      };
      var POINTER_ELEMENT_EVENTS = 'pointerdown';
      var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel'; // IE10 has prefixed support, and case-sensitive

      if (window.MSPointerEvent && !window.PointerEvent) {
        POINTER_ELEMENT_EVENTS = 'MSPointerDown';
        POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
      }
      /**
       * Pointer events input
       * @constructor
       * @extends Input
       */


      function PointerEventInput() {
        this.evEl = POINTER_ELEMENT_EVENTS;
        this.evWin = POINTER_WINDOW_EVENTS;
        Input.apply(this, arguments);
        this.store = this.manager.session.pointerEvents = [];
      }

      inherit(PointerEventInput, Input, {
        /**
         * handle mouse events
         * @param {Object} ev
         */
        handler: function PEhandler(ev) {
          var store = this.store;
          var removePointer = false;
          var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
          var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
          var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
          var isTouch = pointerType == INPUT_TYPE_TOUCH; // get index of the event in the store

          var storeIndex = inArray(store, ev.pointerId, 'pointerId'); // start and mouse must be down

          if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
              store.push(ev);
              storeIndex = store.length - 1;
            }
          } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
          } // it not found, so the pointer hasn't been down (so it's probably a hover)


          if (storeIndex < 0) {
            return;
          } // update the event in the store


          store[storeIndex] = ev;
          this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
          });

          if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
          }
        }
      });
      var SINGLE_TOUCH_INPUT_MAP = {
        touchstart: INPUT_START,
        touchmove: INPUT_MOVE,
        touchend: INPUT_END,
        touchcancel: INPUT_CANCEL
      };
      var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
      var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
      /**
       * Touch events input
       * @constructor
       * @extends Input
       */

      function SingleTouchInput() {
        this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
        this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
        this.started = false;
        Input.apply(this, arguments);
      }

      inherit(SingleTouchInput, Input, {
        handler: function TEhandler(ev) {
          var type = SINGLE_TOUCH_INPUT_MAP[ev.type]; // should we handle the touch events?

          if (type === INPUT_START) {
            this.started = true;
          }

          if (!this.started) {
            return;
          }

          var touches = normalizeSingleTouches.call(this, ev, type); // when done, reset the started state

          if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
          }

          this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
          });
        }
      });
      /**
       * @this {TouchInput}
       * @param {Object} ev
       * @param {Number} type flag
       * @returns {undefined|Array} [all, changed]
       */

      function normalizeSingleTouches(ev, type) {
        var all = toArray(ev.touches);
        var changed = toArray(ev.changedTouches);

        if (type & (INPUT_END | INPUT_CANCEL)) {
          all = uniqueArray(all.concat(changed), 'identifier', true);
        }

        return [all, changed];
      }

      var TOUCH_INPUT_MAP = {
        touchstart: INPUT_START,
        touchmove: INPUT_MOVE,
        touchend: INPUT_END,
        touchcancel: INPUT_CANCEL
      };
      var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
      /**
       * Multi-user touch events input
       * @constructor
       * @extends Input
       */

      function TouchInput() {
        this.evTarget = TOUCH_TARGET_EVENTS;
        this.targetIds = {};
        Input.apply(this, arguments);
      }

      inherit(TouchInput, Input, {
        handler: function MTEhandler(ev) {
          var type = TOUCH_INPUT_MAP[ev.type];
          var touches = getTouches.call(this, ev, type);

          if (!touches) {
            return;
          }

          this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
          });
        }
      });
      /**
       * @this {TouchInput}
       * @param {Object} ev
       * @param {Number} type flag
       * @returns {undefined|Array} [all, changed]
       */

      function getTouches(ev, type) {
        var allTouches = toArray(ev.touches);
        var targetIds = this.targetIds; // when there is only one touch, the process can be simplified

        if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
          targetIds[allTouches[0].identifier] = true;
          return [allTouches, allTouches];
        }

        var i,
            targetTouches,
            changedTouches = toArray(ev.changedTouches),
            changedTargetTouches = [],
            target = this.target; // get target touches from touches

        targetTouches = allTouches.filter(function (touch) {
          return hasParent(touch.target, target);
        }); // collect touches

        if (type === INPUT_START) {
          i = 0;

          while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
          }
        } // filter changed touches to only contain touches that exist in the collected target ids


        i = 0;

        while (i < changedTouches.length) {
          if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
          } // cleanup removed touches


          if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
          }

          i++;
        }

        if (!changedTargetTouches.length) {
          return;
        }

        return [// merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true), changedTargetTouches];
      }
      /**
       * Combined touch and mouse input
       *
       * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
       * This because touch devices also emit mouse events while doing a touch.
       *
       * @constructor
       * @extends Input
       */


      var DEDUP_TIMEOUT = 2500;
      var DEDUP_DISTANCE = 25;

      function TouchMouseInput() {
        Input.apply(this, arguments);
        var handler = bindFn(this.handler, this);
        this.touch = new TouchInput(this.manager, handler);
        this.mouse = new MouseInput(this.manager, handler);
        this.primaryTouch = null;
        this.lastTouches = [];
      }

      inherit(TouchMouseInput, Input, {
        /**
         * handle mouse and touch events
         * @param {Hammer} manager
         * @param {String} inputEvent
         * @param {Object} inputData
         */
        handler: function TMEhandler(manager, inputEvent, inputData) {
          var isTouch = inputData.pointerType == INPUT_TYPE_TOUCH,
              isMouse = inputData.pointerType == INPUT_TYPE_MOUSE;

          if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
          } // when we're in a touch event, record touches to  de-dupe synthetic mouse event


          if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
          } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
          }

          this.callback(manager, inputEvent, inputData);
        },

        /**
         * remove the event listeners
         */
        destroy: function destroy() {
          this.touch.destroy();
          this.mouse.destroy();
        }
      });

      function recordTouches(eventType, eventData) {
        if (eventType & INPUT_START) {
          this.primaryTouch = eventData.changedPointers[0].identifier;
          setLastTouch.call(this, eventData);
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
          setLastTouch.call(this, eventData);
        }
      }

      function setLastTouch(eventData) {
        var touch = eventData.changedPointers[0];

        if (touch.identifier === this.primaryTouch) {
          var lastTouch = {
            x: touch.clientX,
            y: touch.clientY
          };
          this.lastTouches.push(lastTouch);
          var lts = this.lastTouches;

          var removeLastTouch = function removeLastTouch() {
            var i = lts.indexOf(lastTouch);

            if (i > -1) {
              lts.splice(i, 1);
            }
          };

          setTimeout(removeLastTouch, DEDUP_TIMEOUT);
        }
      }

      function isSyntheticEvent(eventData) {
        var x = eventData.srcEvent.clientX,
            y = eventData.srcEvent.clientY;

        for (var i = 0; i < this.lastTouches.length; i++) {
          var t = this.lastTouches[i];
          var dx = Math.abs(x - t.x),
              dy = Math.abs(y - t.y);

          if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
          }
        }

        return false;
      }

      var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
      var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined; // magical touchAction value

      var TOUCH_ACTION_COMPUTE = 'compute';
      var TOUCH_ACTION_AUTO = 'auto';
      var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented

      var TOUCH_ACTION_NONE = 'none';
      var TOUCH_ACTION_PAN_X = 'pan-x';
      var TOUCH_ACTION_PAN_Y = 'pan-y';
      var TOUCH_ACTION_MAP = getTouchActionProps();
      /**
       * Touch Action
       * sets the touchAction property or uses the js alternative
       * @param {Manager} manager
       * @param {String} value
       * @constructor
       */

      function TouchAction(manager, value) {
        this.manager = manager;
        this.set(value);
      }

      TouchAction.prototype = {
        /**
         * set the touchAction value on the element or enable the polyfill
         * @param {String} value
         */
        set: function set(value) {
          // find out the touch-action by the event handlers
          if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
          }

          if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
          }

          this.actions = value.toLowerCase().trim();
        },

        /**
         * just re-set the touchAction value
         */
        update: function update() {
          this.set(this.manager.options.touchAction);
        },

        /**
         * compute the value for the touchAction property based on the recognizer's settings
         * @returns {String} value
         */
        compute: function compute() {
          var actions = [];
          each(this.manager.recognizers, function (recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
              actions = actions.concat(recognizer.getTouchAction());
            }
          });
          return cleanTouchActions(actions.join(' '));
        },

        /**
         * this method is called on each input cycle and provides the preventing of the browser behavior
         * @param {Object} input
         */
        preventDefaults: function preventDefaults(input) {
          var srcEvent = input.srcEvent;
          var direction = input.offsetDirection; // if the touch action did prevented once this session

          if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
          }

          var actions = this.actions;
          var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
          var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
          var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

          if (hasNone) {
            //do not prevent defaults if this is a tap gesture
            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
              return;
            }
          }

          if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
          }

          if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
            return this.preventSrc(srcEvent);
          }
        },

        /**
         * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
         * @param {Object} srcEvent
         */
        preventSrc: function preventSrc(srcEvent) {
          this.manager.session.prevented = true;
          srcEvent.preventDefault();
        }
      };
      /**
       * when the touchActions are collected they are not a valid value, so we need to clean things up. *
       * @param {String} actions
       * @returns {*}
       */

      function cleanTouchActions(actions) {
        // none
        if (inStr(actions, TOUCH_ACTION_NONE)) {
          return TOUCH_ACTION_NONE;
        }

        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y); // if both pan-x and pan-y are set (different recognizers
        // for different directions, e.g. horizontal pan but vertical swipe?)
        // we need none (as otherwise with pan-x pan-y combined none of these
        // recognizers will work, since the browser would handle all panning

        if (hasPanX && hasPanY) {
          return TOUCH_ACTION_NONE;
        } // pan-x OR pan-y


        if (hasPanX || hasPanY) {
          return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
        } // manipulation


        if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
          return TOUCH_ACTION_MANIPULATION;
        }

        return TOUCH_ACTION_AUTO;
      }

      function getTouchActionProps() {
        if (!NATIVE_TOUCH_ACTION) {
          return false;
        }

        var touchMap = {};
        var cssSupports = window.CSS && window.CSS.supports;
        ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function (val) {
          // If css.supports is not supported but there is native touch-action assume it supports
          // all values. This is the case for IE 10 and 11.
          touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
        });
        return touchMap;
      }
      /**
       * Recognizer flow explained; *
       * All recognizers have the initial state of POSSIBLE when a input session starts.
       * The definition of a input session is from the first input until the last input, with all it's movement in it. *
       * Example session for mouse-input: mousedown -> mousemove -> mouseup
       *
       * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
       * which determines with state it should be.
       *
       * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
       * POSSIBLE to give it another change on the next cycle.
       *
       *               Possible
       *                  |
       *            +-----+---------------+
       *            |                     |
       *      +-----+-----+               |
       *      |           |               |
       *   Failed      Cancelled          |
       *                          +-------+------+
       *                          |              |
       *                      Recognized       Began
       *                                         |
       *                                      Changed
       *                                         |
       *                                  Ended/Recognized
       */


      var STATE_POSSIBLE = 1;
      var STATE_BEGAN = 2;
      var STATE_CHANGED = 4;
      var STATE_ENDED = 8;
      var STATE_RECOGNIZED = STATE_ENDED;
      var STATE_CANCELLED = 16;
      var STATE_FAILED = 32;
      /**
       * Recognizer
       * Every recognizer needs to extend from this class.
       * @constructor
       * @param {Object} options
       */

      function Recognizer(options) {
        this.options = assign({}, this.defaults, options || {});
        this.id = uniqueId();
        this.manager = null; // default is enable true

        this.options.enable = ifUndefined(this.options.enable, true);
        this.state = STATE_POSSIBLE;
        this.simultaneous = {};
        this.requireFail = [];
      }

      Recognizer.prototype = {
        /**
         * @virtual
         * @type {Object}
         */
        defaults: {},

        /**
         * set options
         * @param {Object} options
         * @return {Recognizer}
         */
        set: function set(options) {
          assign(this.options, options); // also update the touchAction, in case something changed about the directions/enabled state

          this.manager && this.manager.touchAction.update();
          return this;
        },

        /**
         * recognize simultaneous with an other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        recognizeWith: function recognizeWith(otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
          }

          var simultaneous = this.simultaneous;
          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);

          if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
          }

          return this;
        },

        /**
         * drop the simultaneous link. it doesnt remove the link on the other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        dropRecognizeWith: function dropRecognizeWith(otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
          }

          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
          delete this.simultaneous[otherRecognizer.id];
          return this;
        },

        /**
         * recognizer can only run when an other is failing
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        requireFailure: function requireFailure(otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
          }

          var requireFail = this.requireFail;
          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);

          if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
          }

          return this;
        },

        /**
         * drop the requireFailure link. it does not remove the link on the other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        dropRequireFailure: function dropRequireFailure(otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
          }

          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
          var index = inArray(this.requireFail, otherRecognizer);

          if (index > -1) {
            this.requireFail.splice(index, 1);
          }

          return this;
        },

        /**
         * has require failures boolean
         * @returns {boolean}
         */
        hasRequireFailures: function hasRequireFailures() {
          return this.requireFail.length > 0;
        },

        /**
         * if the recognizer can recognize simultaneous with an other recognizer
         * @param {Recognizer} otherRecognizer
         * @returns {Boolean}
         */
        canRecognizeWith: function canRecognizeWith(otherRecognizer) {
          return !!this.simultaneous[otherRecognizer.id];
        },

        /**
         * You should use `tryEmit` instead of `emit` directly to check
         * that all the needed recognizers has failed before emitting.
         * @param {Object} input
         */
        emit: function emit(input) {
          var self = this;
          var state = this.state;

          function emit(event) {
            self.manager.emit(event, input);
          } // 'panstart' and 'panmove'


          if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
          }

          emit(self.options.event); // simple 'eventName' events

          if (input.additionalEvent) {
            // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
          } // panend and pancancel


          if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
          }
        },

        /**
         * Check that all the require failure recognizers has failed,
         * if true, it emits a gesture event,
         * otherwise, setup the state to FAILED.
         * @param {Object} input
         */
        tryEmit: function tryEmit(input) {
          if (this.canEmit()) {
            return this.emit(input);
          } // it's failing anyway


          this.state = STATE_FAILED;
        },

        /**
         * can we emit?
         * @returns {boolean}
         */
        canEmit: function canEmit() {
          var i = 0;

          while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
              return false;
            }

            i++;
          }

          return true;
        },

        /**
         * update the recognizer
         * @param {Object} inputData
         */
        recognize: function recognize(inputData) {
          // make a new copy of the inputData
          // so we can change the inputData without messing up the other recognizers
          var inputDataClone = assign({}, inputData); // is is enabled and allow recognizing?

          if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
          } // reset when we've reached the end


          if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
          }

          this.state = this.process(inputDataClone); // the recognizer has recognized a gesture
          // so trigger an event

          if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
          }
        },

        /**
         * return the state of the recognizer
         * the actual recognizing happens in this method
         * @virtual
         * @param {Object} inputData
         * @returns {Const} STATE
         */
        process: function process(inputData) {},
        // jshint ignore:line

        /**
         * return the preferred touch-action
         * @virtual
         * @returns {Array}
         */
        getTouchAction: function getTouchAction() {},

        /**
         * called when the gesture isn't allowed to recognize
         * like when another is being recognized or it is disabled
         * @virtual
         */
        reset: function reset() {}
      };
      /**
       * get a usable string, used as event postfix
       * @param {Const} state
       * @returns {String} state
       */

      function stateStr(state) {
        if (state & STATE_CANCELLED) {
          return 'cancel';
        } else if (state & STATE_ENDED) {
          return 'end';
        } else if (state & STATE_CHANGED) {
          return 'move';
        } else if (state & STATE_BEGAN) {
          return 'start';
        }

        return '';
      }
      /**
       * direction cons to string
       * @param {Const} direction
       * @returns {String}
       */


      function directionStr(direction) {
        if (direction == DIRECTION_DOWN) {
          return 'down';
        } else if (direction == DIRECTION_UP) {
          return 'up';
        } else if (direction == DIRECTION_LEFT) {
          return 'left';
        } else if (direction == DIRECTION_RIGHT) {
          return 'right';
        }

        return '';
      }
      /**
       * get a recognizer by name if it is bound to a manager
       * @param {Recognizer|String} otherRecognizer
       * @param {Recognizer} recognizer
       * @returns {Recognizer}
       */


      function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
        var manager = recognizer.manager;

        if (manager) {
          return manager.get(otherRecognizer);
        }

        return otherRecognizer;
      }
      /**
       * This recognizer is just used as a base for the simple attribute recognizers.
       * @constructor
       * @extends Recognizer
       */


      function AttrRecognizer() {
        Recognizer.apply(this, arguments);
      }

      inherit(AttrRecognizer, Recognizer, {
        /**
         * @namespace
         * @memberof AttrRecognizer
         */
        defaults: {
          /**
           * @type {Number}
           * @default 1
           */
          pointers: 1
        },

        /**
         * Used to check if it the recognizer receives valid input, like input.distance > 10.
         * @memberof AttrRecognizer
         * @param {Object} input
         * @returns {Boolean} recognized
         */
        attrTest: function attrTest(input) {
          var optionPointers = this.options.pointers;
          return optionPointers === 0 || input.pointers.length === optionPointers;
        },

        /**
         * Process the input and return the state for the recognizer
         * @memberof AttrRecognizer
         * @param {Object} input
         * @returns {*} State
         */
        process: function process(input) {
          var state = this.state;
          var eventType = input.eventType;
          var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
          var isValid = this.attrTest(input); // on cancel input and we've recognized before, return STATE_CANCELLED

          if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
          } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
              return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
              return STATE_BEGAN;
            }

            return state | STATE_CHANGED;
          }

          return STATE_FAILED;
        }
      });
      /**
       * Pan
       * Recognized when the pointer is down and moved in the allowed direction.
       * @constructor
       * @extends AttrRecognizer
       */

      function PanRecognizer() {
        AttrRecognizer.apply(this, arguments);
        this.pX = null;
        this.pY = null;
      }

      inherit(PanRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof PanRecognizer
         */
        defaults: {
          event: 'pan',
          threshold: 10,
          pointers: 1,
          direction: DIRECTION_ALL
        },
        getTouchAction: function getTouchAction() {
          var direction = this.options.direction;
          var actions = [];

          if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
          }

          if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
          }

          return actions;
        },
        directionTest: function directionTest(input) {
          var options = this.options;
          var hasMoved = true;
          var distance = input.distance;
          var direction = input.direction;
          var x = input.deltaX;
          var y = input.deltaY; // lock to axis?

          if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
              direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
              hasMoved = x != this.pX;
              distance = Math.abs(input.deltaX);
            } else {
              direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
              hasMoved = y != this.pY;
              distance = Math.abs(input.deltaY);
            }
          }

          input.direction = direction;
          return hasMoved && distance > options.threshold && direction & options.direction;
        },
        attrTest: function attrTest(input) {
          return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
        },
        emit: function emit(input) {
          this.pX = input.deltaX;
          this.pY = input.deltaY;
          var direction = directionStr(input.direction);

          if (direction) {
            input.additionalEvent = this.options.event + direction;
          }

          this._super.emit.call(this, input);
        }
      });
      /**
       * Pinch
       * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
       * @constructor
       * @extends AttrRecognizer
       */

      function PinchRecognizer() {
        AttrRecognizer.apply(this, arguments);
      }

      inherit(PinchRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof PinchRecognizer
         */
        defaults: {
          event: 'pinch',
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function getTouchAction() {
          return [TOUCH_ACTION_NONE];
        },
        attrTest: function attrTest(input) {
          return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
        },
        emit: function emit(input) {
          if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
          }

          this._super.emit.call(this, input);
        }
      });
      /**
       * Press
       * Recognized when the pointer is down for x ms without any movement.
       * @constructor
       * @extends Recognizer
       */

      function PressRecognizer() {
        Recognizer.apply(this, arguments);
        this._timer = null;
        this._input = null;
      }

      inherit(PressRecognizer, Recognizer, {
        /**
         * @namespace
         * @memberof PressRecognizer
         */
        defaults: {
          event: 'press',
          pointers: 1,
          time: 251,
          // minimal time of the pointer to be pressed
          threshold: 9 // a minimal movement is ok, but keep it low

        },
        getTouchAction: function getTouchAction() {
          return [TOUCH_ACTION_AUTO];
        },
        process: function process(input) {
          var options = this.options;
          var validPointers = input.pointers.length === options.pointers;
          var validMovement = input.distance < options.threshold;
          var validTime = input.deltaTime > options.time;
          this._input = input; // we only allow little movement
          // and we've reached an end event, so a tap is possible

          if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) {
            this.reset();
          } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function () {
              this.state = STATE_RECOGNIZED;
              this.tryEmit();
            }, options.time, this);
          } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
          }

          return STATE_FAILED;
        },
        reset: function reset() {
          clearTimeout(this._timer);
        },
        emit: function emit(input) {
          if (this.state !== STATE_RECOGNIZED) {
            return;
          }

          if (input && input.eventType & INPUT_END) {
            this.manager.emit(this.options.event + 'up', input);
          } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
          }
        }
      });
      /**
       * Rotate
       * Recognized when two or more pointer are moving in a circular motion.
       * @constructor
       * @extends AttrRecognizer
       */

      function RotateRecognizer() {
        AttrRecognizer.apply(this, arguments);
      }

      inherit(RotateRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof RotateRecognizer
         */
        defaults: {
          event: 'rotate',
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function getTouchAction() {
          return [TOUCH_ACTION_NONE];
        },
        attrTest: function attrTest(input) {
          return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
        }
      });
      /**
       * Swipe
       * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
       * @constructor
       * @extends AttrRecognizer
       */

      function SwipeRecognizer() {
        AttrRecognizer.apply(this, arguments);
      }

      inherit(SwipeRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof SwipeRecognizer
         */
        defaults: {
          event: 'swipe',
          threshold: 10,
          velocity: 0.3,
          direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
          pointers: 1
        },
        getTouchAction: function getTouchAction() {
          return PanRecognizer.prototype.getTouchAction.call(this);
        },
        attrTest: function attrTest(input) {
          var direction = this.options.direction;
          var velocity;

          if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
          } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
          } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
          }

          return this._super.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers == this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
        },
        emit: function emit(input) {
          var direction = directionStr(input.offsetDirection);

          if (direction) {
            this.manager.emit(this.options.event + direction, input);
          }

          this.manager.emit(this.options.event, input);
        }
      });
      /**
       * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
       * between the given interval and position. The delay option can be used to recognize multi-taps without firing
       * a single tap.
       *
       * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
       * multi-taps being recognized.
       * @constructor
       * @extends Recognizer
       */

      function TapRecognizer() {
        Recognizer.apply(this, arguments); // previous time and center,
        // used for tap counting

        this.pTime = false;
        this.pCenter = false;
        this._timer = null;
        this._input = null;
        this.count = 0;
      }

      inherit(TapRecognizer, Recognizer, {
        /**
         * @namespace
         * @memberof PinchRecognizer
         */
        defaults: {
          event: 'tap',
          pointers: 1,
          taps: 1,
          interval: 300,
          // max time between the multi-tap taps
          time: 250,
          // max time of the pointer to be down (like finger on the screen)
          threshold: 9,
          // a minimal movement is ok, but keep it low
          posThreshold: 10 // a multi-tap can be a bit off the initial position

        },
        getTouchAction: function getTouchAction() {
          return [TOUCH_ACTION_MANIPULATION];
        },
        process: function process(input) {
          var options = this.options;
          var validPointers = input.pointers.length === options.pointers;
          var validMovement = input.distance < options.threshold;
          var validTouchTime = input.deltaTime < options.time;
          this.reset();

          if (input.eventType & INPUT_START && this.count === 0) {
            return this.failTimeout();
          } // we only allow little movement
          // and we've reached an end event, so a tap is possible


          if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
              return this.failTimeout();
            }

            var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
              this.count = 1;
            } else {
              this.count += 1;
            }

            this._input = input; // if tap count matches we have recognized it,
            // else it has began recognizing...

            var tapCount = this.count % options.taps;

            if (tapCount === 0) {
              // no failing requirements, immediately trigger the tap event
              // or wait as long as the multitap interval to trigger
              if (!this.hasRequireFailures()) {
                return STATE_RECOGNIZED;
              } else {
                this._timer = setTimeoutContext(function () {
                  this.state = STATE_RECOGNIZED;
                  this.tryEmit();
                }, options.interval, this);
                return STATE_BEGAN;
              }
            }
          }

          return STATE_FAILED;
        },
        failTimeout: function failTimeout() {
          this._timer = setTimeoutContext(function () {
            this.state = STATE_FAILED;
          }, this.options.interval, this);
          return STATE_FAILED;
        },
        reset: function reset() {
          clearTimeout(this._timer);
        },
        emit: function emit() {
          if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
          }
        }
      });
      /**
       * Simple way to create a manager with a default set of recognizers.
       * @param {HTMLElement} element
       * @param {Object} [options]
       * @constructor
       */

      function Hammer(element, options) {
        options = options || {};
        options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
        return new Manager(element, options);
      }
      /**
       * @const {string}
       */


      Hammer.VERSION = '2.0.7';
      /**
       * default settings
       * @namespace
       */

      Hammer.defaults = {
        /**
         * set if DOM events are being triggered.
         * But this is slower and unused by simple implementations, so disabled by default.
         * @type {Boolean}
         * @default false
         */
        domEvents: false,

        /**
         * The value for the touchAction property/fallback.
         * When set to `compute` it will magically set the correct value based on the added recognizers.
         * @type {String}
         * @default compute
         */
        touchAction: TOUCH_ACTION_COMPUTE,

        /**
         * @type {Boolean}
         * @default true
         */
        enable: true,

        /**
         * EXPERIMENTAL FEATURE -- can be removed/changed
         * Change the parent input target element.
         * If Null, then it is being set the to main element.
         * @type {Null|EventTarget}
         * @default null
         */
        inputTarget: null,

        /**
         * force an input class
         * @type {Null|Function}
         * @default null
         */
        inputClass: null,

        /**
         * Default recognizer setup when calling `Hammer()`
         * When creating a new Manager these will be skipped.
         * @type {Array}
         */
        preset: [// RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {
          enable: false
        }], [PinchRecognizer, {
          enable: false
        }, ['rotate']], [SwipeRecognizer, {
          direction: DIRECTION_HORIZONTAL
        }], [PanRecognizer, {
          direction: DIRECTION_HORIZONTAL
        }, ['swipe']], [TapRecognizer], [TapRecognizer, {
          event: 'doubletap',
          taps: 2
        }, ['tap']], [PressRecognizer]],

        /**
         * Some CSS properties can be used to improve the working of Hammer.
         * Add them to this method and they will be set when creating a new Manager.
         * @namespace
         */
        cssProps: {
          /**
           * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
           * @type {String}
           * @default 'none'
           */
          userSelect: 'none',

          /**
           * Disable the Windows Phone grippers when pressing an element.
           * @type {String}
           * @default 'none'
           */
          touchSelect: 'none',

          /**
           * Disables the default callout shown when you touch and hold a touch target.
           * On iOS, when you touch and hold a touch target such as a link, Safari displays
           * a callout containing information about the link. This property allows you to disable that callout.
           * @type {String}
           * @default 'none'
           */
          touchCallout: 'none',

          /**
           * Specifies whether zooming is enabled. Used by IE10>
           * @type {String}
           * @default 'none'
           */
          contentZooming: 'none',

          /**
           * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
           * @type {String}
           * @default 'none'
           */
          userDrag: 'none',

          /**
           * Overrides the highlight color shown when the user taps a link or a JavaScript
           * clickable element in iOS. This property obeys the alpha value, if specified.
           * @type {String}
           * @default 'rgba(0,0,0,0)'
           */
          tapHighlightColor: 'rgba(0,0,0,0)'
        }
      };
      var STOP = 1;
      var FORCED_STOP = 2;
      /**
       * Manager
       * @param {HTMLElement} element
       * @param {Object} [options]
       * @constructor
       */

      function Manager(element, options) {
        this.options = assign({}, Hammer.defaults, options || {});
        this.options.inputTarget = this.options.inputTarget || element;
        this.handlers = {};
        this.session = {};
        this.recognizers = [];
        this.oldCssProps = {};
        this.element = element;
        this.input = createInputInstance(this);
        this.touchAction = new TouchAction(this, this.options.touchAction);
        toggleCssProps(this, true);
        each(this.options.recognizers, function (item) {
          var recognizer = this.add(new item[0](item[1]));
          item[2] && recognizer.recognizeWith(item[2]);
          item[3] && recognizer.requireFailure(item[3]);
        }, this);
      }

      Manager.prototype = {
        /**
         * set options
         * @param {Object} options
         * @returns {Manager}
         */
        set: function set(options) {
          assign(this.options, options); // Options that need a little more setup

          if (options.touchAction) {
            this.touchAction.update();
          }

          if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
          }

          return this;
        },

        /**
         * stop recognizing for this session.
         * This session will be discarded, when a new [input]start event is fired.
         * When forced, the recognizer cycle is stopped immediately.
         * @param {Boolean} [force]
         */
        stop: function stop(force) {
          this.session.stopped = force ? FORCED_STOP : STOP;
        },

        /**
         * run the recognizers!
         * called by the inputHandler function on every movement of the pointers (touches)
         * it walks through all the recognizers and tries to detect the gesture that is being made
         * @param {Object} inputData
         */
        recognize: function recognize(inputData) {
          var session = this.session;

          if (session.stopped) {
            return;
          } // run the touch-action polyfill


          this.touchAction.preventDefaults(inputData);
          var recognizer;
          var recognizers = this.recognizers; // this holds the recognizer that is being recognized.
          // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
          // if no recognizer is detecting a thing, it is set to `null`

          var curRecognizer = session.curRecognizer; // reset when the last recognizer is recognized
          // or when we're in a new session

          if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
            curRecognizer = session.curRecognizer = null;
          }

          var i = 0;

          while (i < recognizers.length) {
            recognizer = recognizers[i]; // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.

            if (session.stopped !== FORCED_STOP && ( // 1
            !curRecognizer || recognizer == curRecognizer || // 2
            recognizer.canRecognizeWith(curRecognizer))) {
              // 3
              recognizer.recognize(inputData);
            } else {
              recognizer.reset();
            } // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer


            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
              curRecognizer = session.curRecognizer = recognizer;
            }

            i++;
          }
        },

        /**
         * get a recognizer by its event name.
         * @param {Recognizer|String} recognizer
         * @returns {Recognizer|Null}
         */
        get: function get(recognizer) {
          if (recognizer instanceof Recognizer) {
            return recognizer;
          }

          var recognizers = this.recognizers;

          for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
              return recognizers[i];
            }
          }

          return null;
        },

        /**
         * add a recognizer to the manager
         * existing recognizers with the same event name will be removed
         * @param {Recognizer} recognizer
         * @returns {Recognizer|Manager}
         */
        add: function add(recognizer) {
          if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
          } // remove existing


          var existing = this.get(recognizer.options.event);

          if (existing) {
            this.remove(existing);
          }

          this.recognizers.push(recognizer);
          recognizer.manager = this;
          this.touchAction.update();
          return recognizer;
        },

        /**
         * remove a recognizer by name or instance
         * @param {Recognizer|String} recognizer
         * @returns {Manager}
         */
        remove: function remove(recognizer) {
          if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
          }

          recognizer = this.get(recognizer); // let's make sure this recognizer exists

          if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
              recognizers.splice(index, 1);
              this.touchAction.update();
            }
          }

          return this;
        },

        /**
         * bind event
         * @param {String} events
         * @param {Function} handler
         * @returns {EventEmitter} this
         */
        on: function on(events, handler) {
          if (events === undefined) {
            return;
          }

          if (handler === undefined) {
            return;
          }

          var handlers = this.handlers;
          each(splitStr(events), function (event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
          });
          return this;
        },

        /**
         * unbind event, leave emit blank to remove all handlers
         * @param {String} events
         * @param {Function} [handler]
         * @returns {EventEmitter} this
         */
        off: function off(events, handler) {
          if (events === undefined) {
            return;
          }

          var handlers = this.handlers;
          each(splitStr(events), function (event) {
            if (!handler) {
              delete handlers[event];
            } else {
              handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
          });
          return this;
        },

        /**
         * emit event to the listeners
         * @param {String} event
         * @param {Object} data
         */
        emit: function emit(event, data) {
          // we also want to trigger dom events
          if (this.options.domEvents) {
            triggerDomEvent(event, data);
          } // no handlers, so skip it all


          var handlers = this.handlers[event] && this.handlers[event].slice();

          if (!handlers || !handlers.length) {
            return;
          }

          data.type = event;

          data.preventDefault = function () {
            data.srcEvent.preventDefault();
          };

          var i = 0;

          while (i < handlers.length) {
            handlers[i](data);
            i++;
          }
        },

        /**
         * destroy the manager and unbinds all events
         * it doesn't unbind dom events, that is the user own responsibility
         */
        destroy: function destroy() {
          this.element && toggleCssProps(this, false);
          this.handlers = {};
          this.session = {};
          this.input.destroy();
          this.element = null;
        }
      };
      /**
       * add/remove the css properties as defined in manager.options.cssProps
       * @param {Manager} manager
       * @param {Boolean} add
       */

      function toggleCssProps(manager, add) {
        var element = manager.element;

        if (!element.style) {
          return;
        }

        var prop;
        each(manager.options.cssProps, function (value, name) {
          prop = prefixed(element.style, name);

          if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
          } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
          }
        });

        if (!add) {
          manager.oldCssProps = {};
        }
      }
      /**
       * trigger dom event
       * @param {String} event
       * @param {Object} data
       */


      function triggerDomEvent(event, data) {
        var gestureEvent = document.createEvent('Event');
        gestureEvent.initEvent(event, true, true);
        gestureEvent.gesture = data;
        data.target.dispatchEvent(gestureEvent);
      }

      assign(Hammer, {
        INPUT_START: INPUT_START,
        INPUT_MOVE: INPUT_MOVE,
        INPUT_END: INPUT_END,
        INPUT_CANCEL: INPUT_CANCEL,
        STATE_POSSIBLE: STATE_POSSIBLE,
        STATE_BEGAN: STATE_BEGAN,
        STATE_CHANGED: STATE_CHANGED,
        STATE_ENDED: STATE_ENDED,
        STATE_RECOGNIZED: STATE_RECOGNIZED,
        STATE_CANCELLED: STATE_CANCELLED,
        STATE_FAILED: STATE_FAILED,
        DIRECTION_NONE: DIRECTION_NONE,
        DIRECTION_LEFT: DIRECTION_LEFT,
        DIRECTION_RIGHT: DIRECTION_RIGHT,
        DIRECTION_UP: DIRECTION_UP,
        DIRECTION_DOWN: DIRECTION_DOWN,
        DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
        DIRECTION_VERTICAL: DIRECTION_VERTICAL,
        DIRECTION_ALL: DIRECTION_ALL,
        Manager: Manager,
        Input: Input,
        TouchAction: TouchAction,
        TouchInput: TouchInput,
        MouseInput: MouseInput,
        PointerEventInput: PointerEventInput,
        TouchMouseInput: TouchMouseInput,
        SingleTouchInput: SingleTouchInput,
        Recognizer: Recognizer,
        AttrRecognizer: AttrRecognizer,
        Tap: TapRecognizer,
        Pan: PanRecognizer,
        Swipe: SwipeRecognizer,
        Pinch: PinchRecognizer,
        Rotate: RotateRecognizer,
        Press: PressRecognizer,
        on: addEventListeners,
        off: removeEventListeners,
        each: each,
        merge: merge,
        extend: extend,
        assign: assign,
        inherit: inherit,
        bindFn: bindFn,
        prefixed: prefixed
      }); // this prevents errors when Hammer is loaded in the presence of an AMD
      //  style loader but by script tag, not by the loader.

      var freeGlobal = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {}; // jshint ignore:line

      freeGlobal.Hammer = Hammer;

      if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return Hammer;
        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      } else {}
    })(window, document, 'Hammer');
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<block-ui>\r\n    <router-outlet></router-outlet>\r\n</block-ui>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #drawer class=\"sidenav\" hasBackdrop=\"true\" mode=\"over\">\r\n    <mat-toolbar>Меню</mat-toolbar>\r\n    <mat-nav-list>\r\n      <a mat-list-item href=\"#\">Начать заказ</a>\r\n      <a mat-list-item href=\"#\">История заказов</a>\r\n      <a mat-list-item href=\"#\">Администрирование</a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content hasBackdrop=\"true\">\r\n    <mat-toolbar color=\"primary\">\r\n      <button type=\"button\" mat-icon-button (click)=\"drawer.toggle()\">\r\n        <mat-icon>menu</mat-icon>\r\n      </button>\r\n      <button mat-raised-button color=\"warn\" (click)=\"onLogout()\" style=\"position: absolute; right: 0; margin-right: 15px;\">Выйти</button >\r\n    </mat-toolbar>\r\n    <div class=\"card m-5\" style=\"width:18rem\" *ngIf=\"userDetails\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item\"><strong>ФИО : </strong>{{userDetails.userName}}</li>\r\n        <li class=\"list-group-item\"><strong>Логин : </strong>{{userDetails.login}}</li>\r\n        <li class=\"list-group-item\"><strong>Роль : </strong>{{userDetails.roleName}}</li>\r\n      </ul>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form #form='ngForm' class=\"mb-4\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>Авторизация</mat-card-title>\r\n    </mat-card-header>\r\n      <mat-form-field hintLabel=\"От 6 до 20 символов\">\r\n        <mat-icon matPrefix>account_circle</mat-icon>\r\n        <input matInput minlength=6 maxlength=20 placeholder=\"Введите логин:\" #UserName=\"ngModel\" name=\"UserName\" [(ngModel)]=\"formModel.UserName\" required>     \r\n        <mat-hint align=\"end\">{{UserName.value?.length || 0}}/20</mat-hint>\r\n      </mat-form-field>\r\n      <mat-form-field hintLabel=\"От 6 до 20 символов\">\r\n        <mat-icon matPrefix>vpn_key</mat-icon>\r\n        <input matInput minlength=6 maxlength=20 placeholder=\"Введите пароль:\" #Password=\"ngModel\" name=\"Password\" [(ngModel)]=\"formModel.Password\" required type=\"password\">\r\n        <mat-hint align=\"end\">{{Password.value?.length || 0}}/20</mat-hint>\r\n      </mat-form-field>\r\n      <button type=\"submit\" [disabled]=\"form.invalid\" mat-raised-button color=\"primary\">Войти</button>\r\n  </mat-card>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./node_modules/zone.js/dist/zone-evergreen.js":
  /*!*****************************************************!*\
    !*** ./node_modules/zone.js/dist/zone-evergreen.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesZoneJsDistZoneEvergreenJs(module, exports) {
    /**
    * @license
    * Copyright Google Inc. All Rights Reserved.
    *
    * Use of this source code is governed by an MIT-style license that can be
    * found in the LICENSE file at https://angular.io/license
    */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var Zone$1 = function (global) {
      var performance = global['performance'];

      function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
      }

      function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
      }

      mark('Zone');
      var checkDuplicate = global['__zone_symbol__forceDuplicateZoneCheck'] === true;

      if (global['Zone']) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
          throw new Error('Zone already loaded.');
        } else {
          return global['Zone'];
        }
      }

      var Zone =
      /*#__PURE__*/
      function () {
        function Zone(parent, zoneSpec) {
          _classCallCheck(this, Zone);

          this._parent = parent;
          this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
          this._properties = zoneSpec && zoneSpec.properties || {};
          this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }

        _createClass(Zone, [{
          key: "get",
          value: function get(key) {
            var zone = this.getZoneWith(key);
            if (zone) return zone._properties[key];
          }
        }, {
          key: "getZoneWith",
          value: function getZoneWith(key) {
            var current = this;

            while (current) {
              if (current._properties.hasOwnProperty(key)) {
                return current;
              }

              current = current._parent;
            }

            return null;
          }
        }, {
          key: "fork",
          value: function fork(zoneSpec) {
            if (!zoneSpec) throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
          }
        }, {
          key: "wrap",
          value: function wrap(callback, source) {
            if (typeof callback !== 'function') {
              throw new Error('Expecting function got: ' + callback);
            }

            var _callback = this._zoneDelegate.intercept(this, callback, source);

            var zone = this;
            return function () {
              return zone.runGuarded(_callback, this, arguments, source);
            };
          }
        }, {
          key: "run",
          value: function run(callback, applyThis, applyArgs, source) {
            _currentZoneFrame = {
              parent: _currentZoneFrame,
              zone: this
            };

            try {
              return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            } finally {
              _currentZoneFrame = _currentZoneFrame.parent;
            }
          }
        }, {
          key: "runGuarded",
          value: function runGuarded(callback) {
            var applyThis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var applyArgs = arguments.length > 2 ? arguments[2] : undefined;
            var source = arguments.length > 3 ? arguments[3] : undefined;
            _currentZoneFrame = {
              parent: _currentZoneFrame,
              zone: this
            };

            try {
              try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
              } catch (error) {
                if (this._zoneDelegate.handleError(this, error)) {
                  throw error;
                }
              }
            } finally {
              _currentZoneFrame = _currentZoneFrame.parent;
            }
          }
        }, {
          key: "runTask",
          value: function runTask(task, applyThis, applyArgs) {
            if (task.zone != this) {
              throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            } // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return


            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
              return;
            }

            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = {
              parent: _currentZoneFrame,
              zone: this
            };

            try {
              if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                task.cancelFn = undefined;
              }

              try {
                return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
              } catch (error) {
                if (this._zoneDelegate.handleError(this, error)) {
                  throw error;
                }
              }
            } finally {
              // if the task's state is notScheduled or unknown, then it has already been cancelled
              // we should not reset the state to scheduled
              if (task.state !== notScheduled && task.state !== unknown) {
                if (task.type == eventTask || task.data && task.data.isPeriodic) {
                  reEntryGuard && task._transitionTo(scheduled, running);
                } else {
                  task.runCount = 0;

                  this._updateTaskCount(task, -1);

                  reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
                }
              }

              _currentZoneFrame = _currentZoneFrame.parent;
              _currentTask = previousTask;
            }
          }
        }, {
          key: "scheduleTask",
          value: function scheduleTask(task) {
            if (task.zone && task.zone !== this) {
              // check if the task was rescheduled, the newZone
              // should not be the children of the original zone
              var newZone = this;

              while (newZone) {
                if (newZone === task.zone) {
                  throw Error("can not reschedule task to ".concat(this.name, " which is descendants of the original zone ").concat(task.zone.name));
                }

                newZone = newZone.parent;
              }
            }

            task._transitionTo(scheduling, notScheduled);

            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;

            try {
              task = this._zoneDelegate.scheduleTask(this, task);
            } catch (err) {
              // should set task's state to unknown when scheduleTask throw error
              // because the err may from reschedule, so the fromState maybe notScheduled
              task._transitionTo(unknown, scheduling, notScheduled); // TODO: @JiaLiPassion, should we check the result from handleError?


              this._zoneDelegate.handleError(this, err);

              throw err;
            }

            if (task._zoneDelegates === zoneDelegates) {
              // we have to check because internally the delegate can reschedule the task.
              this._updateTaskCount(task, 1);
            }

            if (task.state == scheduling) {
              task._transitionTo(scheduled, scheduling);
            }

            return task;
          }
        }, {
          key: "scheduleMicroTask",
          value: function scheduleMicroTask(source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
          }
        }, {
          key: "scheduleMacroTask",
          value: function scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
          }
        }, {
          key: "scheduleEventTask",
          value: function scheduleEventTask(source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
          }
        }, {
          key: "cancelTask",
          value: function cancelTask(task) {
            if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');

            task._transitionTo(canceling, scheduled, running);

            try {
              this._zoneDelegate.cancelTask(this, task);
            } catch (err) {
              // if error occurs when cancelTask, transit the state to unknown
              task._transitionTo(unknown, canceling);

              this._zoneDelegate.handleError(this, err);

              throw err;
            }

            this._updateTaskCount(task, -1);

            task._transitionTo(notScheduled, canceling);

            task.runCount = 0;
            return task;
          }
        }, {
          key: "_updateTaskCount",
          value: function _updateTaskCount(task, count) {
            var zoneDelegates = task._zoneDelegates;

            if (count == -1) {
              task._zoneDelegates = null;
            }

            for (var i = 0; i < zoneDelegates.length; i++) {
              zoneDelegates[i]._updateTaskCount(task.type, count);
            }
          }
        }, {
          key: "parent",
          get: function get() {
            return this._parent;
          }
        }, {
          key: "name",
          get: function get() {
            return this._name;
          }
        }], [{
          key: "assertZonePatched",
          value: function assertZonePatched() {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
              throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
            }
          }
        }, {
          key: "__load_patch",
          value: function __load_patch(name, fn) {
            if (patches.hasOwnProperty(name)) {
              if (checkDuplicate) {
                throw Error('Already loaded patch: ' + name);
              }
            } else if (!global['__Zone_disable_' + name]) {
              var perfName = 'Zone:' + name;
              mark(perfName);
              patches[name] = fn(global, Zone, _api);
              performanceMeasure(perfName, perfName);
            }
          }
        }, {
          key: "root",
          get: function get() {
            var zone = Zone.current;

            while (zone.parent) {
              zone = zone.parent;
            }

            return zone;
          }
        }, {
          key: "current",
          get: function get() {
            return _currentZoneFrame.zone;
          }
        }, {
          key: "currentTask",
          get: function get() {
            return _currentTask;
          }
        }]);

        return Zone;
      }();

      Zone.__symbol__ = __symbol__;
      var DELEGATE_ZS = {
        name: '',
        onHasTask: function onHasTask(delegate, _, target, hasTaskState) {
          return delegate.hasTask(target, hasTaskState);
        },
        onScheduleTask: function onScheduleTask(delegate, _, target, task) {
          return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function onInvokeTask(delegate, _, target, task, applyThis, applyArgs) {
          return delegate.invokeTask(target, task, applyThis, applyArgs);
        },
        onCancelTask: function onCancelTask(delegate, _, target, task) {
          return delegate.cancelTask(target, task);
        }
      };

      var ZoneDelegate =
      /*#__PURE__*/
      function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
          _classCallCheck(this, ZoneDelegate);

          this._taskCounts = {
            'microTask': 0,
            'macroTask': 0,
            'eventTask': 0
          };
          this.zone = zone;
          this._parentDelegate = parentDelegate;
          this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
          this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
          this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
          this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
          this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
          this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
          this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
          this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
          this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
          this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
          this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
          this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
          this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
          this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
          this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
          this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
          this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
          this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
          this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
          this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
          this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
          this._hasTaskZS = null;
          this._hasTaskDlgt = null;
          this._hasTaskDlgtOwner = null;
          this._hasTaskCurrZone = null;
          var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
          var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;

          if (zoneSpecHasTask || parentHasTask) {
            // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
            // a case all task related interceptors must go through this ZD. We can't short circuit it.
            this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
            this._hasTaskDlgt = parentDelegate;
            this._hasTaskDlgtOwner = this;
            this._hasTaskCurrZone = zone;

            if (!zoneSpec.onScheduleTask) {
              this._scheduleTaskZS = DELEGATE_ZS;
              this._scheduleTaskDlgt = parentDelegate;
              this._scheduleTaskCurrZone = this.zone;
            }

            if (!zoneSpec.onInvokeTask) {
              this._invokeTaskZS = DELEGATE_ZS;
              this._invokeTaskDlgt = parentDelegate;
              this._invokeTaskCurrZone = this.zone;
            }

            if (!zoneSpec.onCancelTask) {
              this._cancelTaskZS = DELEGATE_ZS;
              this._cancelTaskDlgt = parentDelegate;
              this._cancelTaskCurrZone = this.zone;
            }
          }
        }

        _createClass(ZoneDelegate, [{
          key: "fork",
          value: function fork(targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
          }
        }, {
          key: "intercept",
          value: function intercept(targetZone, callback, source) {
            return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
          }
        }, {
          key: "invoke",
          value: function invoke(targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
          }
        }, {
          key: "handleError",
          value: function handleError(targetZone, error) {
            return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
          }
        }, {
          key: "scheduleTask",
          value: function scheduleTask(targetZone, task) {
            var returnTask = task;

            if (this._scheduleTaskZS) {
              if (this._hasTaskZS) {
                returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
              }

              returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
              if (!returnTask) returnTask = task;
            } else {
              if (task.scheduleFn) {
                task.scheduleFn(task);
              } else if (task.type == microTask) {
                scheduleMicroTask(task);
              } else {
                throw new Error('Task is missing scheduleFn.');
              }
            }

            return returnTask;
          }
        }, {
          key: "invokeTask",
          value: function invokeTask(targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
          }
        }, {
          key: "cancelTask",
          value: function cancelTask(targetZone, task) {
            var value;

            if (this._cancelTaskZS) {
              value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            } else {
              if (!task.cancelFn) {
                throw Error('Task is not cancelable');
              }

              value = task.cancelFn(task);
            }

            return value;
          }
        }, {
          key: "hasTask",
          value: function hasTask(targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
              this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            } catch (err) {
              this.handleError(targetZone, err);
            }
          }
        }, {
          key: "_updateTaskCount",
          value: function _updateTaskCount(type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;

            if (next < 0) {
              throw new Error('More tasks executed then were scheduled.');
            }

            if (prev == 0 || next == 0) {
              var isEmpty = {
                microTask: counts['microTask'] > 0,
                macroTask: counts['macroTask'] > 0,
                eventTask: counts['eventTask'] > 0,
                change: type
              };
              this.hasTask(this.zone, isEmpty);
            }
          }
        }]);

        return ZoneDelegate;
      }();

      var ZoneTask =
      /*#__PURE__*/
      function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
          _classCallCheck(this, ZoneTask);

          this._zone = null;
          this.runCount = 0;
          this._zoneDelegates = null;
          this._state = 'notScheduled';
          this.type = type;
          this.source = source;
          this.data = options;
          this.scheduleFn = scheduleFn;
          this.cancelFn = cancelFn;
          this.callback = callback;
          var self = this; // TODO: @JiaLiPassion options should have interface

          if (type === eventTask && options && options.useG) {
            this.invoke = ZoneTask.invokeTask;
          } else {
            this.invoke = function () {
              return ZoneTask.invokeTask.call(global, self, this, arguments);
            };
          }
        }

        _createClass(ZoneTask, [{
          key: "cancelScheduleRequest",
          value: function cancelScheduleRequest() {
            this._transitionTo(notScheduled, scheduling);
          }
        }, {
          key: "_transitionTo",
          value: function _transitionTo(toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
              this._state = toState;

              if (toState == notScheduled) {
                this._zoneDelegates = null;
              }
            } else {
              throw new Error("".concat(this.type, " '").concat(this.source, "': can not transition to '").concat(toState, "', expecting state '").concat(fromState1, "'").concat(fromState2 ? ' or \'' + fromState2 + '\'' : '', ", was '").concat(this._state, "'."));
            }
          }
        }, {
          key: "toString",
          value: function toString() {
            if (this.data && typeof this.data.handleId !== 'undefined') {
              return this.data.handleId.toString();
            } else {
              return Object.prototype.toString.call(this);
            }
          } // add toJSON method to prevent cyclic error when
          // call JSON.stringify(zoneTask)

        }, {
          key: "toJSON",
          value: function toJSON() {
            return {
              type: this.type,
              state: this.state,
              source: this.source,
              zone: this.zone.name,
              runCount: this.runCount
            };
          }
        }, {
          key: "zone",
          get: function get() {
            return this._zone;
          }
        }, {
          key: "state",
          get: function get() {
            return this._state;
          }
        }], [{
          key: "invokeTask",
          value: function invokeTask(task, target, args) {
            if (!task) {
              task = this;
            }

            _numberOfNestedTaskFrames++;

            try {
              task.runCount++;
              return task.zone.runTask(task, target, args);
            } finally {
              if (_numberOfNestedTaskFrames == 1) {
                drainMicroTaskQueue();
              }

              _numberOfNestedTaskFrames--;
            }
          }
        }]);

        return ZoneTask;
      }(); //////////////////////////////////////////////////////
      //////////////////////////////////////////////////////
      ///  MICROTASK QUEUE
      //////////////////////////////////////////////////////
      //////////////////////////////////////////////////////


      var symbolSetTimeout = __symbol__('setTimeout');

      var symbolPromise = __symbol__('Promise');

      var symbolThen = __symbol__('then');

      var _microTaskQueue = [];
      var _isDrainingMicrotaskQueue = false;
      var nativeMicroTaskQueuePromise;

      function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
          // We are not running in Task, so we need to kickstart the microtask queue.
          if (!nativeMicroTaskQueuePromise) {
            if (global[symbolPromise]) {
              nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
            }
          }

          if (nativeMicroTaskQueuePromise) {
            var nativeThen = nativeMicroTaskQueuePromise[symbolThen];

            if (!nativeThen) {
              // native Promise is not patchable, we need to use `then` directly
              // issue 1078
              nativeThen = nativeMicroTaskQueuePromise['then'];
            }

            nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
          } else {
            global[symbolSetTimeout](drainMicroTaskQueue, 0);
          }
        }

        task && _microTaskQueue.push(task);
      }

      function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
          _isDrainingMicrotaskQueue = true;

          while (_microTaskQueue.length) {
            var queue = _microTaskQueue;
            _microTaskQueue = [];

            for (var i = 0; i < queue.length; i++) {
              var task = queue[i];

              try {
                task.zone.runTask(task, null, null);
              } catch (error) {
                _api.onUnhandledError(error);
              }
            }
          }

          _api.microtaskDrainDone();

          _isDrainingMicrotaskQueue = false;
        }
      } //////////////////////////////////////////////////////
      //////////////////////////////////////////////////////
      ///  BOOTSTRAP
      //////////////////////////////////////////////////////
      //////////////////////////////////////////////////////


      var NO_ZONE = {
        name: 'NO ZONE'
      };
      var notScheduled = 'notScheduled',
          scheduling = 'scheduling',
          scheduled = 'scheduled',
          running = 'running',
          canceling = 'canceling',
          unknown = 'unknown';
      var microTask = 'microTask',
          macroTask = 'macroTask',
          eventTask = 'eventTask';
      var patches = {};
      var _api = {
        symbol: __symbol__,
        currentZoneFrame: function currentZoneFrame() {
          return _currentZoneFrame;
        },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function showUncaughtError() {
          return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
        },
        patchEventTarget: function patchEventTarget() {
          return [];
        },
        patchOnProperties: noop,
        patchMethod: function patchMethod() {
          return noop;
        },
        bindArguments: function bindArguments() {
          return [];
        },
        patchThen: function patchThen() {
          return noop;
        },
        patchMacroTask: function patchMacroTask() {
          return noop;
        },
        setNativePromise: function setNativePromise(NativePromise) {
          // sometimes NativePromise.resolve static function
          // is not ready yet, (such as core-js/es6.promise)
          // so we need to check here.
          if (NativePromise && typeof NativePromise.resolve === 'function') {
            nativeMicroTaskQueuePromise = NativePromise.resolve(0);
          }
        },
        patchEventPrototype: function patchEventPrototype() {
          return noop;
        },
        isIEOrEdge: function isIEOrEdge() {
          return false;
        },
        getGlobalObjects: function getGlobalObjects() {
          return undefined;
        },
        ObjectDefineProperty: function ObjectDefineProperty() {
          return noop;
        },
        ObjectGetOwnPropertyDescriptor: function ObjectGetOwnPropertyDescriptor() {
          return undefined;
        },
        ObjectCreate: function ObjectCreate() {
          return undefined;
        },
        ArraySlice: function ArraySlice() {
          return [];
        },
        patchClass: function patchClass() {
          return noop;
        },
        wrapWithCurrentZone: function wrapWithCurrentZone() {
          return noop;
        },
        filterProperties: function filterProperties() {
          return [];
        },
        attachOriginToPatched: function attachOriginToPatched() {
          return noop;
        },
        _redefineProperty: function _redefineProperty() {
          return noop;
        },
        patchCallbacks: function patchCallbacks() {
          return noop;
        }
      };
      var _currentZoneFrame = {
        parent: null,
        zone: new Zone(null, null)
      };
      var _currentTask = null;
      var _numberOfNestedTaskFrames = 0;

      function noop() {}

      function __symbol__(name) {
        return '__zone_symbol__' + name;
      }

      performanceMeasure('Zone', 'Zone');
      return global['Zone'] = Zone;
    }(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
      var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var ObjectDefineProperty = Object.defineProperty;

      function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
          var className = obj.constructor && obj.constructor.name;
          return (className ? className : '') + ': ' + JSON.stringify(obj);
        }

        return obj ? obj.toString() : Object.prototype.toString.call(obj);
      }

      var __symbol__ = api.symbol;
      var _uncaughtPromiseErrors = [];

      var symbolPromise = __symbol__('Promise');

      var symbolThen = __symbol__('then');

      var creationTrace = '__creationTrace__';

      api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
          var rejection = e && e.rejection;

          if (rejection) {
            console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
          } else {
            console.error(e);
          }
        }
      };

      api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
          var _loop = function _loop() {
            var uncaughtPromiseError = _uncaughtPromiseErrors.shift();

            try {
              uncaughtPromiseError.zone.runGuarded(function () {
                throw uncaughtPromiseError;
              });
            } catch (error) {
              handleUnhandledRejection(error);
            }
          };

          while (_uncaughtPromiseErrors.length) {
            _loop();
          }
        }
      };

      var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');

      function handleUnhandledRejection(e) {
        api.onUnhandledError(e);

        try {
          var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];

          if (handler && typeof handler === 'function') {
            handler.call(this, e);
          }
        } catch (err) {}
      }

      function isThenable(value) {
        return value && value.then;
      }

      function forwardResolution(value) {
        return value;
      }

      function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
      }

      var symbolState = __symbol__('state');

      var symbolValue = __symbol__('value');

      var symbolFinally = __symbol__('finally');

      var symbolParentPromiseValue = __symbol__('parentPromiseValue');

      var symbolParentPromiseState = __symbol__('parentPromiseState');

      var source = 'Promise.then';
      var UNRESOLVED = null;
      var RESOLVED = true;
      var REJECTED = false;
      var REJECTED_NO_CATCH = 0;

      function makeResolver(promise, state) {
        return function (v) {
          try {
            resolvePromise(promise, state, v);
          } catch (err) {
            resolvePromise(promise, false, err);
          } // Do not return value or you will break the Promise spec.

        };
      }

      var once = function once() {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
          return function () {
            if (wasCalled) {
              return;
            }

            wasCalled = true;
            wrappedFunction.apply(null, arguments);
          };
        };
      };

      var TYPE_ERROR = 'Promise resolved with itself';

      var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace'); // Promise Resolution


      function resolvePromise(promise, state, value) {
        var onceWrapper = once();

        if (promise === value) {
          throw new TypeError(TYPE_ERROR);
        }

        if (promise[symbolState] === UNRESOLVED) {
          // should only get value.then once based on promise spec.
          var then = null;

          try {
            if (typeof value === 'object' || typeof value === 'function') {
              then = value && value.then;
            }
          } catch (err) {
            onceWrapper(function () {
              resolvePromise(promise, false, err);
            })();
            return promise;
          } // if (value instanceof ZoneAwarePromise) {


          if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
            clearRejectedNoCatch(value);
            resolvePromise(promise, value[symbolState], value[symbolValue]);
          } else if (state !== REJECTED && typeof then === 'function') {
            try {
              then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
            } catch (err) {
              onceWrapper(function () {
                resolvePromise(promise, false, err);
              })();
            }
          } else {
            promise[symbolState] = state;
            var queue = promise[symbolValue];
            promise[symbolValue] = value;

            if (promise[symbolFinally] === symbolFinally) {
              // the promise is generated by Promise.prototype.finally
              if (state === RESOLVED) {
                // the state is resolved, should ignore the value
                // and use parent promise value
                promise[symbolState] = promise[symbolParentPromiseState];
                promise[symbolValue] = promise[symbolParentPromiseValue];
              }
            } // record task information in value when error occurs, so we can
            // do some additional work such as render longStackTrace


            if (state === REJECTED && value instanceof Error) {
              // check if longStackTraceZone is here
              var trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];

              if (trace) {
                // only keep the long stack trace into error when in longStackTraceZone
                ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                  configurable: true,
                  enumerable: false,
                  writable: true,
                  value: trace
                });
              }
            }

            for (var i = 0; i < queue.length;) {
              scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
            }

            if (queue.length == 0 && state == REJECTED) {
              promise[symbolState] = REJECTED_NO_CATCH;

              try {
                // try to print more readable error log
                throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
              } catch (err) {
                var error = err;
                error.rejection = value;
                error.promise = promise;
                error.zone = Zone.current;
                error.task = Zone.currentTask;

                _uncaughtPromiseErrors.push(error);

                api.scheduleMicroTask(); // to make sure that it is running
              }
            }
          }
        } // Resolving an already resolved promise is a noop.


        return promise;
      }

      var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');

      function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
          // if the promise is rejected no catch status
          // and queue.length > 0, means there is a error handler
          // here to handle the rejected promise, we should trigger
          // windows.rejectionhandled eventHandler or nodejs rejectionHandled
          // eventHandler
          try {
            var handler = Zone[REJECTION_HANDLED_HANDLER];

            if (handler && typeof handler === 'function') {
              handler.call(this, {
                rejection: promise[symbolValue],
                promise: promise
              });
            }
          } catch (err) {}

          promise[symbolState] = REJECTED;

          for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
            if (promise === _uncaughtPromiseErrors[i].promise) {
              _uncaughtPromiseErrors.splice(i, 1);
            }
          }
        }
      }

      function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
          try {
            var parentPromiseValue = promise[symbolValue];
            var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];

            if (isFinallyPromise) {
              // if the promise is generated from finally call, keep parent promise's state and value
              chainPromise[symbolParentPromiseValue] = parentPromiseValue;
              chainPromise[symbolParentPromiseState] = promiseState;
            } // should not pass value to finally callback


            var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
            resolvePromise(chainPromise, true, value);
          } catch (error) {
            // if error occurs, should always return this error
            resolvePromise(chainPromise, false, error);
          }
        }, chainPromise);
      }

      var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';

      var ZoneAwarePromise =
      /*#__PURE__*/
      function () {
        function ZoneAwarePromise(executor) {
          _classCallCheck(this, ZoneAwarePromise);

          var promise = this;

          if (!(promise instanceof ZoneAwarePromise)) {
            throw new Error('Must be an instanceof Promise.');
          }

          promise[symbolState] = UNRESOLVED;
          promise[symbolValue] = []; // queue;

          try {
            executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
          } catch (error) {
            resolvePromise(promise, false, error);
          }
        }

        _createClass(ZoneAwarePromise, [{
          key: "then",
          value: function then(onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;

            if (this[symbolState] == UNRESOLVED) {
              this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            } else {
              scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }

            return chainPromise;
          }
        }, {
          key: "catch",
          value: function _catch(onRejected) {
            return this.then(null, onRejected);
          }
        }, {
          key: "finally",
          value: function _finally(onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;

            if (this[symbolState] == UNRESOLVED) {
              this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            } else {
              scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }

            return chainPromise;
          }
        }, {
          key: Symbol.toStringTag,
          get: function get() {
            return 'Promise';
          }
        }], [{
          key: "toString",
          value: function toString() {
            return ZONE_AWARE_PROMISE_TO_STRING;
          }
        }, {
          key: "resolve",
          value: function resolve(value) {
            return resolvePromise(new this(null), RESOLVED, value);
          }
        }, {
          key: "reject",
          value: function reject(error) {
            return resolvePromise(new this(null), REJECTED, error);
          }
        }, {
          key: "race",
          value: function race(values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
              resolve = res;
              reject = rej;
            });

            function onResolve(value) {
              resolve(value);
            }

            function onReject(error) {
              reject(error);
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var value = _step.value;

                if (!isThenable(value)) {
                  value = this.resolve(value);
                }

                value.then(onResolve, onReject);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            return promise;
          }
        }, {
          key: "all",
          value: function all(values) {
            var _this = this;

            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
              resolve = res;
              reject = rej;
            }); // Start at 2 to prevent prematurely resolving if .then is called immediately.

            var unresolvedCount = 2;
            var valueIndex = 0;
            var resolvedValues = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              var _loop2 = function _loop2() {
                var value = _step2.value;

                if (!isThenable(value)) {
                  value = _this.resolve(value);
                }

                var curValueIndex = valueIndex;
                value.then(function (value) {
                  resolvedValues[curValueIndex] = value;
                  unresolvedCount--;

                  if (unresolvedCount === 0) {
                    resolve(resolvedValues);
                  }
                }, reject);
                unresolvedCount++;
                valueIndex++;
              };

              for (var _iterator2 = values[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                _loop2();
              } // Make the unresolvedCount zero-based again.

            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            unresolvedCount -= 2;

            if (unresolvedCount === 0) {
              resolve(resolvedValues);
            }

            return promise;
          }
        }]);

        return ZoneAwarePromise;
      }(); // Protect against aggressive optimizers dropping seemingly unused properties.
      // E.g. Closure Compiler in advanced mode.


      ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
      ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
      ZoneAwarePromise['race'] = ZoneAwarePromise.race;
      ZoneAwarePromise['all'] = ZoneAwarePromise.all;
      var NativePromise = global[symbolPromise] = global['Promise'];

      var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');

      var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');

      if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;

        if (!desc) {
          desc = {
            configurable: true,
            enumerable: true
          };
        }

        desc.get = function () {
          // if we already set ZoneAwarePromise, use patched one
          // otherwise return native one.
          return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };

        desc.set = function (NewNativePromise) {
          if (NewNativePromise === ZoneAwarePromise) {
            // if the NewNativePromise is ZoneAwarePromise
            // save to global
            global[ZONE_AWARE_PROMISE] = NewNativePromise;
          } else {
            // if the NewNativePromise is not ZoneAwarePromise
            // for example: after load zone.js, some library just
            // set es6-promise to global, if we set it to global
            // directly, assertZonePatched will fail and angular
            // will not loaded, so we just set the NewNativePromise
            // to global[symbolPromise], so the result is just like
            // we load ES6 Promise before zone.js
            global[symbolPromise] = NewNativePromise;

            if (!NewNativePromise.prototype[symbolThen]) {
              patchThen(NewNativePromise);
            }

            api.setNativePromise(NewNativePromise);
          }
        };

        ObjectDefineProperty(global, 'Promise', desc);
      }

      global['Promise'] = ZoneAwarePromise;

      var symbolThenPatched = __symbol__('thenPatched');

      function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');

        if (prop && (prop.writable === false || !prop.configurable)) {
          // check Ctor.prototype.then propertyDescriptor is writable or not
          // in meteor env, writable is false, we should ignore such case
          return;
        }

        var originalThen = proto.then; // Keep a reference to the original method.

        proto[symbolThen] = originalThen;

        Ctor.prototype.then = function (onResolve, onReject) {
          var _this2 = this;

          var wrapped = new ZoneAwarePromise(function (resolve, reject) {
            originalThen.call(_this2, resolve, reject);
          });
          return wrapped.then(onResolve, onReject);
        };

        Ctor[symbolThenPatched] = true;
      }

      api.patchThen = patchThen;

      function zoneify(fn) {
        return function () {
          var resultPromise = fn.apply(this, arguments);

          if (resultPromise instanceof ZoneAwarePromise) {
            return resultPromise;
          }

          var ctor = resultPromise.constructor;

          if (!ctor[symbolThenPatched]) {
            patchThen(ctor);
          }

          return resultPromise;
        };
      }

      if (NativePromise) {
        patchThen(NativePromise);
        var fetch = global['fetch'];

        if (typeof fetch == 'function') {
          global[api.symbol('fetch')] = fetch;
          global['fetch'] = zoneify(fetch);
        }
      } // This is not part of public API, but it is useful for tests, so we expose it.


      Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
      return ZoneAwarePromise;
    });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Suppress closure compiler errors about unknown 'Zone' variable
     * @fileoverview
     * @suppress {undefinedVars,globalThis,missingRequire}
     */
    // issue #989, to reduce bundle size, use short name

    /** Object.getOwnPropertyDescriptor */


    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    /** Object.defineProperty */

    var ObjectDefineProperty = Object.defineProperty;
    /** Object.getPrototypeOf */

    var ObjectGetPrototypeOf = Object.getPrototypeOf;
    /** Object.create */

    var ObjectCreate = Object.create;
    /** Array.prototype.slice */

    var ArraySlice = Array.prototype.slice;
    /** addEventListener string const */

    var ADD_EVENT_LISTENER_STR = 'addEventListener';
    /** removeEventListener string const */

    var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
    /** zoneSymbol addEventListener */

    var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
    /** zoneSymbol removeEventListener */


    var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
    /** true string const */


    var TRUE_STR = 'true';
    /** false string const */

    var FALSE_STR = 'false';
    /** __zone_symbol__ string const */

    var ZONE_SYMBOL_PREFIX = '__zone_symbol__';

    function wrapWithCurrentZone(callback, source) {
      return Zone.current.wrap(callback, source);
    }

    function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
      return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
    }

    var zoneSymbol = Zone.__symbol__;
    var isWindowExists = typeof window !== 'undefined';
    var internalWindow = isWindowExists ? window : undefined;

    var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;

    var REMOVE_ATTRIBUTE = 'removeAttribute';
    var NULL_ON_PROP_VALUE = [null];

    function bindArguments(args, source) {
      for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
          args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
      }

      return args;
    }

    function patchPrototype(prototype, fnNames) {
      var source = prototype.constructor['name'];

      var _loop3 = function _loop3(i) {
        var name = fnNames[i];
        var delegate = prototype[name];

        if (delegate) {
          var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);

          if (!isPropertyWritable(prototypeDesc)) {
            return "continue";
          }

          prototype[name] = function (delegate) {
            var patched = function patched() {
              return delegate.apply(this, bindArguments(arguments, source + '.' + name));
            };

            attachOriginToPatched(patched, delegate);
            return patched;
          }(delegate);
        }
      };

      for (var i = 0; i < fnNames.length; i++) {
        var _ret = _loop3(i);

        if (_ret === "continue") continue;
      }
    }

    function isPropertyWritable(propertyDesc) {
      if (!propertyDesc) {
        return true;
      }

      if (propertyDesc.writable === false) {
        return false;
      }

      return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
    }

    var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope; // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
    // this code.

    var isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
    var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']); // we are in electron of nw, so we are both browser and nodejs
    // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
    // this code.

    var isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
    var zoneSymbolEventNames = {};

    var wrapFn = function wrapFn(event) {
      // https://github.com/angular/zone.js/issues/911, in IE, sometimes
      // event will be undefined, so we need to use window.event
      event = event || _global.event;

      if (!event) {
        return;
      }

      var eventNameSymbol = zoneSymbolEventNames[event.type];

      if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
      }

      var target = this || event.target || _global;
      var listener = target[eventNameSymbol];
      var result;

      if (isBrowser && target === internalWindow && event.type === 'error') {
        // window.onerror have different signiture
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        var errorEvent = event;
        result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);

        if (result === true) {
          event.preventDefault();
        }
      } else {
        result = listener && listener.apply(this, arguments);

        if (result != undefined && !result) {
          event.preventDefault();
        }
      }

      return result;
    };

    function patchProperty(obj, prop, prototype) {
      var desc = ObjectGetOwnPropertyDescriptor(obj, prop);

      if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);

        if (prototypeDesc) {
          desc = {
            enumerable: true,
            configurable: true
          };
        }
      } // if the descriptor not exists or is not configurable
      // just return


      if (!desc || !desc.configurable) {
        return;
      }

      var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');

      if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
        return;
      } // A property descriptor cannot have getter/setter and be writable
      // deleting the writable and value properties avoids this error:
      //
      // TypeError: property descriptors must not specify a value or be writable when a
      // getter or setter has been specified


      delete desc.writable;
      delete desc.value;
      var originalDescGet = desc.get;
      var originalDescSet = desc.set; // substr(2) cuz 'onclick' -> 'click', etc

      var eventName = prop.substr(2);
      var eventNameSymbol = zoneSymbolEventNames[eventName];

      if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
      }

      desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;

        if (!target && obj === _global) {
          target = _global;
        }

        if (!target) {
          return;
        }

        var previousValue = target[eventNameSymbol];

        if (previousValue) {
          target.removeEventListener(eventName, wrapFn);
        } // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet


        if (originalDescSet) {
          originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }

        if (typeof newValue === 'function') {
          target[eventNameSymbol] = newValue;
          target.addEventListener(eventName, wrapFn, false);
        } else {
          target[eventNameSymbol] = null;
        }
      }; // The getter would return undefined for unassigned properties but the default value of an
      // unassigned property is null


      desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;

        if (!target && obj === _global) {
          target = _global;
        }

        if (!target) {
          return null;
        }

        var listener = target[eventNameSymbol];

        if (listener) {
          return listener;
        } else if (originalDescGet) {
          // result will be null when use inline event attribute,
          // such as <button onclick="func();">OK</button>
          // because the onclick function is internal raw uncompiled handler
          // the onclick will be evaluated when first time event was triggered or
          // the property is accessed, https://github.com/angular/zone.js/issues/525
          // so we should use original native get to retrieve the handler
          var value = originalDescGet && originalDescGet.call(this);

          if (value) {
            desc.set.call(this, value);

            if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
              target.removeAttribute(prop);
            }

            return value;
          }
        }

        return null;
      };

      ObjectDefineProperty(obj, prop, desc);
      obj[onPropPatchedSymbol] = true;
    }

    function patchOnProperties(obj, properties, prototype) {
      if (properties) {
        for (var i = 0; i < properties.length; i++) {
          patchProperty(obj, 'on' + properties[i], prototype);
        }
      } else {
        var onProperties = [];

        for (var prop in obj) {
          if (prop.substr(0, 2) == 'on') {
            onProperties.push(prop);
          }
        }

        for (var j = 0; j < onProperties.length; j++) {
          patchProperty(obj, onProperties[j], prototype);
        }
      }
    }

    var originalInstanceKey = zoneSymbol('originalInstance'); // wrap some native API on `window`

    function patchClass(className) {
      var OriginalClass = _global[className];
      if (!OriginalClass) return; // keep original class in global

      _global[zoneSymbol(className)] = OriginalClass;

      _global[className] = function () {
        var a = bindArguments(arguments, className);

        switch (a.length) {
          case 0:
            this[originalInstanceKey] = new OriginalClass();
            break;

          case 1:
            this[originalInstanceKey] = new OriginalClass(a[0]);
            break;

          case 2:
            this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
            break;

          case 3:
            this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
            break;

          case 4:
            this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
            break;

          default:
            throw new Error('Arg list too long.');
        }
      }; // attach original delegate to patched function


      attachOriginToPatched(_global[className], OriginalClass);
      var instance = new OriginalClass(function () {});
      var prop;

      for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;

        (function (prop) {
          if (typeof instance[prop] === 'function') {
            _global[className].prototype[prop] = function () {
              return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
            };
          } else {
            ObjectDefineProperty(_global[className].prototype, prop, {
              set: function set(fn) {
                if (typeof fn === 'function') {
                  this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop); // keep callback in wrapped function so we can
                  // use it in Function.prototype.toString to return
                  // the native one.

                  attachOriginToPatched(this[originalInstanceKey][prop], fn);
                } else {
                  this[originalInstanceKey][prop] = fn;
                }
              },
              get: function get() {
                return this[originalInstanceKey][prop];
              }
            });
          }
        })(prop);
      }

      for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
          _global[className][prop] = OriginalClass[prop];
        }
      }
    }

    function copySymbolProperties(src, dest) {
      if (typeof Object.getOwnPropertySymbols !== 'function') {
        return;
      }

      var symbols = Object.getOwnPropertySymbols(src);
      symbols.forEach(function (symbol) {
        var desc = Object.getOwnPropertyDescriptor(src, symbol);
        Object.defineProperty(dest, symbol, {
          get: function get() {
            return src[symbol];
          },
          set: function set(value) {
            if (desc && (!desc.writable || typeof desc.set !== 'function')) {
              // if src[symbol] is not writable or not have a setter, just return
              return;
            }

            src[symbol] = value;
          },
          enumerable: desc ? desc.enumerable : true,
          configurable: desc ? desc.configurable : true
        });
      });
    }

    var shouldCopySymbolProperties = false;

    function patchMethod(target, name, patchFn) {
      var proto = target;

      while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
      }

      if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
      }

      var delegateName = zoneSymbol(name);
      var delegate = null;

      if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);

        if (isPropertyWritable(desc)) {
          var patchDelegate = patchFn(delegate, delegateName, name);

          proto[name] = function () {
            return patchDelegate(this, arguments);
          };

          attachOriginToPatched(proto[name], delegate);

          if (shouldCopySymbolProperties) {
            copySymbolProperties(delegate, proto[name]);
          }
        }
      }

      return delegate;
    } // TODO: @JiaLiPassion, support cancel task later if necessary


    function patchMacroTask(obj, funcName, metaCreator) {
      var setNative = null;

      function scheduleTask(task) {
        var data = task.data;

        data.args[data.cbIdx] = function () {
          task.invoke.apply(this, arguments);
        };

        setNative.apply(data.target, data.args);
        return task;
      }

      setNative = patchMethod(obj, funcName, function (delegate) {
        return function (self, args) {
          var meta = metaCreator(self, args);

          if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
          } else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
          }
        };
      });
    }

    function attachOriginToPatched(patched, original) {
      patched[zoneSymbol('OriginalDelegate')] = original;
    }

    var isDetectedIEOrEdge = false;
    var ieOrEdge = false;

    function isIE() {
      try {
        var ua = internalWindow.navigator.userAgent;

        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
          return true;
        }
      } catch (error) {}

      return false;
    }

    function isIEOrEdge() {
      if (isDetectedIEOrEdge) {
        return ieOrEdge;
      }

      isDetectedIEOrEdge = true;

      try {
        var ua = internalWindow.navigator.userAgent;

        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
          ieOrEdge = true;
        }
      } catch (error) {}

      return ieOrEdge;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // override Function.prototype.toString to make zone.js patched function
    // look like native function


    Zone.__load_patch('toString', function (global) {
      // patch Func.prototype.toString to let them look like native
      var originalFunctionToString = Function.prototype.toString;
      var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
      var PROMISE_SYMBOL = zoneSymbol('Promise');
      var ERROR_SYMBOL = zoneSymbol('Error');

      var newFunctionToString = function toString() {
        if (typeof this === 'function') {
          var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];

          if (originalDelegate) {
            if (typeof originalDelegate === 'function') {
              return originalFunctionToString.call(originalDelegate);
            } else {
              return Object.prototype.toString.call(originalDelegate);
            }
          }

          if (this === Promise) {
            var nativePromise = global[PROMISE_SYMBOL];

            if (nativePromise) {
              return originalFunctionToString.call(nativePromise);
            }
          }

          if (this === Error) {
            var nativeError = global[ERROR_SYMBOL];

            if (nativeError) {
              return originalFunctionToString.call(nativeError);
            }
          }
        }

        return originalFunctionToString.call(this);
      };

      newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
      Function.prototype.toString = newFunctionToString; // patch Object.prototype.toString to let them look like native

      var originalObjectToString = Object.prototype.toString;
      var PROMISE_OBJECT_TO_STRING = '[object Promise]';

      Object.prototype.toString = function () {
        if (this instanceof Promise) {
          return PROMISE_OBJECT_TO_STRING;
        }

        return originalObjectToString.call(this);
      };
    });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview
     * @suppress {missingRequire}
     */


    var passiveSupported = false;

    if (typeof window !== 'undefined') {
      try {
        var options = Object.defineProperty({}, 'passive', {
          get: function get() {
            passiveSupported = true;
          }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
      } catch (err) {
        passiveSupported = false;
      }
    } // an identifier to tell ZoneTask do not create a new invoke closure


    var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
      useG: true
    };
    var zoneSymbolEventNames$1 = {};
    var globalSources = {};
    var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
    var IMMEDIATE_PROPAGATION_SYMBOL = '__zone_symbol__propagationStopped';

    function patchEventTarget(_global, apis, patchOptions) {
      var ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
      var REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
      var LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
      var REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
      var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
      var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
      var PREPEND_EVENT_LISTENER = 'prependListener';
      var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';

      var invokeTask = function invokeTask(task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
          return;
        }

        var delegate = task.callback;

        if (typeof delegate === 'object' && delegate.handleEvent) {
          // create the bind version of handleEvent when invoke
          task.callback = function (event) {
            return delegate.handleEvent(event);
          };

          task.originalDelegate = delegate;
        } // invoke static task.invoke


        task.invoke(task, target, [event]);
        var options = task.options;

        if (options && typeof options === 'object' && options.once) {
          // if options.once is true, after invoke once remove listener here
          // only browser need to do this, nodejs eventEmitter will cal removeListener
          // inside EventEmitter.once
          var _delegate = task.originalDelegate ? task.originalDelegate : task.callback;

          target[REMOVE_EVENT_LISTENER].call(target, event.type, _delegate, options);
        }
      }; // global shared zoneAwareCallback to handle all event callback with capture = false


      var globalZoneAwareCallback = function globalZoneAwareCallback(event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;

        if (!event) {
          return;
        } // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190


        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];

        if (tasks) {
          // invoke all tasks which attached to current target with given event.type and capture = false
          // for performance concern, if task.length === 1, just invoke
          if (tasks.length === 1) {
            invokeTask(tasks[0], target, event);
          } else {
            // https://github.com/angular/zone.js/issues/836
            // copy the tasks array before invoke, to avoid
            // the callback will remove itself or other listener
            var copyTasks = tasks.slice();

            for (var i = 0; i < copyTasks.length; i++) {
              if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                break;
              }

              invokeTask(copyTasks[i], target, event);
            }
          }
        }
      }; // global shared zoneAwareCallback to handle all event callback with capture = true


      var globalZoneAwareCaptureCallback = function globalZoneAwareCaptureCallback(event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;

        if (!event) {
          return;
        } // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190


        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];

        if (tasks) {
          // invoke all tasks which attached to current target with given event.type and capture = false
          // for performance concern, if task.length === 1, just invoke
          if (tasks.length === 1) {
            invokeTask(tasks[0], target, event);
          } else {
            // https://github.com/angular/zone.js/issues/836
            // copy the tasks array before invoke, to avoid
            // the callback will remove itself or other listener
            var copyTasks = tasks.slice();

            for (var i = 0; i < copyTasks.length; i++) {
              if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                break;
              }

              invokeTask(copyTasks[i], target, event);
            }
          }
        }
      };

      function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
          return false;
        }

        var useGlobalCallback = true;

        if (patchOptions && patchOptions.useG !== undefined) {
          useGlobalCallback = patchOptions.useG;
        }

        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;

        if (patchOptions && patchOptions.chkDup !== undefined) {
          checkDuplicate = patchOptions.chkDup;
        }

        var returnTarget = false;

        if (patchOptions && patchOptions.rt !== undefined) {
          returnTarget = patchOptions.rt;
        }

        var proto = obj;

        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
          proto = ObjectGetPrototypeOf(proto);
        }

        if (!proto && obj[ADD_EVENT_LISTENER]) {
          // somehow we did not find it, but we can see it. This happens on IE for Window properties.
          proto = obj;
        }

        if (!proto) {
          return false;
        }

        if (proto[zoneSymbolAddEventListener]) {
          return false;
        }

        var eventNameToString = patchOptions && patchOptions.eventNameToString; // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data

        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;

        if (patchOptions && patchOptions.prepend) {
          nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
        }

        function checkIsPassive(task) {
          if (!passiveSupported && typeof taskData.options !== 'boolean' && typeof taskData.options !== 'undefined' && taskData.options !== null) {
            // options is a non-null non-undefined object
            // passive is not supported
            // don't pass options as object
            // just pass capture as a boolean
            task.options = !!taskData.options.capture;
            taskData.options = task.options;
          }
        }

        var customScheduleGlobal = function customScheduleGlobal(task) {
          // if there is already a task for the eventName + capture,
          // just return, because we use the shared globalZoneAwareCallback here.
          if (taskData.isExisting) {
            return;
          }

          checkIsPassive(task);
          return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };

        var customCancelGlobal = function customCancelGlobal(task) {
          // if task is not marked as isRemoved, this call is directly
          // from Zone.prototype.cancelTask, we should remove the task
          // from tasksList of target first
          if (!task.isRemoved) {
            var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
            var symbolEventName;

            if (symbolEventNames) {
              symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
            }

            var existingTasks = symbolEventName && task.target[symbolEventName];

            if (existingTasks) {
              for (var i = 0; i < existingTasks.length; i++) {
                var existingTask = existingTasks[i];

                if (existingTask === task) {
                  existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                  task.isRemoved = true;

                  if (existingTasks.length === 0) {
                    // all tasks for the eventName + capture have gone,
                    // remove globalZoneAwareCallback and remove the task cache from target
                    task.allRemoved = true;
                    task.target[symbolEventName] = null;
                  }

                  break;
                }
              }
            }
          } // if all tasks for the eventName + capture have gone,
          // we will really remove the global event callback,
          // if not, return


          if (!task.allRemoved) {
            return;
          }

          return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };

        var customScheduleNonGlobal = function customScheduleNonGlobal(task) {
          checkIsPassive(task);
          return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };

        var customSchedulePrepend = function customSchedulePrepend(task) {
          return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };

        var customCancelNonGlobal = function customCancelNonGlobal(task) {
          return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };

        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;

        var compareTaskCallbackVsDelegate = function compareTaskCallbackVsDelegate(task, delegate) {
          var typeOfDelegate = typeof delegate;
          return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
        };

        var compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;

        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];

        var makeAddListener = function makeAddListener(nativeListener, addSource, customScheduleFn, customCancelFn) {
          var returnTarget = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
          var prepend = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
          return function () {
            var target = this || _global;
            var eventName = arguments[0];
            var delegate = arguments[1];

            if (!delegate) {
              return nativeListener.apply(this, arguments);
            }

            if (isNode && eventName === 'uncaughtException') {
              // don't patch uncaughtException of nodejs to prevent endless loop
              return nativeListener.apply(this, arguments);
            } // don't create the bind delegate function for handleEvent
            // case here to improve addEventListener performance
            // we will create the bind delegate when invoke


            var isHandleEvent = false;

            if (typeof delegate !== 'function') {
              if (!delegate.handleEvent) {
                return nativeListener.apply(this, arguments);
              }

              isHandleEvent = true;
            }

            if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
              return;
            }

            var options = arguments[2];

            if (blackListedEvents) {
              // check black list
              for (var i = 0; i < blackListedEvents.length; i++) {
                if (eventName === blackListedEvents[i]) {
                  return nativeListener.apply(this, arguments);
                }
              }
            }

            var capture;
            var once = false;

            if (options === undefined) {
              capture = false;
            } else if (options === true) {
              capture = true;
            } else if (options === false) {
              capture = false;
            } else {
              capture = options ? !!options.capture : false;
              once = options ? !!options.once : false;
            }

            var zone = Zone.current;
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;

            if (!symbolEventNames) {
              // the code is duplicate, but I just want to get some better performance
              var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
              var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
              var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
              var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
              zoneSymbolEventNames$1[eventName] = {};
              zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
              zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
              symbolEventName = capture ? symbolCapture : symbol;
            } else {
              symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }

            var existingTasks = target[symbolEventName];
            var isExisting = false;

            if (existingTasks) {
              // already have task registered
              isExisting = true;

              if (checkDuplicate) {
                for (var _i = 0; _i < existingTasks.length; _i++) {
                  if (compare(existingTasks[_i], delegate)) {
                    // same callback, same capture, same event name, just return
                    return;
                  }
                }
              }
            } else {
              existingTasks = target[symbolEventName] = [];
            }

            var source;
            var constructorName = target.constructor['name'];
            var targetSource = globalSources[constructorName];

            if (targetSource) {
              source = targetSource[eventName];
            }

            if (!source) {
              source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
            } // do not create a new object as task.data to pass those things
            // just use the global shared one


            taskData.options = options;

            if (once) {
              // if addEventListener with once options, we don't pass it to
              // native addEventListener, instead we keep the once setting
              // and handle ourselves.
              taskData.options.once = false;
            }

            taskData.target = target;
            taskData.capture = capture;
            taskData.eventName = eventName;
            taskData.isExisting = isExisting;
            var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined; // keep taskData into data to allow onScheduleEventTask to access the task information

            if (data) {
              data.taskData = taskData;
            }

            var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn); // should clear taskData.target to avoid memory leak
            // issue, https://github.com/angular/angular/issues/20442

            taskData.target = null; // need to clear up taskData because it is a global object

            if (data) {
              data.taskData = null;
            } // have to save those information to task in case
            // application may call task.zone.cancelTask() directly


            if (once) {
              options.once = true;
            }

            if (!(!passiveSupported && typeof task.options === 'boolean')) {
              // if not support passive, and we pass an option object
              // to addEventListener, we should save the options to task
              task.options = options;
            }

            task.target = target;
            task.capture = capture;
            task.eventName = eventName;

            if (isHandleEvent) {
              // save original delegate for compare to check duplicate
              task.originalDelegate = delegate;
            }

            if (!prepend) {
              existingTasks.push(task);
            } else {
              existingTasks.unshift(task);
            }

            if (returnTarget) {
              return target;
            }
          };
        };

        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);

        if (nativePrependEventListener) {
          proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }

        proto[REMOVE_EVENT_LISTENER] = function () {
          var target = this || _global;
          var eventName = arguments[0];
          var options = arguments[2];
          var capture;

          if (options === undefined) {
            capture = false;
          } else if (options === true) {
            capture = true;
          } else if (options === false) {
            capture = false;
          } else {
            capture = options ? !!options.capture : false;
          }

          var delegate = arguments[1];

          if (!delegate) {
            return nativeRemoveEventListener.apply(this, arguments);
          }

          if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
            return;
          }

          var symbolEventNames = zoneSymbolEventNames$1[eventName];
          var symbolEventName;

          if (symbolEventNames) {
            symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
          }

          var existingTasks = symbolEventName && target[symbolEventName];

          if (existingTasks) {
            for (var i = 0; i < existingTasks.length; i++) {
              var existingTask = existingTasks[i];

              if (compare(existingTask, delegate)) {
                existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                existingTask.isRemoved = true;

                if (existingTasks.length === 0) {
                  // all tasks for the eventName + capture have gone,
                  // remove globalZoneAwareCallback and remove the task cache from target
                  existingTask.allRemoved = true;
                  target[symbolEventName] = null;
                }

                existingTask.zone.cancelTask(existingTask);

                if (returnTarget) {
                  return target;
                }

                return;
              }
            }
          } // issue 930, didn't find the event name or callback
          // from zone kept existingTasks, the callback maybe
          // added outside of zone, we need to call native removeEventListener
          // to try to remove it.


          return nativeRemoveEventListener.apply(this, arguments);
        };

        proto[LISTENERS_EVENT_LISTENER] = function () {
          var target = this || _global;
          var eventName = arguments[0];
          var listeners = [];
          var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);

          for (var i = 0; i < tasks.length; i++) {
            var task = tasks[i];
            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
            listeners.push(delegate);
          }

          return listeners;
        };

        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
          var target = this || _global;
          var eventName = arguments[0];

          if (!eventName) {
            var keys = Object.keys(target);

            for (var i = 0; i < keys.length; i++) {
              var prop = keys[i];
              var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
              var evtName = match && match[1]; // in nodejs EventEmitter, removeListener event is
              // used for monitoring the removeListener call,
              // so just keep removeListener eventListener until
              // all other eventListeners are removed

              if (evtName && evtName !== 'removeListener') {
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
              }
            } // remove removeListener listener finally


            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
          } else {
            var symbolEventNames = zoneSymbolEventNames$1[eventName];

            if (symbolEventNames) {
              var symbolEventName = symbolEventNames[FALSE_STR];
              var symbolCaptureEventName = symbolEventNames[TRUE_STR];
              var tasks = target[symbolEventName];
              var captureTasks = target[symbolCaptureEventName];

              if (tasks) {
                var removeTasks = tasks.slice();

                for (var _i2 = 0; _i2 < removeTasks.length; _i2++) {
                  var task = removeTasks[_i2];
                  var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                  this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                }
              }

              if (captureTasks) {
                var _removeTasks = captureTasks.slice();

                for (var _i3 = 0; _i3 < _removeTasks.length; _i3++) {
                  var _task = _removeTasks[_i3];

                  var _delegate2 = _task.originalDelegate ? _task.originalDelegate : _task.callback;

                  this[REMOVE_EVENT_LISTENER].call(this, eventName, _delegate2, _task.options);
                }
              }
            }
          }

          if (returnTarget) {
            return this;
          }
        }; // for native toString patch


        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);

        if (nativeRemoveAllListeners) {
          attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }

        if (nativeListeners) {
          attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }

        return true;
      }

      var results = [];

      for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
      }

      return results;
    }

    function findEventTasks(target, eventName) {
      var foundTasks = [];

      for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];

        if (evtName && (!eventName || evtName === eventName)) {
          var tasks = target[prop];

          if (tasks) {
            for (var i = 0; i < tasks.length; i++) {
              foundTasks.push(tasks[i]);
            }
          }
        }
      }

      return foundTasks;
    }

    function patchEventPrototype(global, api) {
      var Event = global['Event'];

      if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) {
          return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true; // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not

            delegate && delegate.apply(self, args);
          };
        });
      }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function patchCallbacks(api, target, targetName, method, callbacks) {
      var symbol = Zone.__symbol__(method);

      if (target[symbol]) {
        return;
      }

      var nativeDelegate = target[symbol] = target[method];

      target[method] = function (name, opts, options) {
        if (opts && opts.prototype) {
          callbacks.forEach(function (callback) {
            var source = "".concat(targetName, ".").concat(method, "::") + callback;
            var prototype = opts.prototype;

            if (prototype.hasOwnProperty(callback)) {
              var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);

              if (descriptor && descriptor.value) {
                descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);

                api._redefineProperty(opts.prototype, callback, descriptor);
              } else if (prototype[callback]) {
                prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
              }
            } else if (prototype[callback]) {
              prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            }
          });
        }

        return nativeDelegate.call(target, name, opts, options);
      };

      api.attachOriginToPatched(target[method], nativeDelegate);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /*
     * This is necessary for Chrome and Chrome mobile, to enable
     * things like redefining `createdCallback` on an element.
     */


    var zoneSymbol$1 = Zone.__symbol__;

    var _defineProperty = Object[zoneSymbol$1('defineProperty')] = Object.defineProperty;

    var _getOwnPropertyDescriptor = Object[zoneSymbol$1('getOwnPropertyDescriptor')] = Object.getOwnPropertyDescriptor;

    var _create = Object.create;
    var unconfigurablesKey = zoneSymbol$1('unconfigurables');

    function propertyPatch() {
      Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
          throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }

        var originalConfigurableFlag = desc.configurable;

        if (prop !== 'prototype') {
          desc = rewriteDescriptor(obj, prop, desc);
        }

        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
      };

      Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
          Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
      };

      Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
          Object.keys(proto).forEach(function (prop) {
            proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
          });
        }

        return _create(obj, proto);
      };

      Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);

        if (desc && isUnconfigurable(obj, prop)) {
          desc.configurable = false;
        }

        return desc;
      };
    }

    function _redefineProperty(obj, prop, desc) {
      var originalConfigurableFlag = desc.configurable;
      desc = rewriteDescriptor(obj, prop, desc);
      return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    }

    function isUnconfigurable(obj, prop) {
      return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
    }

    function rewriteDescriptor(obj, prop, desc) {
      // issue-927, if the desc is frozen, don't try to change the desc
      if (!Object.isFrozen(desc)) {
        desc.configurable = true;
      }

      if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
          _defineProperty(obj, unconfigurablesKey, {
            writable: true,
            value: {}
          });
        }

        if (obj[unconfigurablesKey]) {
          obj[unconfigurablesKey][prop] = true;
        }
      }

      return desc;
    }

    function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
      try {
        return _defineProperty(obj, prop, desc);
      } catch (error) {
        if (desc.configurable) {
          // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
          // retry with the original flag value
          if (typeof originalConfigurableFlag == 'undefined') {
            delete desc.configurable;
          } else {
            desc.configurable = originalConfigurableFlag;
          }

          try {
            return _defineProperty(obj, prop, desc);
          } catch (error) {
            var descJson = null;

            try {
              descJson = JSON.stringify(desc);
            } catch (error) {
              descJson = desc.toString();
            }

            console.log("Attempting to configure '".concat(prop, "' with descriptor '").concat(descJson, "' on object '").concat(obj, "' and got error, giving up: ").concat(error));
          }
        } else {
          throw error;
        }
      }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview
     * @suppress {globalThis}
     */


    var globalEventHandlersEventNames = ['abort', 'animationcancel', 'animationend', 'animationiteration', 'auxclick', 'beforeinput', 'blur', 'cancel', 'canplay', 'canplaythrough', 'change', 'compositionstart', 'compositionupdate', 'compositionend', 'cuechange', 'click', 'close', 'contextmenu', 'curechange', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragexit', 'dragleave', 'dragover', 'drop', 'durationchange', 'emptied', 'ended', 'error', 'focus', 'focusin', 'focusout', 'gotpointercapture', 'input', 'invalid', 'keydown', 'keypress', 'keyup', 'load', 'loadstart', 'loadeddata', 'loadedmetadata', 'lostpointercapture', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'orientationchange', 'pause', 'play', 'playing', 'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave', 'pointerlockchange', 'mozpointerlockchange', 'webkitpointerlockerchange', 'pointerlockerror', 'mozpointerlockerror', 'webkitpointerlockerror', 'pointermove', 'pointout', 'pointerover', 'pointerup', 'progress', 'ratechange', 'reset', 'resize', 'scroll', 'seeked', 'seeking', 'select', 'selectionchange', 'selectstart', 'show', 'sort', 'stalled', 'submit', 'suspend', 'timeupdate', 'volumechange', 'touchcancel', 'touchmove', 'touchstart', 'touchend', 'transitioncancel', 'transitionend', 'waiting', 'wheel'];
    var documentEventNames = ['afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror', 'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange', 'visibilitychange', 'resume'];
    var windowEventNames = ['absolutedeviceorientation', 'afterinput', 'afterprint', 'appinstalled', 'beforeinstallprompt', 'beforeprint', 'beforeunload', 'devicelight', 'devicemotion', 'deviceorientation', 'deviceorientationabsolute', 'deviceproximity', 'hashchange', 'languagechange', 'message', 'mozbeforepaint', 'offline', 'online', 'paint', 'pageshow', 'pagehide', 'popstate', 'rejectionhandled', 'storage', 'unhandledrejection', 'unload', 'userproximity', 'vrdisplyconnected', 'vrdisplaydisconnected', 'vrdisplaypresentchange'];
    var htmlElementEventNames = ['beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend', 'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend', 'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'];
    var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
    var ieElementEventNames = ['activate', 'afterupdate', 'ariarequest', 'beforeactivate', 'beforedeactivate', 'beforeeditfocus', 'beforeupdate', 'cellchange', 'controlselect', 'dataavailable', 'datasetchanged', 'datasetcomplete', 'errorupdate', 'filterchange', 'layoutcomplete', 'losecapture', 'move', 'moveend', 'movestart', 'propertychange', 'resizeend', 'resizestart', 'rowenter', 'rowexit', 'rowsdelete', 'rowsinserted', 'command', 'compassneedscalibration', 'deactivate', 'help', 'mscontentzoom', 'msmanipulationstatechanged', 'msgesturechange', 'msgesturedoubletap', 'msgestureend', 'msgesturehold', 'msgesturestart', 'msgesturetap', 'msgotpointercapture', 'msinertiastart', 'mslostpointercapture', 'mspointercancel', 'mspointerdown', 'mspointerenter', 'mspointerhover', 'mspointerleave', 'mspointermove', 'mspointerout', 'mspointerover', 'mspointerup', 'pointerout', 'mssitemodejumplistitemremoved', 'msthumbnailclick', 'stop', 'storagecommit'];
    var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
    var formEventNames = ['autocomplete', 'autocompleteerror'];
    var detailEventNames = ['toggle'];
    var frameEventNames = ['load'];
    var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
    var marqueeEventNames = ['bounce', 'finish', 'start'];
    var XMLHttpRequestEventNames = ['loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend', 'readystatechange'];
    var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
    var websocketEventNames = ['close', 'error', 'open', 'message'];
    var workerEventNames = ['error', 'message'];
    var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);

    function filterProperties(target, onProperties, ignoreProperties) {
      if (!ignoreProperties || ignoreProperties.length === 0) {
        return onProperties;
      }

      var tip = ignoreProperties.filter(function (ip) {
        return ip.target === target;
      });

      if (!tip || tip.length === 0) {
        return onProperties;
      }

      var targetIgnoreProperties = tip[0].ignoreProperties;
      return onProperties.filter(function (op) {
        return targetIgnoreProperties.indexOf(op) === -1;
      });
    }

    function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
      // check whether target is available, sometimes target will be undefined
      // because different browser or some 3rd party plugin.
      if (!target) {
        return;
      }

      var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
      patchOnProperties(target, filteredProperties, prototype);
    }

    function propertyDescriptorPatch(api, _global) {
      if (isNode && !isMix) {
        return;
      }

      if (Zone[api.symbol('patchEvents')]) {
        // events are already been patched by legacy patch.
        return;
      }

      var supportsWebSocket = typeof WebSocket !== 'undefined';
      var ignoreProperties = _global['__Zone_ignore_on_properties']; // for browsers that we can patch the descriptor:  Chrome & Firefox

      if (isBrowser) {
        var _internalWindow = window;
        var ignoreErrorProperties = isIE ? [{
          target: _internalWindow,
          ignoreProperties: ['error']
        }] : []; // in IE/Edge, onProp not exist in window object, but in WindowPrototype
        // so we need to pass WindowPrototype to check onProp exist or not

        patchFilteredProperties(_internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(_internalWindow));
        patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);

        if (typeof _internalWindow['SVGElement'] !== 'undefined') {
          patchFilteredProperties(_internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
        }

        patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
        patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
        patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
        var HTMLMarqueeElement = _internalWindow['HTMLMarqueeElement'];

        if (HTMLMarqueeElement) {
          patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
        }

        var Worker = _internalWindow['Worker'];

        if (Worker) {
          patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
        }
      }

      var XMLHttpRequest = _global['XMLHttpRequest'];

      if (XMLHttpRequest) {
        // XMLHttpRequest is not available in ServiceWorker, so we need to check here
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
      }

      var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];

      if (XMLHttpRequestEventTarget) {
        patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
      }

      if (typeof IDBIndex !== 'undefined') {
        patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
      }

      if (supportsWebSocket) {
        patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
      }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    Zone.__load_patch('util', function (global, Zone, api) {
      api.patchOnProperties = patchOnProperties;
      api.patchMethod = patchMethod;
      api.bindArguments = bindArguments;
      api.patchMacroTask = patchMacroTask; // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
      // define which events will not be patched by `Zone.js`.
      // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
      // the name consistent with angular repo.
      // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
      // backwards compatibility.

      var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');

      var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');

      if (global[SYMBOL_UNPATCHED_EVENTS]) {
        global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
      }

      if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
      }

      api.patchEventPrototype = patchEventPrototype;
      api.patchEventTarget = patchEventTarget;
      api.isIEOrEdge = isIEOrEdge;
      api.ObjectDefineProperty = ObjectDefineProperty;
      api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
      api.ObjectCreate = ObjectCreate;
      api.ArraySlice = ArraySlice;
      api.patchClass = patchClass;
      api.wrapWithCurrentZone = wrapWithCurrentZone;
      api.filterProperties = filterProperties;
      api.attachOriginToPatched = attachOriginToPatched;
      api._redefineProperty = _redefineProperty;
      api.patchCallbacks = patchCallbacks;

      api.getGlobalObjects = function () {
        return {
          globalSources: globalSources,
          zoneSymbolEventNames: zoneSymbolEventNames$1,
          eventNames: eventNames,
          isBrowser: isBrowser,
          isMix: isMix,
          isNode: isNode,
          TRUE_STR: TRUE_STR,
          FALSE_STR: FALSE_STR,
          ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
          ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
          REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
        };
      };
    });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview
     * @suppress {missingRequire}
     */


    var taskSymbol = zoneSymbol('zoneTask');

    function patchTimer(window, setName, cancelName, nameSuffix) {
      var setNative = null;
      var clearNative = null;
      setName += nameSuffix;
      cancelName += nameSuffix;
      var tasksByHandleId = {};

      function scheduleTask(task) {
        var data = task.data;

        function timer() {
          try {
            task.invoke.apply(this, arguments);
          } finally {
            // issue-934, task will be cancelled
            // even it is a periodic task such as
            // setInterval
            if (!(task.data && task.data.isPeriodic)) {
              if (typeof data.handleId === 'number') {
                // in non-nodejs env, we remove timerId
                // from local cache
                delete tasksByHandleId[data.handleId];
              } else if (data.handleId) {
                // Node returns complex objects as handleIds
                // we remove task reference from timer object
                data.handleId[taskSymbol] = null;
              }
            }
          }
        }

        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
      }

      function clearTask(task) {
        return clearNative(task.data.handleId);
      }

      setNative = patchMethod(window, setName, function (delegate) {
        return function (self, args) {
          if (typeof args[0] === 'function') {
            var _options = {
              isPeriodic: nameSuffix === 'Interval',
              delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
              args: args
            };
            var task = scheduleMacroTaskWithCurrentZone(setName, args[0], _options, scheduleTask, clearTask);

            if (!task) {
              return task;
            } // Node.js must additionally support the ref and unref functions.


            var handle = task.data.handleId;

            if (typeof handle === 'number') {
              // for non nodejs env, we save handleId: task
              // mapping in local cache for clearTimeout
              tasksByHandleId[handle] = task;
            } else if (handle) {
              // for nodejs env, we save task
              // reference in timerId Object for clearTimeout
              handle[taskSymbol] = task;
            } // check whether handle is null, because some polyfill or browser
            // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame


            if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
              task.ref = handle.ref.bind(handle);
              task.unref = handle.unref.bind(handle);
            }

            if (typeof handle === 'number' || handle) {
              return handle;
            }

            return task;
          } else {
            // cause an error by calling it directly.
            return delegate.apply(window, args);
          }
        };
      });
      clearNative = patchMethod(window, cancelName, function (delegate) {
        return function (self, args) {
          var id = args[0];
          var task;

          if (typeof id === 'number') {
            // non nodejs env.
            task = tasksByHandleId[id];
          } else {
            // nodejs env.
            task = id && id[taskSymbol]; // other environments.

            if (!task) {
              task = id;
            }
          }

          if (task && typeof task.type === 'string') {
            if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
              if (typeof id === 'number') {
                delete tasksByHandleId[id];
              } else if (id) {
                id[taskSymbol] = null;
              } // Do not cancel already canceled functions


              task.zone.cancelTask(task);
            }
          } else {
            // cause an error by calling it directly.
            delegate.apply(window, args);
          }
        };
      });
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function patchCustomElements(_global, api) {
      var _api$getGlobalObjects = api.getGlobalObjects(),
          isBrowser = _api$getGlobalObjects.isBrowser,
          isMix = _api$getGlobalObjects.isMix;

      if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
        return;
      }

      var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
      api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function eventTargetPatch(_global, api) {
      if (Zone[api.symbol('patchEventTarget')]) {
        // EventTarget is already patched.
        return;
      }

      var _api$getGlobalObjects2 = api.getGlobalObjects(),
          eventNames = _api$getGlobalObjects2.eventNames,
          zoneSymbolEventNames = _api$getGlobalObjects2.zoneSymbolEventNames,
          TRUE_STR = _api$getGlobalObjects2.TRUE_STR,
          FALSE_STR = _api$getGlobalObjects2.FALSE_STR,
          ZONE_SYMBOL_PREFIX = _api$getGlobalObjects2.ZONE_SYMBOL_PREFIX; //  predefine all __zone_symbol__ + eventName + true/false string


      for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
      }

      var EVENT_TARGET = _global['EventTarget'];

      if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
        return;
      }

      api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
      return true;
    }

    function patchEvent(global, api) {
      api.patchEventPrototype(global, api);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview
     * @suppress {missingRequire}
     */


    Zone.__load_patch('legacy', function (global) {
      var legacyPatch = global[Zone.__symbol__('legacyPatch')];

      if (legacyPatch) {
        legacyPatch();
      }
    });

    Zone.__load_patch('timers', function (global) {
      var set = 'set';
      var clear = 'clear';
      patchTimer(global, set, clear, 'Timeout');
      patchTimer(global, set, clear, 'Interval');
      patchTimer(global, set, clear, 'Immediate');
    });

    Zone.__load_patch('requestAnimationFrame', function (global) {
      patchTimer(global, 'request', 'cancel', 'AnimationFrame');
      patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
      patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
    });

    Zone.__load_patch('blocking', function (global, Zone) {
      var blockingMethods = ['alert', 'prompt', 'confirm'];

      for (var i = 0; i < blockingMethods.length; i++) {
        var name = blockingMethods[i];
        patchMethod(global, name, function (delegate, symbol, name) {
          return function (s, args) {
            return Zone.current.run(delegate, global, args, name);
          };
        });
      }
    });

    Zone.__load_patch('EventTarget', function (global, Zone, api) {
      patchEvent(global, api);
      eventTargetPatch(global, api); // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener

      var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];

      if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
      }

      patchClass('MutationObserver');
      patchClass('WebKitMutationObserver');
      patchClass('IntersectionObserver');
      patchClass('FileReader');
    });

    Zone.__load_patch('on_property', function (global, Zone, api) {
      propertyDescriptorPatch(api, global);
      propertyPatch();
    });

    Zone.__load_patch('customElements', function (global, Zone, api) {
      patchCustomElements(global, api);
    });

    Zone.__load_patch('XHR', function (global, Zone) {
      // Treat XMLHttpRequest as a macrotask.
      patchXHR(global);
      var XHR_TASK = zoneSymbol('xhrTask');
      var XHR_SYNC = zoneSymbol('xhrSync');
      var XHR_LISTENER = zoneSymbol('xhrListener');
      var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
      var XHR_URL = zoneSymbol('xhrURL');
      var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');

      function patchXHR(window) {
        var XMLHttpRequest = window['XMLHttpRequest'];

        if (!XMLHttpRequest) {
          // XMLHttpRequest is not available in service worker
          return;
        }

        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

        function findPendingTask(target) {
          return target[XHR_TASK];
        }

        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];

        if (!oriAddListener) {
          var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];

          if (XMLHttpRequestEventTarget) {
            var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
            oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
            oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
          }
        }

        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';

        function scheduleTask(task) {
          var data = task.data;
          var target = data.target;
          target[XHR_SCHEDULED] = false;
          target[XHR_ERROR_BEFORE_SCHEDULED] = false; // remove existing event listener

          var listener = target[XHR_LISTENER];

          if (!oriAddListener) {
            oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
            oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
          }

          if (listener) {
            oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
          }

          var newListener = target[XHR_LISTENER] = function () {
            if (target.readyState === target.DONE) {
              // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
              // readyState=4 multiple times, so we need to check task state here
              if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                // check whether the xhr has registered onload listener
                // if that is the case, the task should invoke after all
                // onload listeners finish.
                var loadTasks = target['__zone_symbol__loadfalse'];

                if (loadTasks && loadTasks.length > 0) {
                  var oriInvoke = task.invoke;

                  task.invoke = function () {
                    // need to load the tasks again, because in other
                    // load listener, they may remove themselves
                    var loadTasks = target['__zone_symbol__loadfalse'];

                    for (var i = 0; i < loadTasks.length; i++) {
                      if (loadTasks[i] === task) {
                        loadTasks.splice(i, 1);
                      }
                    }

                    if (!data.aborted && task.state === SCHEDULED) {
                      oriInvoke.call(task);
                    }
                  };

                  loadTasks.push(task);
                } else {
                  task.invoke();
                }
              } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                // error occurs when xhr.send()
                target[XHR_ERROR_BEFORE_SCHEDULED] = true;
              }
            }
          };

          oriAddListener.call(target, READY_STATE_CHANGE, newListener);
          var storedTask = target[XHR_TASK];

          if (!storedTask) {
            target[XHR_TASK] = task;
          }

          sendNative.apply(target, data.args);
          target[XHR_SCHEDULED] = true;
          return task;
        }

        function placeholderCallback() {}

        function clearTask(task) {
          var data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
          // to prevent it from firing. So instead, we store info for the event listener.

          data.aborted = true;
          return abortNative.apply(data.target, data.args);
        }

        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
          return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
          };
        });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
          return function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
              // a fetch is scheduling, so we are using xhr to polyfill fetch
              // and because we already schedule macroTask for fetch, we should
              // not schedule a macroTask for xhr again
              return sendNative.apply(self, args);
            }

            if (self[XHR_SYNC]) {
              // if the XHR is sync there is no task to schedule, just execute the code.
              return sendNative.apply(self, args);
            } else {
              var _options2 = {
                target: self,
                url: self[XHR_URL],
                isPeriodic: false,
                args: args,
                aborted: false
              };
              var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, _options2, scheduleTask, clearTask);

              if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !_options2.aborted && task.state === SCHEDULED) {
                // xhr request throw error when send
                // we should invoke task instead of leaving a scheduled
                // pending macroTask
                task.invoke();
              }
            }
          };
        });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
          return function (self, args) {
            var task = findPendingTask(self);

            if (task && typeof task.type == 'string') {
              // If the XHR has already completed, do nothing.
              // If the XHR has already been aborted, do nothing.
              // Fix #569, call abort multiple times before done will cause
              // macroTask task count be negative number
              if (task.cancelFn == null || task.data && task.data.aborted) {
                return;
              }

              task.zone.cancelTask(task);
            } else if (Zone.current[fetchTaskAborting] === true) {
              // the abort is called from fetch polyfill, we need to call native abort of XHR.
              return abortNative.apply(self, args);
            } // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.

          };
        });
      }
    });

    Zone.__load_patch('geolocation', function (global) {
      /// GEO_LOCATION
      if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
      }
    });

    Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
      // handle unhandled promise rejection
      function findPromiseRejectionHandler(evtName) {
        return function (e) {
          var eventTasks = findEventTasks(global, evtName);
          eventTasks.forEach(function (eventTask) {
            // windows has added unhandledrejection event listener
            // trigger the event listener
            var PromiseRejectionEvent = global['PromiseRejectionEvent'];

            if (PromiseRejectionEvent) {
              var evt = new PromiseRejectionEvent(evtName, {
                promise: e.promise,
                reason: e.rejection
              });
              eventTask.invoke(evt);
            }
          });
        };
      }

      if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
      }
    });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".block-form {\n  padding: 70px;\n  text-align: center;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFdvcmtcXFNjYW5TeXN0ZW1cXFNjYW5TeXN0ZW1cXEZyb250U2NhbkFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrLWZvcm0ge1xyXG4gICAgcGFkZGluZzogNzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuIiwiLmJsb2NrLWZvcm0ge1xuICBwYWRkaW5nOiA3MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ng_block_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-block-ui */
    "./node_modules/ng-block-ui/index.js");
    /* harmony import */


    var ng_block_ui__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__);

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "toggleBlocking",
        value: function toggleBlocking(message) {
          var _this3 = this;

          this.blockUI.start(message);
          setTimeout(function () {
            _this3.blockUI.stop();
          }, 2500);
        }
      }]);

      return AppComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])()], AppComponent.prototype, "blockUI", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./auth/auth.interceptor */
    "./src/app/auth/auth.interceptor.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var ng_block_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ng-block-ui */
    "./node_modules/ng-block-ui/index.js");
    /* harmony import */


    var ng_block_ui__WEBPACK_IMPORTED_MODULE_17___default =
    /*#__PURE__*/
    __webpack_require__.n(ng_block_ui__WEBPACK_IMPORTED_MODULE_17__);

    var routes = [{
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
        progressBar: true
      }), [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)], ng_block_ui__WEBPACK_IMPORTED_MODULE_17__["BlockUIModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatListModule"]],
      exports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatListModule"]],
      providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (localStorage.getItem('token') != null) {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/auth/auth.interceptor.ts":
  /*!******************************************!*\
    !*** ./src/app/auth/auth.interceptor.ts ***!
    \******************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppAuthAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(router) {
        _classCallCheck(this, AuthInterceptor);

        this.router = router;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this4 = this;

          if (localStorage.getItem('token') != null) {
            var clonedReq = req.clone({
              headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            });
            return next.handle(clonedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {}, function (err) {
              if (err.status === 401) {
                localStorage.removeItem('token');

                _this4.router.navigateByUrl('/login');
              }
            }));
          } else {
            return next.handle(req.clone());
          }
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: #673ab7;\n  color: #f5f5f5;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcV29ya1xcU2NhblN5c3RlbVxcU2NhblN5c3RlbVxcRnJvbnRTY2FuQXBwL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuICBcclxuLnNpZGVuYXYge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG4gIFxyXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6ICM2NzNhYjc7XHJcbiAgY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4iLCIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjNjczYWI3O1xuICBjb2xvcjogI2Y1ZjVmNTtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(router, service) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.service = service;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.service.getUserProfile().subscribe(function (res) {
            _this5.userDetails = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card {\n  display: flex;\n  flex-direction: column;\n  background-color: floralwhite;\n  width: 300px;\n  height: 230px;\n  border: 3px solid darkslateblue;\n  margin: auto;\n  margin-top: 10%;\n}\n\n.mat-card > * {\n  margin: 5px;\n  width: 100%;\n  justify-content: center;\n}\n\n.mat-icon {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXFdvcmtcXFNjYW5TeXN0ZW1cXFNjYW5TeXN0ZW1cXEZyb250U2NhbkFwcC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmbG9yYWx3aGl0ZTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBkYXJrc2xhdGVibHVlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIH1cclxuICBcclxuICAubWF0LWNhcmQgPiAqIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuICAiLCIubWF0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBmbG9yYWx3aGl0ZTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDIzMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCBkYXJrc2xhdGVibHVlO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLm1hdC1jYXJkID4gKiB7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(service, router, toastr) {
        _classCallCheck(this, LoginComponent);

        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.title = 'Авторизация';
        this.formModel = {
          UserName: '',
          Password: ''
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem('token') != null) {
            this.router.navigateByUrl('/home');
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this6 = this;

          this.service.login(form.value).subscribe(function (res) {
            localStorage.setItem('token', res.token);

            _this6.router.navigateByUrl('/home');

            _this6.toastr.success("Успешно", 'Аутентификация');
          }, function (err) {
            if (err.status === 400) {
              _this6.toastr.error(err.error.message, 'Аутентификация');
            } else if (err.status === 0) {
              _this6.toastr.error('Сервер недоступен!', 'Аутентификация');
            } else {
              console.log(err);
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/shared/user.service.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/user.service.ts ***!
    \****************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppSharedUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(fb, http) {
        _classCallCheck(this, UserService);

        this.fb = fb;
        this.http = http;
        this.BaseURI = 'http://localhost:54516/api';
        this.formModel = this.fb.group({
          UserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
          FullName: [''],
          Passwords: this.fb.group({
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            ConfirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }, {
            validator: this.comparePasswords
          })
        });
      }

      _createClass(UserService, [{
        key: "comparePasswords",
        value: function comparePasswords(fb) {
          var confirmPswrdCtrl = fb.get('ConfirmPassword'); // passwordMismatch
          // confirmPswrdCtrl.errors={passwordMismatch:true}

          if (confirmPswrdCtrl != null) {
            if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
              var pswd = fb.get('Password');

              if (pswd != null && pswd.value !== confirmPswrdCtrl.value) {
                confirmPswrdCtrl.setErrors({
                  passwordMismatch: true
                });
              } else {
                confirmPswrdCtrl.setErrors(null);
              }
            }
          }
        }
      }, {
        key: "register",
        value: function register() {
          var body = {
            UserName: this.formModel.value.UserName,
            Email: this.formModel.value.Email,
            FullName: this.formModel.value.FullName,
            Password: this.formModel.value.Passwords.Password
          };
          return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
        }
      }, {
        key: "login",
        value: function login(formData) {
          return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile() {
          return this.http.get(this.BaseURI + '/UserProfile');
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _polyfills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./polyfills */
    "./src/polyfills.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).then(function (ref) {// Ensure Angular destroys itself on hot reloads.
      // if (window['ngRef']) {
      //   window['ngRef'].destroy();
      // }
      // window['ngRef'] = ref;
      // Otherwise, log the boot error
    })["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  "./src/polyfills.ts":
  /*!**************************!*\
    !*** ./src/polyfills.ts ***!
    \**************************/

  /*! no exports provided */

  /***/
  function srcPolyfillsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! core-js/es6/reflect */
    "./node_modules/core-js/es6/reflect.js");
    /* harmony import */


    var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! core-js/es7/reflect */
    "./node_modules/core-js/es7/reflect.js");
    /* harmony import */


    var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! zone.js/dist/zone */
    "./node_modules/zone.js/dist/zone-evergreen.js");
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_4__);
    /** Evergreen browsers require these. **/

    /* Zone JS is required by Angular itself. */
    // Included with Angular CLI.

    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Work\ScanSystem\ScanSystem\FrontScanApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map