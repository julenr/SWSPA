import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import People from './People';

describe('<people />', function() {
  
  beforeEach(function(){

  });

  it('should contain a .people__flex-container element', function () {
    const wrapper = shallow(<People />);
    expect(wrapper.find('.people__flex-container')).to.have.length(1);
  });

});
