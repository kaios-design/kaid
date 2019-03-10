import React from 'react';
import { shallow, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Empty from '..';

configure({ adapter: new Adapter() });

describe('Empty view', function() {
  it('renders correctly', () => {
    const wrapper = shallow(<Empty text="empty"/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });


  it('should have class "kai-empty"', function() {
    expect(shallow(<Empty />).is('.kai-empty')).toBe(true);
  });

  it('should not able to render its children', function() {
    expect(render(<Empty>empty</Empty>).text()).toEqual('');
  });
});
