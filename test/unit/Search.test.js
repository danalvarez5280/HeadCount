import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import App from '../../src/App.js';
import DataContainer from '../../src/DataContainer.js';
import DataCards from '../../src/DataCards.js';
import Search from '../../src/Search.js';

describe('Search Component', () => {

  it('Render correct component when it mounts', () => {
    const wrapper = shallow(<Search />)

    expect(wrapper).toBeDefined()
  })

  it('should render an input field', () => {
    const wrapper = shallow(<Search />)

    expect(wrapper.find('input')).toBeDefined()
  })

  it('should fire a function onChange', () => {
    const mockFn = jest.fn()
    const wrapper = mount(<Search handleChange={mockFn}/>)
    const inputField = wrapper.find('.search')
    wrapper.instance().findAllMatches = mockFn

    expect(mockFn).toHaveBeenCalledTimes(0);

    wrapper.update()

    inputField.simulate('change', {target: {value: 'COLORADO'} })
    expect(wrapper.instance().findAllMatches).toHaveBeenCalledTimes(1)

  })



})
