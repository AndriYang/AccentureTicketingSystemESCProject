import React from 'react';
import ReactDOM from 'react-dom';
import {CreateProject} from '../components/projects/CreateProject';
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
       wrapper = shallow(<CreateProject createProject={mockLoginfn}  />);
     })
    it('should be called with the sel, title and content in the state as arguments', () => {
      //fill in email field with mario@net.com
      wrapper.find('#sel').simulate(
        'change',
        {target:
          {id: 'sel', value: 'IT'}

        }
      )

      //fill in password field with test1234
      wrapper.find('#title').simulate(
        'change',
        {target:
          {id: 'title', value: 'React project'}

        }
      )

      wrapper.find('#content').simulate(
        'change',
        {target:
          {id: 'content', value: 'happy'}

        }
      )



      //simulate from submission
      wrapper.find('#createForm').simulate(
        'submit',
        {preventDefault() {},.push('/dashboard'){}
      }
      )

      //test to see arguments used after its been submitted
      expect(mockLoginfn.mock.calls[0][0]).toEqual(
        {sel: 'IT', title: 'React project', content: 'happy' }
      )
    })
  })
