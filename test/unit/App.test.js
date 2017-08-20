import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import App from '../../src/App.js';
import DataContainer from '../../src/DataContainer.js';
import DataCards from '../../src/DataCards.js';
import Search from '../../src/Search.js';
import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictCompare from '../../src/DistrictCompare.js';

describe('App Component', () => {

  it('Render correct components when it mounts', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('Search').length).toEqual(1)
    expect(wrapper.find('DataContainer').length).toEqual(2)
  })

  it('should have a default state', () => {
    const district = new DistrictRepository(kinderData)
    const wrapper = shallow(<App />)
    const stateOfApp = wrapper.state()

    expect(stateOfApp.data).toBeDefined()
    expect(stateOfApp.data).toEqual(district.findAllMatches())
    expect(stateOfApp.data.length).toEqual(181)
    expect(stateOfApp.compare).toBeDefined()
    expect(stateOfApp.compare).toEqual([])
  })

  it('should only render DistrictCompare when state of compare array has a length of 2', () => {
    const wrapper = shallow(<App />)
    const mockData = [
      {location: 'COLORADO', data: {2004: 0.35}},
      {location: 'ARAPAHOE', data: {2004: 0.48}}
    ]

    expect(wrapper.find('DistrictCompare').length).toEqual(0)
    wrapper.setState({compare: mockData})
    expect(wrapper.state().compare.length).toEqual(2)
    expect(wrapper.find('DistrictCompare').length).toEqual(1)
  })

  it.skip('should push districtCards into compmare array', () => {
    const application = new App
    const wrapper = shallow(<App />)
    const mockData = [
      {location: 'COLORADO', data: {2004: 0.35} }
    ]

    expect(wrapper.state().compare.length).toEqual(0)
    application.compareDistricts(mockData.location)
    expect(wrapper.state().compare.length).toEqual(1)
  })


})
