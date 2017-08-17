import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import App from '../../src/App.js';
import DataContainer from '../../src/DataContainer.js';
import DataCards from '../../src/DataCards.js';
import Search from '../../src/Search.js';

describe('DataCards Component', () => {

  it('Render correct component when it mounts', () => {
    const wrapper = shallow(<DataCards />)

  })

})
