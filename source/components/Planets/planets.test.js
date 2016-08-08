import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import People from './Planets';

describe('<Planets />', function() {
  
  beforeEach(function(){

  });

  it('should contain a .planets__flex-container element', function () {
    const wrapper = shallow(<People />);
    expect(wrapper.find('.planets__flex-container')).to.have.length(1);
  });

});
