import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from '../../components/About';

test('should render about page correctly', () => {
  const wrapper = shallow(<AboutPage/>);
  expect(wrapper).toMatchSnapshot();
});