import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/frontpage/Frontpage';
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'

configure({ adapter: new Adapter() });

  describe('When the button is click', ()=>{

    let wrapper;
    const mockLoginfn = jest.fn();

    beforeEach(() => {
       wrapper = shallow(<Frontpage signIn={mockLoginfn}  />);
     })
    it('should be called with the email and password in the state as arguments', () => {
      //fill in email field with mario@net.com
      wrapper.find('#email').simulate(
        'change',
        {target:
          {id: 'email', value: 'mario@net.com'}

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
      wrapper.find('#loginForm').simulate(
        'submit',
        {preventDefault() {}}
      )

      //test to see arguments used after its been submitted
      expect(mockLoginfn.mock.calls[0][0]).toEqual(
        {email: 'mario@net.com', password: 'test1234'}
      )
    })
  })
