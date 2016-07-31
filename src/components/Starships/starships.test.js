import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import Starships from './Starships';

describe('<Starships />', function() {
  
  beforeEach(function(){

  });

  it('should contain a .starships__flex-container element', function () {
    const wrapper = shallow(<Starships />);
    expect(wrapper.find('.starships__flex-container')).to.have.length(1);
  });

});
