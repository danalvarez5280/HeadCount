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

  it('Render correct component when it mounts', () => {
    const wrapper = shallow(<DataContainer />)

    expect(wrapper.find('DataCards').length).toEqual(1)
  })

})
