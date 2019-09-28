'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var ReactDOM = _interopDefault(require('react-dom'));

var prefixCls = 'kai-header';

var Header = function Header(_ref) {
  var text = _ref.text,
      children = _ref.children;
  return React__default.createElement("header", {
    className: prefixCls
  }, React__default.createElement("h1", {
    className: "h1",
    "data-l10n-id": text
  }, children));
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var prefixCls$1 = 'kai-softkey';

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var content = this.props.content;

      if (!content) {
        this.element.textContent = '';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var content = this.props.content;
      var data = content ? {
        'data-icon': content.icon,
        'data-l10n-id': content.text || content
      } : null;
      return React__default.createElement("button", _extends({
        type: "button",
        className: "".concat(prefixCls$1, "-btn")
      }, data, {
        ref: function ref(el) {
          _this.element = el;
        }
      }));
    }
  }]);

  return Button;
}(React__default.Component);

var DOMKeyMap = new Map();
var UpdateListeners = new Set();

var SoftKey =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(SoftKey, _React$Component2);

  function SoftKey(props) {
    var _this2;

    _classCallCheck(this, SoftKey);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(SoftKey).call(this, props));

    _defineProperty(_assertThisInitialized(_this2), "handleUpdate", function (keys) {
      _this2.setState(keys);
    });

    _this2.state = {
      left: props.left || '',
      center: props.center || '',
      right: props.right || ''
    };
    return _this2;
  }

  _createClass(SoftKey, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      UpdateListeners.add(this.handleUpdate);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      UpdateListeners["delete"](this.handleUpdate);
    }
  }, {
    key: "render",
    value: function render() {
      return React__default.createElement("form", {
        className: "".concat(prefixCls$1, " visible"),
        "data-type": "action"
      }, React__default.createElement(Button, {
        pos: "left",
        content: this.state.left
      }), React__default.createElement(Button, {
        pos: "center",
        content: this.state.center
      }), React__default.createElement(Button, {
        pos: "right",
        content: this.state.right
      }));
    }
  }], [{
    key: "register",
    value: function register(keys, el) {
      var inst = DOMKeyMap.get(el);

      if (inst) {
        inst.update(keys);
      } else {
        inst = {
          start: function start() {
            el.addEventListener('focus', this.check, true);
            this.update(keys);
          },
          stop: function stop() {
            el.removeEventListener('focus', this.check, true);
          },
          check: function check() {
            var curr = document.activeElement;

            if (curr === el || el.contains(curr)) {
              SoftKey.updateKeys();
            }
          },
          update: function update(keys) {
            this.keys = keys;
            this.check();
          }
        };
        DOMKeyMap.set(el, inst);
        inst.start();
      }
    }
  }, {
    key: "unregister",
    value: function unregister(el) {
      var inst = DOMKeyMap.get(el);

      if (!inst) {
        return;
      }

      inst.stop();
      DOMKeyMap["delete"](inst);
      SoftKey.updateKeys();
    }
  }, {
    key: "updateKeys",
    value: function updateKeys() {
      var res = {};
      var curr = document.activeElement;

      while (curr !== document.body) {
        var inst = DOMKeyMap.get(curr);

        if (inst) {
          var keys = inst.keys;

          for (var key in keys) {
            if (!(key in res)) {
              res[key] = keys[key];
            }
          }
        }

        curr = curr.parentNode;
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = UpdateListeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var listener = _step.value;
          listener(res);
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
    }
  }]);

  return SoftKey;
}(React__default.Component);

var prefixCls$2 = 'kai-empty';

var Empty = function Empty(_ref) {
  var text = _ref.text;
  return React__default.createElement("div", {
    className: prefixCls$2
  }, React__default.createElement("p", {
    className: "".concat(prefixCls$2, "-text"),
    "data-l10n-id": text
  }));
};

