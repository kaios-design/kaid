import React from 'react';
import ReactDOM from 'react-dom';

import SoftKey from '../softkey';
import './index.scss';

class Dialog extends React.Component {
  componentDidMount() {
    this.updateSoftKeys();

    this.lastFocus = document.activeElement;
    this.focus();
  }

  componentWillUnmount() {
    SoftKey.unregister(this.el);
  }

  focusLast() {
    if (this.lastFocus && this.lastFocus.offsetParent) {
      this.lastFocus.focus();
    }
    this.lastFocus = null;
  }

  focus() {
    if (this.input) {
      this.input.focus();
    } else {
      this.el.focus();
    }
  }

  onKeyDown = e => {
    const { type, onOK, onCancel } = this.props;
    switch (e.key) {
      case 'SoftLeft':
        onCancel && onCancel();
        this.close();
        break;

      case 'Enter':
        let res = null;
        if (type === 'prompt') {
          res = this.input.value;
        }
        onOK && onOK(res);
        this.close();
        break;

      case 'Backspace':
        this.close();
        e.preventDefault();
        break;

      default:
        break;
    }
  };

  updateSoftKeys() {
    SoftKey.register({ left: 'cancel', center: 'ok', right: '' }, this.el);
  }

  close() {
    this.props.close();
    this.focusLast();
  }

  render() {
    const { header, content, type, inputOptions } = this.props;
    return (
      <>
        <div
          ref={node => { this.el = node }}
          className="kai-dialog-wrapper"
          tabIndex="-1" onKeyDown={this.onKeyDown}
        >
          {header ? <div className="kai-dialog-header h1" data-l10n-id={header} /> : null}
          <div className={`kai-dialog-container ${type}`}>
            {content ? <p className="kai-dialog-content" data-l10n-id={content} /> : null}
            {
              type === 'prompt' ?
                <input
                  ref={(node) => { this.input = node; }}
                  className="kai-dialog-input"
                  {...inputOptions}
                /> : null
            }
          </div>
        </div>
        <SoftKey />
      </>
    );
  }
}

function show(config) {
  const div = document.createElement('div');
  div.className = 'kai-dialog';
  document.body.appendChild(div);

  function render(props) {
    ReactDOM.render(<Dialog {...props} />, div);
  }

  function close() {
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
    config.onClose && config.onClose();
  }

  config.onOpen && config.onOpen();
  render({ ...config, close });
}

['info', 'confirm', 'prompt'].forEach(type => {
  Dialog[type] = function (props) {
    const config = {
      type,
      ...props
    };
    return show(config);
  };
});

export default Dialog;
