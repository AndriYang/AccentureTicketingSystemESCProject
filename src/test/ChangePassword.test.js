import React from 'react';
import {shallow} from 'enzyme';
import {ChangePassword} from '../components/auth/ChangePassword';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'

configure({ adapter: new Adapter() });

  test('When the form is submitted', ()=>{
    const mockLoginfn = {push: jest.fn()};
    const change =jest.fn();
    const comp =(
      <ChangePassword history={mockLoginfn} changePassword={change}/>
    );
    const wrapper = shallow(comp);
    const oldPassword = wrapper.find('input').at(0);
    const newPassword = wrapper.find('input').at(1);
    const submitForm = wrapper.find('form');

    oldPassword.simulate('change', {target:
      {id: 'password', value: 'test1234'}
    })

    newPassword.simulate('change', {target:
      {id: 'newPassword', value: '1234test'}
    })

    submitForm.simulate('submit', {preventDefault() {}})
    expect(change.mock.calls[0][0]).toEqual(
      {password: 'test1234', newPassword: '1234test'}
    )
  })

  it('Check password setState ', ()=> {
    const mockLoginfn = {push: jest.fn()};
    const change =jest.fn();
    const comp =(
      <ChangePassword history={mockLoginfn} changePassword={change}/>
    );
    const wrapper = shallow(comp);
    const oldPassword = wrapper.find('input').at(0);
    oldPassword.simulate('change', {target:
      {id: 'password', value: 'test1234'}
    })

    expect(wrapper.state('password')).toEqual('test1234');
  })

  it('Check new password setState ', ()=> {
    const mockLoginfn = {push: jest.fn()};
    const change =jest.fn();
    const comp =(
      <ChangePassword history={mockLoginfn} changePassword={change}/>
    );
    const wrapper = shallow(comp);
    const oldPassword = wrapper.find('input').at(0);
    oldPassword.simulate('change', {target:
      {id: 'newPassword', value: '1234test'}
    })

    expect(wrapper.state('newPassword')).toEqual('1234test');
  })

  it('print the initial state',() => {
    const data = new ChangePassword();
    expect(data).toMatchSnapshot();
  })

  it('print the state',() => {
    const data = new ChangePassword({password: 'test1234',
    newPassword: '1234test'});

    expect(data).toMatchSnapshot();
  })
