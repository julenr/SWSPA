import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import Home from './Home';

describe('<Home />', function() {
  
  beforeEach(function(){

  });

  it('should contain a .home__flex-container element', function () {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('.home__flex-container')).to.have.length(1);
  });

});
