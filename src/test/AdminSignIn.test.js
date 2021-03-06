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

      wrapper.find('#email').simulate(
        'change',
        {target:
          {id: 'emailError', value: false}

        }
      )

      wrapper.find('#email').simulate(
        'change',
        {target:
          {id: 'count', value: '1'}

        }
      )

      wrapper.find('#email').simulate(
        'change',
        {target:
          {id: 'countError', value: false}

        }
      )

      //fill in password field with test1234
      wrapper.find('#password').simulate(
        'change',
        {target:
          {id: 'password', value: 'test1234'}

        }
      )

      wrapper.find('#password').simulate(
        'change',
        {target:
          {id: 'passwordError', value: false}

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
        {email: '100@accenture.com', emailError: false, count:'1', countError: false, password: 'test1234', passwordError: false}
      )
    })

    it('check email setState', () => {
      //fill in email field with mario@net.com
      wrapper = shallow(<AdminSignIn adminsignIn={mockLoginfn}  />);
      wrapper.find('#email').simulate(
        'change',
        {target:
          {id: 'email', value: '100@accenture.com'}
        }
      )
      expect(wrapper.state('email')).toEqual('100@accenture.com');
  })

  it('check password setState', () => {

    wrapper = shallow(<AdminSignIn adminsignIn={mockLoginfn}  />);
    wrapper.find('#password').simulate(
      'change',
      {target:
        {id: 'password', value: 'test1234'}
      }
    )
    expect(wrapper.state('password')).toEqual('test1234');
  })
})
