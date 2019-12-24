import React from 'react';
import { shallow } from 'enzyme';
import theme from 'src/theme';
import AppBar from './AppBar';

describe('AppBar', () => {
  it('renders title when passed in', () => {
    const title = 'Title';
    const wrapper = shallow(<AppBar title={title} />);
    expect(
      wrapper.contains(<h1 className="app-bar__page-title">{title}</h1>)
    ).toEqual(true);
  });

  it('renders custom color when passed in', () => {
    const color = '#fff';
    const wrapper = shallow(<AppBar color={color} />);
    const appBarStyle = wrapper.find('.app-bar').prop('style');
    expect(appBarStyle).toHaveProperty('backgroundColor', color);
  });

  it('renders primary color when passed in', () => {
    const wrapper = shallow(<AppBar color="primary" />);
    const appBarStyle = wrapper.find('.app-bar').prop('style');
    expect(appBarStyle).toHaveProperty(
      'backgroundColor',
      theme.palette.primary
    );
  });

  it('renders with additional custom root class', () => {
    const className = 'my-app-bar';
    const wrapper = shallow(<AppBar className={className} />);
    const appBarStyle = wrapper.find('.app-bar').hasClass(className);
    expect(appBarStyle).toEqual(true);
  });
});
