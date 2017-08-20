import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import App from '../../src/App.js';
import DataContainer from '../../src/DataContainer.js';
import DataCards from '../../src/DataCards.js';
import Search from '../../src/Search.js';
import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('DataContainer Component', () => {

  const mockData = [
    { data:
       {2004: 0.302, 2005: 0.267, 2006: 0.354, 2007: 0.392, 2008: 0.385, 2009: 0.39, 2010: 0.436, 2011: 0.489, 2012: 0.479, 2013: 0.488, 2014: 0.49},
      Location: 'ACADEMY 20',
    }
  ]

  const mockData2 = [
    { data:
       {2004: 0.302, 2005: 0.267, 2006: 0.354, 2007: 0.392, 2008: 0.385, 2009: 0.39, 2010: 0.436, 2011: 0.489, 2012: 0.479, 2013: 0.488, 2014: 0.49},
      Location: 'ACADEMY 20',
    },
    { data:
       {2004: 0.302, 2005: 0.267, 2006: 0.354, 2007: 0.392, 2008: 0.385, 2009: 0.39, 2010: 0.436, 2011: 0.489, 2012: 0.479, 2013: 0.488, 2014: 0.49},
      Location: 'COLORADO',
    }
  ]

  it('should be defined', () => {
    const wrapper = shallow(<DataContainer schoolInfo={mockData}/>)

    expect(wrapper).toBeDefined();
  })

  it('Render dataCards when it mounts', () => {
    const wrapper = shallow(<DataContainer schoolInfo={mockData}/>)

    expect(wrapper.find('DataCards')).toBeDefined();
    expect(wrapper.find('DataCards').length).toEqual(1)
  })

  it('renders the correct amount of dataCards', () => {
    const wrapper = shallow(<DataContainer schoolInfo={mockData2}/>)

    expect(wrapper.find('DataCards').length).toEqual(2)
  })
})
