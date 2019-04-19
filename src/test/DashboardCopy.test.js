import {Dashboard} from '../components/dashboard/DashboardCopy'
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Link } from 'react-router-dom';
import { create } from "react-test-renderer";

configure({ adapter: new Adapter() });
it('print the initial state',() => {
  const data = new Dashboard();
  expect(data).toMatchSnapshot();
})





// const example = jest.genMockFromModule('../components/dashboard/Dashboard');
// test('should run example code', () => {
//   // creates a new mocked function with no formal arguments.
//   expect(example.function.name).toEqual('renderCheckboxPassword');
//   expect(example.function.length).toEqual(0);})

describe("Dashboard component", () => {
  test("it matches the snapshot", () => {
    const component = create(<Dashboard />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
