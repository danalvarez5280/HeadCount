import React from 'react';
import ReactDOM from 'react-dom';
import DistrictCompare from '../../src/DistrictCompare';
import { mount, shallow } from 'enzyme';
// import DistrictRepository from '../../src/DistrictCompare';
// import kinderData from '../../data/kindergartners_in_full_day_program'

describe('DistrictCompare', () => {

  let wrapper;
  let mockFn;
  const mockData = [
    { data:
      {2004: 0.302, 2005: 0.267, 2006: 0.354, 2007: 0.392, 2008: 0.385, 2009: 0.39, 2010: 0.436, 2011: 0.489, 2012: 0.479, 2013: 0.488, 2014: 0.49},
      location: 'ACADEMY 20',
    },
    { data:
      {2004: 0.24, 2005: 0.278, 2006: 0.337, 2007: 0.395, 2008: 0.536, 2009: 0.598, 2010: 0.64, 2011: 0.672, 2012: 0.695, 2013: 0.703, 2014: 0.741},
      location: 'COLORADO',
    }
  ]

  beforeEach(() => {
    mockFn = jest.fn()
    wrapper = shallow(<DistrictCompare comparisonData={mockData} handleReset={mockFn} />)
  })

  it('Should exist', () => {

    expect(wrapper).toBeDefined()
  })

  it('should render correct HTML elements', () => {

    expect(wrapper.find('div').length).toEqual(2)
    expect(wrapper.find('button').length).toEqual(1)
    expect(wrapper.find('p').length).toEqual(3)
    expect(wrapper.find('.district-compare')).toBeDefined()
    expect(wrapper.find('.comp-info')).toBeDefined()
    expect(wrapper.find('.reset-btn')).toBeDefined()
  })

  it('should render cards with correct data information', () => {

    expect(wrapper.find('.dist-one').text()).toEqual('ACADEMY 20: 0.407')
    expect(wrapper.find('.dist-two').text()).toEqual('COLORADO: 0.53')
    expect(wrapper.find('.compare-val').text()).toEqual('Comparison Data: 0.768')
  })

  it('should fire handleReset function onClick of reset-btn', () => {
    const button = wrapper.find('.reset-btn')
    wrapper.instance().handleReset = mockFn

    expect(mockFn).toHaveBeenCalledTimes(0)
    wrapper.update()
    button.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

})
