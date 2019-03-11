'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

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

var Button = function Button(props) {
  // eslint-disable-line
  var content = props.content ? {
    'data-icon': props.content.icon,
    'data-l10n-id': props.content.text || props.content
  } : null;
  return React__default.createElement("button", _extends({
    className: "".concat(prefixCls$1, "-btn")
  }, content));
};

var SoftKey =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SoftKey, _React$Component);

  function SoftKey(props) {
    var _this;

    _classCallCheck(this, SoftKey);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SoftKey).call(this, props));
    _this.state = {
      left: props.left || '',
      center: props.center || '',
      right: props.right || ''
    };
    return _this;
  }

  _createClass(SoftKey, [{
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
      if (!_this.currentItem) {
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
        el.scrollIntoView(false);
        el.focus();
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

exports.Header = Header;
exports.SoftKey = SoftKey;
exports.Empty = Empty;
exports.List = List;
exports.ListItem = ListItem;
