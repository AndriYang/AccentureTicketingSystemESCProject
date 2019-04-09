// import React from 'react';
// import ReactDOM from 'react-dom';
// import {guesscustomerquery} from '../components/customerquery/guesscustomerquery';
// import renderer from 'react-test-renderer'
import {shallow} from 'enzyme';
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import configureStore from 'redux-mock-store'
//
configure({ adapter: new Adapter() });
//
//   describe('When the button is click', ()=>{
//
//     let wrapper;
//     const mockLoginfn = jest.fn();
//     const togglefn = jest.fn();
//     const createMessageListenerfn = jest.fn()
//
//     test('username check', () => {
//       wrapper = shallow(<guesscustomerquery createTicket={mockLoginfn} toggle={togglefn}
//         createMessageListener={createMessageListenerfn} createUser={jest.fn()}
//         fetchAuthToken={jest.fn()} fetchPreviousMessages={jest.fn()} handleChange={jest.fn()}
//         handleChangeCaseID={jest.fn()} handleClick={jest.fn()} handleNewUserMessage={jest.fn()}
//         handleProgress={jest.fn()} handleSubmit={jest.fn()} handleSubmitCaseID={jest.fn()} handleUploadError={jest.fn()}
//         handleUploadStart={jest.fn()} handleUploadSuccess={jest.fn()} renderChatBot={jest.fn()} enqueueForceUpdate={jest.fn()}
//         enqueueReplaceState={jest.fn()} enqueueSetState={jest.fn()} isMounted={jest.fn()}/>);
//       wrapper.find('Title').simulate('change', {target:
//       {id: 'title', value:'IT'}
//     });
//     expect(wrapper.state('title')).toEqual('IT');
//     })
// })
//
//   it('print the initial state',() => {
//     const data = new guesscustomerquery();
//     expect(data).toMatchSnapshot();
//   })

import React from 'react';
import {guesscustomerquery} from '../components/customerquery/guesscustomerquery';
import { mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe("guesscustomerquery", () => {
  let props;
  let mountedQuery;
  const guesscustomerquery =() => {
    if (!mountedQuery) {
      mountedQuery = mount(
        <guesscustomerquery {...props} />
      );
    }
    return mountedQuery;
  }

  beforeEach(() => {
    props ={
      authorFirstName: undefined,
      authorLastName: undefined,
      authorId: undefined,
      sel: undefined,
      title: undefined,
      content: undefined,
      email:undefined,
      image: undefined,
      imageURL: undefined,
      phone: undefined,
      caseId:undefined,
      toggle:undefined,
      solveStatus:undefined,
      addFormVisible: undefined
    };
    mountedQuery = undefined;
  });

  //All tests
  it("always renders a div", () => {
    const divs = guesscustomerquery().find("div");
    expect(divs.length).toBeGreaterThan(-1);
  });

  // describe("the rendered div", () => {
  //   it("contains everything else that gets rendered",() => {
  //     const divs = guesscustomerquery().find("div");
  //     const wrappingDiv = divs.first();
  //     expect(wrappingDiv.children()).toEqual(guesscustomerquery().children());
  //   })
  // })
  //
  // it("always renders a 'daf'",() => {
  //   expect(guesscustomerquery().find("Drawer").length).toBe(1);
  // })
  describe("when 'toggle' is undefined",() => {
    beforeEach(() =>{
      props.toggle = jest.fn();
      props.onRequestClose = jest.fn();
    });

    it("set the rendered 'Drawer's 'open' prop to undefined", () =>{
      const toggleToBeSeen = guesscustomerquery().find('Drawer');
      expect(toggleToBeSeen.onRequestClose).not.toBeDefined();
    })
  })

  it('should have props for authorFirstName and authorLastName', function () {
    const wrapper = shallow(<guesscustomerquery/>);
    expect(wrapper.props().authorFirstName).toBeDefined;
    expect(wrapper.props().authorLastName).toBeDefined;
  });

  it('should have props for authorId and sel', function () {
    const wrapper = shallow(<guesscustomerquery/>);
    expect(wrapper.props().authorId).toBeDefined;
    expect(wrapper.props().sel).toBeDefined;
  });

  it('should have props for title and content', function () {
    const wrapper = shallow(<guesscustomerquery/>);
    expect(wrapper.props().title).toBeDefined;
    expect(wrapper.props().content).toBeDefined;
  });

  it('should have props for email and image', function () {
    const wrapper = shallow(<guesscustomerquery/>);
    expect(wrapper.props().email).toBeDefined;
    expect(wrapper.props().image).toBeDefined;
  });

  it('should have props for imageURL and phone', function () {
    const wrapper = shallow(<guesscustomerquery/>);
    expect(wrapper.props().imageURL).toBeDefined;
    expect(wrapper.props().phone).toBeDefined;
  });

  it('should have props for caseId and toggle', function () {
    const wrapper = shallow(<guesscustomerquery/>);
    expect(wrapper.props().caseId).toBeDefined;
    expect(wrapper.props().toggle).toBeDefined;
  });

  it('should have props for solveStatus and addFormVisible', function () {
    const wrapper = shallow(<guesscustomerquery/>);
    expect(wrapper.props().solveStatus).toBeDefined;
    expect(wrapper.props().addFormVisible).toBeDefined;
  });

  it('should have props for handleChange and handleClick', function () {
    const wrapper = shallow(<guesscustomerquery/>);
    expect(wrapper.props().handleChange).toBeDefined;
    expect(wrapper.props().handleClick).toBeDefined;
  });

  it('should have props for toggle and handleSubmit', function () {
    const wrapper = shallow(<guesscustomerquery/>);
    expect(wrapper.props().toggle).toBeDefined;
    expect(wrapper.props().handleSubmit).toBeDefined;
  });

  it('should have props for renderChatBot and componentDidMount', function () {
    const wrapper = shallow(<guesscustomerquery/>);
    expect(wrapper.props().renderChatBot).toBeDefined;
    expect(wrapper.props().componentDidMount).toBeDefined;
  });

  it('should have props for fetchAuthToken and createUser', function () {
    const wrapper = shallow(<guesscustomerquery/>);
    expect(wrapper.props().fetchAuthToken).toBeDefined;
    expect(wrapper.props().createUser).toBeDefined;
  });

  it('should have props for createMessageListener and fetchPreviousMessages', function () {
    const wrapper = shallow(<guesscustomerquery/>);
    expect(wrapper.props().createMessageListener).toBeDefined;
    expect(wrapper.props().fetchPreviousMessages).toBeDefined;
  });

  it('should have props for handleNewUserMessage and handleChangeCaseID', function () {
    const wrapper = shallow(<guesscustomerquery/>);
    expect(wrapper.props().handleNewUserMessage).toBeDefined;
    expect(wrapper.props().handleChangeCaseID).toBeDefined;
  });

  it('should have props for handleSubmitCaseID and componentWillUnmount', function () {
    const wrapper = shallow(<guesscustomerquery/>);
    expect(wrapper.props().handleSubmitCaseID).toBeDefined;
    expect(wrapper.props().componentWillUnmount).toBeDefined;
  });

  it('should have props for handleUploadStart and handleUploadSuccess', function () {
    const wrapper = shallow(<guesscustomerquery/>);
    expect(wrapper.props().handleUploadStart).toBeDefined;
    expect(wrapper.props().handleUploadSuccess).toBeDefined;
  });

  it('should have an initial email state', function () {
    const wrapper = mount(<guesscustomerquery/>).get(0);
    expect(wrapper.email).toEqual(undefined);
  });
})
