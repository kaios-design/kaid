import React from 'react';
import { shallow, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Header from '..';

configure({ adapter: new Adapter() });

describe('Header', function() {
  it('renders correctly', () => {
    const wrapper = shallow(<Header text="header"/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });


  it('should have class "kai-header"', function() {
    expect(shallow(<Header />).is('.kai-header')).toBe(true);
  });

  it('should able to render its child', function() {
    expect(render(<Header>header</Header>).text()).toEqual('header');
  });
});
