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

export default class SoftKey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: props.left || '',
      center: props.center || '',
      right: props.right || ''
    };
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
}