import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import Navbar from './components/Navbar';

it('Should render Navbar', ()=>{
  const wrapper = shallow(<App />)
  const navbar = wrapper.find(Navbar)
  
  expect(navbar.exists()).toBe(true)

})

it('Should render Modal', ()=>{
  const wrapper = shallow(<App />)
  const modal = wrapper.find(Modal)
  
  expect(modal.exists()).toBe(true)

})
