import React from 'react';
import './index.scss';

const prefixCls = 'kai-softkey';

const Button = (props) => {  // eslint-disable-line
  const content = props.content
    ? {
      'data-icon': props.content.icon,
      'data-l10n-id': props.content.text || props.content
    }
    : null;

  return <button className={`${prefixCls}-btn`} {...content} />;
};

const DOMKeyMap = new Map();
const UpdateListeners = new Set();

export default class SoftKey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: props.left || '',
      center: props.center || '',
      right: props.right || ''
    };
  }

  componentDidMount() {
    UpdateListeners.add(this.handleUpdate);
  }

  componentWillUpdate(nextProps, nextState) {
    let buttons = Array.from(this.element.getElementsByTagName('button'));
    buttons.forEach((button) => {
      if (!nextState[button.dataset.position]) {
        // Remove old l10n if the next l10n id is empty.
        button.textContent = '';
      }
    });
  }

  componentWillUnmount() {
    UpdateListeners.delete(this.handleUpdate);
  }

  handleUpdate = (keys) => {
    this.setState(keys);
  }

  render() {
    return (
      <form className={`${prefixCls} visible`} data-type="action">
        <Button pos="left" content={this.state.left} />
        <Button pos="center" content={this.state.center} />
        <Button pos="right" content={this.state.right} />
      </form>
    );
  }

  static register(keys, el) {
    let inst = DOMKeyMap.get(el);
    if (inst) {
      inst.update(keys);
    } else {
      inst = {
        start() {
          el.addEventListener('focus', this.check, true);
          this.update(keys);
        },

        stop() {
          el.removeEventListener('focus', this.check, true);
        },

        check() {
          const curr = document.activeElement;
          if (curr === el || el.contains(curr)) {
            SoftKey.updateKeys();
          }
        },

        update(keys) {
          this.keys = keys;
          this.check();
        }
      };
      DOMKeyMap.set(el, inst);
      inst.start();
    }
  }

  static unregister(el) {
    const inst = DOMKeyMap.get(el);
    if (!inst) {
      return;
    }
    inst.stop();
    DOMKeyMap.delete(inst);
    SoftKey.updateKeys();
  }

  static updateKeys() {
    const res = {};
    let curr = document.activeElement;
    while (curr !== document.body) {
      const inst = DOMKeyMap.get(curr);
      if (inst) {
        const { keys } = inst;
        for (let key in keys) {
          if (!(key in res)) {
            res[key] = keys[key];
          }
        }
      }
      curr = curr.parentNode;
    }

    for (let listener of UpdateListeners) {
      listener(res);
    }
  }
}
