import React from 'react';
import ReactDOM from 'react-dom';

import SoftKey from '../softkey';
import ListNav from '../../helper/nav/list';
import './index.scss';

const FOCUS_SELECTOR = '.kai-menu-item';

class Menu extends React.Component {
  componentDidMount() {
    SoftKey.register({ left: '', center: 'select', right: '' }, this.el);
    this.nav = new ListNav(FOCUS_SELECTOR, this.el);

    this.lastFocus = document.activeElement;
    this.el.focus();
  }

  componentWillUnmount() {
    this.nav.destroy();
    SoftKey.unregister(this.el);
  }

  focusLast() {
    if (this.lastFocus && this.lastFocus.offsetParent) {
      this.lastFocus.focus();
    }
    this.lastFocus = null;
  }

  onKeyDown = e => {
    const { options } = this.props;
    let option;
    switch (e.key) {
      case 'Enter':
        option = options[+e.target.dataset.index];
        if (option && option.callback) {
          option.callback();
        }
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

  close() {
    this.props.close();
    this.focusLast();
  }

  render() {
    const { header, type, options } = this.props;
    const menu = options.map((option, index) => (
      <li
        key={`option-${option.id}`}
        tabIndex="-1"
        data-index={index}
        className="kai-menu-item p-pri"
        data-icon={type ? `${type}-${option.on ? 'on' : 'off'}` : option.submenu ? 'forward' : ''}
        data-l10n-id={option.id}
      />
    ));
    return (
      <>
        <div ref={(node) => { this.el = node }} className="kai-menu-wrapper" tabIndex="-1" onKeyDown={this.onKeyDown}>
          <div className="kai-menu-header h1" data-l10n-id={header || 'options'} />
          <ul>{menu}</ul>
        </div>
        <SoftKey />
      </>
    );
  }

  static open(config) {
    const div = document.createElement('div');
    div.className = 'kai-menu';
    document.body.appendChild(div);

    function render(props) {
      ReactDOM.render(<Menu {...props} />, div);
    }

    function close() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
      config.onClose && config.onClose();
    }

    config.onOpen && config.onOpen();
    render({ ...config, close });
  }
}

export default Menu;
