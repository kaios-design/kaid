import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import ListNav from '../../helper/nav/list';
import './index.scss';

const prefixCls = 'kai-list';

export const ListItem = ({ focusable, icon, id, primary, secondary }) => {
  const itemCls = `${prefixCls}-item ${focusable ? 'focusable' : ''}`;
  const iconCls = `${prefixCls}-icon ${icon ? '' : 'hidden'}`;
  const lineCls = `${prefixCls}-line`;
  const primaryCls = `${prefixCls}-primary`;
  const secondaryCls = `${prefixCls}-secondary ${secondary ? '' : 'hidden'}`;

  return (
    <li className={itemCls} tabIndex='-1' id={id}>
      <div className={iconCls}>
        <span data-icon={icon} />
      </div>
      <div className={lineCls}>
        <span className={primaryCls}>{primary}</span>
        <label className={secondaryCls}>{secondary}</label>
      </div>
    </li>
  )
};

class List extends Component {
  componentDidMount() {
    this.navigator = new ListNav('.focusable', this.container);
  }

  componentWillUnmount() {
    this.navigator.destroy();
  }

  focus() {
    this.container && this.container.focus();
  }

  render() {
    const { children } = this.props;
    return (
      <div ref={(container) => { this.container = container }}
        className={`${prefixCls}-container`} tabIndex='-1'>
        <ul>{children}</ul>
      </div>
    );
  }
}

export default List;
