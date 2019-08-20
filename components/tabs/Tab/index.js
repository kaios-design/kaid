import React from 'react';

import './index.scss';

const prefixCls = 'kai-tab';

export default class Index extends React.Component {
  handleClick = () => {
    const {index, onTabChange} = this.props;
    onTabChange(index);
  };

  render() {
    const {label, isActive, focusColor} = this.props;
    const actPrefixCls = `${prefixCls}${isActive ? '-active' : '-inactive'}`;
    return (
      <div
        onClick={this.handleClick}
        className={actPrefixCls}
        style={{'--tab-underline-color': focusColor}}
      >
        <div className={`${actPrefixCls}-label`} data-l10n-id={label}/>
      </div>
    )
  }
}
