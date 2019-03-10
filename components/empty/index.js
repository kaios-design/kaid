import React from 'react'; // eslint-disable-line no-unused-vars
import './index.scss';

const prefixCls = 'kai-empty';

const Empty = ({ text }) => (
  <div className={prefixCls}>
    <p className={`${prefixCls}-text`} data-l10n-id={text} />
  </div>
);

export default Empty;
