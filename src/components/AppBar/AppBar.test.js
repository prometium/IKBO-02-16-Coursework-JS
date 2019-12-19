import React from 'react';
import { shallow } from 'enzyme';
import AppBar from './AppBar';

describe('AppBar', () => {
  it('renders without crashing', () => {
    shallow(<AppBar />);
  });

  it('renders title when passed in', () => {
    const title = 'Title';
    const wrapper = shallow(<AppBar title={title} />);
    expect(
      wrapper.contains(<h1 className="app-bar__page-title">{title}</h1>)
    ).toEqual(true);
  });

  it('renders custom color when passed in', () => {
    const color = '#fff';
    const contrastColor = '#000';
    const wrapper = shallow(<AppBar color={color} />);
    const appBarStyle = wrapper.find('.app-bar').prop('style');
    expect(appBarStyle).toHaveProperty('backgroundColor', color);
    expect(appBarStyle).toHaveProperty('color', contrastColor);
  });
});