var ListNav =
/*#__PURE__*/
function () {
  function ListNav(_selector, _container) {
    var _this = this;

    _classCallCheck(this, ListNav);

    _defineProperty(this, "updateItems", function () {
      var container = _this.container,
          selector = _this.selector;
      _this.items = Array.from(container.querySelectorAll(selector));
    });

    _defineProperty(this, "onKeyDown", function (e) {
      var next = null;

      switch (e.key) {
        case 'ArrowDown':
          next = _this.find(1);
          break;

        case 'ArrowUp':
          next = _this.find(-1);
          break;

        default:
          break;
      }

      _this.setFocus(next);
    });

    _defineProperty(this, "onFocus", function () {
      if (_this.currentItem) {
        // Set focus to current item if focused to list container
        // for example, back to list view from another panel
        if (document.activeElement === _this.container) {
          _this.setFocus(_this.currentItem);
        }
      } else {
        // no current item, normally focus to 1st item.
        var next = _this.find(1);

        _this.setFocus(next);
      }
    });

    _defineProperty(this, "find", function (step) {
      var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.activeElement;
      var items = _this.items;

      if (!items.length) {
        return null;
      }

      var next = 0;
      items.some(function (dom, index) {
        if (dom === el) {
          next = (items.length + index + step) % items.length;
          return true;
        }

        return false;
      });
      return items[next];
    });

    _defineProperty(this, "getElementIndex", function (el) {
      var items = _this.items;

      if (!items.length || !el) {
        return -1;
      }

      for (var i = 0; i < items.length; i++) {
        if (dom === element) {
          return i;
        }
      }

      return -1;
    });

    this.selector = _selector;
    this.container = _container;
    this.container.addEventListener('keydown', this.onKeyDown);
    this.container.addEventListener('focus', this.onFocus);
    this.index = -1;
    this.currentItem = null;
    this.updateItems();
  }

  _createClass(ListNav, [{
    key: "destroy",
    value: function destroy() {
      this.container.removeEventListener('keydown', this.onKeyDown);
      this.container.removeEventListener('focus', this.onFocus);
    }
  }, {
    key: "setFocus",
    value: function setFocus(el) {
      if (el) {
        this.currentItem = el;
        el.scrollIntoView({
          block: "nearest"
        });
        el.focus({
          preventScroll: true
        });
      }
    }
  }]);

  return ListNav;
}();

var prefixCls$3 = 'kai-list';
var ListItem = function ListItem(_ref) {
  var focusable = _ref.focusable,
      icon = _ref.icon,
      id = _ref.id,
      primary = _ref.primary,
      secondary = _ref.secondary;
  var itemCls = "".concat(prefixCls$3, "-item ").concat(focusable ? 'focusable' : '');
  var iconCls = "".concat(prefixCls$3, "-icon ").concat(icon ? '' : 'hidden');
  var lineCls = "".concat(prefixCls$3, "-line");
  var primaryCls = "".concat(prefixCls$3, "-primary");
  var secondaryCls = "".concat(prefixCls$3, "-secondary ").concat(secondary ? '' : 'hidden');
  return React__default.createElement("li", {
    className: itemCls,
    tabIndex: "-1",
    id: id
  }, React__default.createElement("div", {
    className: iconCls
  }, React__default.createElement("span", {
    "data-icon": icon
  })), React__default.createElement("div", {
    className: lineCls
  }, React__default.createElement("span", {
    className: primaryCls
  }, primary), React__default.createElement("label", {
    className: secondaryCls
  }, secondary)));
};

var List =
/*#__PURE__*/
function (_Component) {
  _inherits(List, _Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, _getPrototypeOf(List).apply(this, arguments));
  }

  _createClass(List, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.navigator = new ListNav('.focusable', this.container);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.navigator.destroy();
    }
  }, {
    key: "focus",
    value: function focus() {
      this.container && this.container.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var children = this.props.children;
      return React__default.createElement("div", {
        ref: function ref(container) {
          _this.container = container;
        },
        className: "".concat(prefixCls$3, "-container"),
        tabIndex: "-1"
      }, React__default.createElement("ul", null, children));
    }
  }]);

  return List;
}(React.Component);

var FOCUS_SELECTOR = '.kai-menu-item';

