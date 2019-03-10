'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var prefixCls = 'kai-header';

var Header = function Header(_ref) {
  var text = _ref.text,
      children = _ref.children;
  return React.createElement("header", {
    className: prefixCls
  }, React.createElement("h1", {
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
  return React.createElement("button", _extends({
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
      return React.createElement("form", {
        className: "".concat(prefixCls$1, " visible"),
        "data-type": "action"
      }, React.createElement(Button, {
        pos: "left",
        content: this.state.left
      }), React.createElement(Button, {
        pos: "center",
        content: this.state.center
      }), React.createElement(Button, {
        pos: "right",
        content: this.state.right
      }));
    }
  }]);

  return SoftKey;
}(React.Component);

var prefixCls$2 = 'kai-empty';

var Empty = function Empty(_ref) {
  var text = _ref.text;
  return React.createElement("div", {
    className: prefixCls$2
  }, React.createElement("p", {
    className: "".concat(prefixCls$2, "-text"),
    "data-l10n-id": text
  }));
};

exports.Header = Header;
exports.SoftKey = SoftKey;
exports.Empty = Empty;
