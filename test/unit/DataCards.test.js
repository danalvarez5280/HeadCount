import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import App from '../../src/App';
import DataContainer from '../../src/DataContainer';
import DataCards from '../../src/DataCards';
import Search from '../../src/Search';
import DistrictRepository from '../../src/helper'
import kinderData from '../../data/kindergartners_in_full_day_program'

const district = new DistrictRepository(kinderData)

describe('DataCards Component', () => {
  let wrapper;
  let mockFn;
  beforeEach( () => {
    mockFn = jest.fn()
    wrapper = shallow(<DataCards location={district.data.Colorado.Location} yearData={district.data.Colorado.data} compareDistricts={mockFn}/>)
  })

  it('should exist', () => {

    expect(wrapper).toBeDefined()
  })

  it('rendering correct information on cards', () => {
    wrapper.update()

    expect(wrapper.find('h2').length).toEqual(1)
    // expect(wrapper.find('h2').text()).toEqual('COLORADO')
  })

  it('should fire compareDistricts onClick', () => {
    const cardClass = wrapper.find('.data-card')

    wrapper.instance().compareDistricts = mockFn
    expect(mockFn).toHaveBeenCalledTimes(0);
    wrapper.update();
    cardClass.simulate('click');
    expect(wrapper.instance().compareDistricts).toHaveBeenCalledTimes(1)
    cardClass.simulate('click');
    expect(wrapper.instance().compareDistricts).toHaveBeenCalledTimes(2)
  })

})
