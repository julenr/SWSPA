import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import Species from './Species';

describe('<Species />', function() {
  
  beforeEach(function(){

  });

  it('should contain a .species-container element', function () {
    const wrapper = shallow(<Films />);
    expect(wrapper.find('.species__flex-container')).to.have.length(1);
  });

});
