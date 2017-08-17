import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import App from '../../src/App.js';
import DataContainer from '../../src/DataContainer.js';
import DataCards from '../../src/DataCards.js';
import Search from '../../src/Search.js';
import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('App Component', () => {

  it('Render correct component when it mounts', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('Search').length).toEqual(1)
    expect(wrapper.find('DataContainer').length).toEqual(1)
  })

  it('should have a default state', () => {
    const district = new DistrictRepository(kinderData)
    const wrapper = shallow(<App />)
    const stateOfApp = wrapper.state()

    expect(stateOfApp.data).toBeDefined()
    expect(stateOfApp.data).toEqual(district.findAllMatches())
  })


})
