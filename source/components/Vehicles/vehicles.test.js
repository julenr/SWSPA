import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import Vehicles from './Vehicles';

describe('<Vehicles />', function() {
  
  beforeEach(function(){

  });

  it('should contain a .Vehicles__flex-container element', function () {
    const wrapper = shallow(<Vehicles />);
    expect(wrapper.find('.Vehicles__flex-container')).to.have.length(1);
  });

});
