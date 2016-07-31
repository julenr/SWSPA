import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';

import AppConnected, { App } from './App';
import Home from '../Home';

describe('<App />', function() {
  
  beforeEach(function(){

  });

  it('should contain a .main-content element', function () {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.main-content')).to.have.length(1);
  });

});
