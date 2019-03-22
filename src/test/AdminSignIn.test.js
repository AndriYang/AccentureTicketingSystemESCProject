import React from 'react';
import {shallow} from 'enzyme';
import {AdminSignIn} from '../components/auth/AdminSignIn';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'

configure({ adapter: new Adapter() });

  describe('When the form is submitted', ()=>{

    let wrapper;
    const mockLoginfn = jest.fn();

    beforeEach(() => {
       wrapper = shallow(<AdminSignIn adminsignIn={mockLoginfn}  />);
     })
    it('should be called with the email and password in the state as arguments', () => {
      //fill in email field with mario@net.com
      wrapper.find('#email').simulate(
        'change',
        {target:
          {id: 'email', value: '100@accenture.com'}

        }
      )

      //fill in password field with test1234
      wrapper.find('#password').simulate(
        'change',
        {target:
          {id: 'password', value: 'test1234'}

        }
      )

      //simulate from submission
      wrapper.find('#adminLoginForm').simulate(
        'submit',
        {preventDefault() {}}
      )
      console.log(mockLoginfn.mock.calls[0][0]);
      //test to see arguments used after its been submitted
      expect(mockLoginfn.mock.calls[0][0]).toEqual(
        {email: '100@accenture.com', password: 'test1234'}
      )
    })
  })
