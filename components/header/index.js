import React from 'react'; // eslint-disable-line no-unused-vars
import './index.scss';

const prefixCls = 'kai-header';

const Header = ({ text, children }) => (
  <header className={prefixCls}>
    <h1 className="h1" data-l10n-id={text}>
      {children}
    </h1>
  </header>
);

export default Header;