var Menu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Menu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (e) {
      var _this$props = _this.props,
          options = _this$props.options,
          onCancel = _this$props.onCancel;
      var option;

      switch (e.key) {
        case 'Enter':
          _this.close();

          option = options[+e.target.dataset.index];

          if (option && option.onSelect) {
            option.onSelect();
          }

          break;

        case 'Backspace':
          onCancel && onCancel();

          _this.close();

          e.preventDefault();
          break;

        default:
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "menuItemsOnKeyDown", function (e) {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
      }
    });

    return _this;
  }

  _createClass(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      SoftKey.register({
        left: '',
        center: 'select',
        right: ''
      }, this.el);
      this.nav = new ListNav(FOCUS_SELECTOR, this.el);
      this.lastFocus = document.activeElement;
      this.el.focus();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.nav.destroy();
      SoftKey.unregister(this.el);
    }
  }, {
    key: "focusLast",
    value: function focusLast() {
      if (this.lastFocus && this.lastFocus.offsetParent) {
        this.lastFocus.focus();
      }

      this.lastFocus = null;
    }
  }, {
    key: "close",
    value: function close() {
      this.props.close();
      this.focusLast();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          header = _this$props2.header,
          type = _this$props2.type,
          options = _this$props2.options;
      var menu = options.map(function (option, index) {
        return React__default.createElement("li", {
          key: "option-".concat(option.id),
          tabIndex: "-1",
          "data-index": index,
          className: "kai-menu-item p-pri",
          "data-icon": type ? "".concat(type, "-").concat(option.on ? 'on' : 'off') : option.submenu ? 'forward' : '',
          "data-l10n-id": option.id
        });
      });
      return React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
        ref: function ref(node) {
          _this2.el = node;
        },
        className: "kai-menu-wrapper",
        tabIndex: "-1",
        onKeyDown: this.onKeyDown
      }, React__default.createElement("div", {
        className: "kai-menu-header h1",
        "data-l10n-id": header || 'options'
      }), React__default.createElement("ul", {
        className: "kai-menu-items",
        onKeyDown: this.menuItemsOnKeyDown
      }, menu)), React__default.createElement(SoftKey, null));
    }
  }], [{
    key: "open",
    value: function open(config) {
      var div = document.createElement('div');
      div.className = 'kai-menu';
      document.body.appendChild(div);

      function render(props) {
        ReactDOM.render(React__default.createElement(Menu, props), div);
      }

      function close() {
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
        config.onClose && config.onClose();
      }

      config.onOpen && config.onOpen();
      render(_objectSpread2({}, config, {
        close: close
      }));
    }
  }]);

  return Menu;
}(React__default.Component);

var Dialog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dialog, _React$Component);

  function Dialog() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dialog)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (e) {
      var _this$props = _this.props,
          type = _this$props.type,
          onOK = _this$props.onOK,
          onCancel = _this$props.onCancel;

      switch (e.key) {
        case 'SoftLeft':
          onCancel && onCancel();

          _this.close();

          break;

        case 'Enter':
          var res = null;

          if (type === 'prompt') {
            res = _this.input.value;
          }

          onOK && onOK(res);

          _this.close();

          break;

        case 'Backspace':
          _this.close();

          e.preventDefault();
          break;

        default:
          break;
      }
    });

    return _this;
  }

  _createClass(Dialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateSoftKeys();
      this.lastFocus = document.activeElement;
      this.focus();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      SoftKey.unregister(this.el);
    }
  }, {
    key: "focusLast",
    value: function focusLast() {
      if (this.lastFocus && this.lastFocus.offsetParent) {
        this.lastFocus.focus();
      }

      this.lastFocus = null;
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this.input) {
        this.input.focus();
      } else {
        this.el.focus();
      }
    }
  }, {
    key: "updateSoftKeys",
    value: function updateSoftKeys() {
      SoftKey.register({
        left: 'cancel',
        center: 'ok',
        right: ''
      }, this.el);
    }
  }, {
    key: "close",
    value: function close() {
      this.props.close();
      this.focusLast();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          header = _this$props2.header,
          content = _this$props2.content,
          type = _this$props2.type,
          inputOptions = _this$props2.inputOptions;
      return React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
        ref: function ref(node) {
          _this2.el = node;
        },
        className: "kai-dialog-wrapper",
        tabIndex: "-1",
        onKeyDown: this.onKeyDown
      }, header ? React__default.createElement("div", {
        className: "kai-dialog-header h1",
        "data-l10n-id": header
      }) : null, React__default.createElement("div", {
        className: "kai-dialog-container ".concat(type)
      }, content ? React__default.createElement("p", {
        className: "kai-dialog-content",
        "data-l10n-id": content
      }) : null, type === 'prompt' ? React__default.createElement("input", _extends({
        ref: function ref(node) {
          _this2.input = node;
        },
        className: "kai-dialog-input"
      }, inputOptions)) : null)), React__default.createElement(SoftKey, null));
    }
  }]);

  return Dialog;
}(React__default.Component);

function show(config) {
  var div = document.createElement('div');
  div.className = 'kai-dialog';
  document.body.appendChild(div);

  function render(props) {
    ReactDOM.render(React__default.createElement(Dialog, props), div);
  }

  function close() {
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
    config.onClose && config.onClose();
  }

  config.onOpen && config.onOpen();
  render(_objectSpread2({}, config, {
    close: close
  }));
}

['info', 'confirm', 'prompt'].forEach(function (type) {
  Dialog[type] = function (props) {
    var config = _objectSpread2({
      type: type
    }, props);

    return show(config);
  };
});

exports.Dialog = Dialog;
exports.Empty = Empty;
exports.Header = Header;
exports.List = List;
exports.ListItem = ListItem;
exports.Menu = Menu;
exports.SoftKey = SoftKey;
