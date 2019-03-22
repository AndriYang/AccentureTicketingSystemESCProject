import React from 'react';
import {shallow} from 'enzyme';
import {SignedInLink} from '../components/layout/SignedInLink';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { NavLink } from 'react-router-dom';
import { expect } from 'chai';

configure({ adapter: new Adapter() });

  describe('When the form is submitted', ()=>{
    it("Contains correct passed prop", () => {
      const comp =(
        <SignedInLink />
      );
      const wrapper = shallow(comp);
      expect(wrapper.find(NavLink).first().props().to).to.equal('/create');
      expect(wrapper.find(NavLink).at(1).props().to).to.equal('/');
      expect(wrapper.find(NavLink).at(2).props().to).to.equal('/todo');
    })



  })
