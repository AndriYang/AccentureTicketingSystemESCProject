import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {About} from '../components/frontpage/About';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Link } from 'react-router-dom'


configure({ adapter: new Adapter() });
describe('Number of', ()=> {
  const wrapper = shallow(<About />);

  it('h1', function() {
    expect(wrapper.find('h1').length).toBe(1);

  });
  it('h4', function() {
    expect(wrapper.find('h4').length).toBe(5);
  });
})
