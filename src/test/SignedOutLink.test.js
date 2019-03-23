import React from 'react';
import {shallow} from 'enzyme';
import {SignedOutLink} from '../components/layout/SignedOutLink';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { NavLink } from 'react-router-dom';
import { expect } from 'chai';

configure({ adapter: new Adapter() });

  describe('When the form is submitted', ()=>{
    it("Contains correct passed prop", () => {
      const comp =(
        <SignedOutLink />
      );
      const wrapper = shallow(comp);
      expect(wrapper.find(NavLink).first().props().to).to.equal('/aboutus');
      expect(wrapper.find(NavLink).last().props().to).to.equal('/signin');
    })
  })
