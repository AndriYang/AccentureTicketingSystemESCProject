import React from 'react';
import ReactDOM from 'react-dom';
import {guesscustomerquery} from '../components/customerquery/guesscustomerquery';
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'

configure({ adapter: new Adapter() });

  describe('When the button is click', ()=>{

    let wrapper;
    const mockLoginfn = jest.fn();
    const togglefn = jest.fn();
    const createMessageListenerfn = jest.fn()

    test('username check', () => {
      wrapper = shallow(<guesscustomerquery createTicket={mockLoginfn} toggle={togglefn}
        createMessageListener={createMessageListenerfn} createUser={jest.fn()}
        fetchAuthToken={jest.fn()} fetchPreviousMessages={jest.fn()} handleChange={jest.fn()}
        handleChangeCaseID={jest.fn()} handleClick={jest.fn()} handleNewUserMessage={jest.fn()}
        handleProgress={jest.fn()} handleSubmit={jest.fn()} handleSubmitCaseID={jest.fn()} handleUploadError={jest.fn()}
        handleUploadStart={jest.fn()} handleUploadSuccess={jest.fn()} renderChatBot={jest.fn()} enqueueForceUpdate={jest.fn()}
        enqueueReplaceState={jest.fn()} enqueueSetState={jest.fn()} isMounted={jest.fn()}/>);
      wrapper.find('Title').simulate('change', {target:
      {id: 'title', value:'IT'}
    });
    expect(wrapper.state('title')).toEqual('IT');
    })
})

  it('print the initial state',() => {
    const data = new guesscustomerquery();
    expect(data).toMatchSnapshot();
  })
