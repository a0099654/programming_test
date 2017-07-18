import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import Musics from '../src/js/components/Musics';

describe('<Musics/>', function() {
  it('should have an image to display the gravatar', function() {
    const wrapper = shallow('<Musics/>');
    expect(wrapper.find('div')).to.have.length(1);
  });

});
