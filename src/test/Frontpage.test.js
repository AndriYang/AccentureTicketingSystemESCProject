import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {Frontpage} from '../components/frontpage/Frontpage';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Link } from 'react-router-dom';
import { create } from "react-test-renderer";

configure({ adapter: new Adapter() });
describe('Number of', ()=> {
  const wrapper = shallow(<Frontpage />);

  it('Link and its content', function() {
    expect(wrapper.find('Link').length).toBe(2);
    expect(wrapper.find('Link').at(1).text()).toBe('<Link />');
    expect(wrapper.find(Link).first().props().to).toBe('/admin');
    expect(wrapper.find(Link).at(1).props().to).toBe('/guesscustomerquery');
  });

  it('Link directed to', function() {
    expect(wrapper.find(Link).first().props().to).toBe('/admin');
    expect(wrapper.find(Link).at(1).props().to).toBe('/guesscustomerquery');
  });
})

describe("guesscustomerquery component", () => {
  test("it matches the snapshot", () => {
    const component = create(<guesscustomerquery />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
