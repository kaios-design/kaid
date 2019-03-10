import React from 'react';
import { shallow, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Softkey from '..';

configure({ adapter: new Adapter() });

describe('Softkey', function() {
  it('renders correctly', () => {
    const wrapper = shallow(<Softkey left="lsk" center="ok" right="rsk"/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders softkey buttons correctly', () => {
    const wrapper = shallow(<Softkey left="lsk" center="ok" right="rsk"/>);
    expect(toJson(wrapper.render())).toMatchSnapshot();
  });

  it('should have class "kai-softkey"', function() {
    expect(shallow(<Softkey />).is('.kai-softkey')).toBe(true);
  });

  it('should not able to render its children', function() {
    expect(render(<Softkey>softkey</Softkey>).text()).toEqual('');
  });
});
