import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import Films from './Films';

describe('<Films />', function() {
  
  beforeEach(function(){

  });

  it('should contain a .films__flex-container element', function () {
    const wrapper = shallow(<Films />);
    expect(wrapper.find('.films__flex-container')).to.have.length(1);
  });

});
