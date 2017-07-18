import React from 'react';
import {shallow} from 'enzyme';

import Musics from '../src/js/components/Musics';

describe('<Image/>', () => {
  it('should have an image to display the gravatar', () => {
    const wrapper = shallow('<Musics/>');
    expect(wrapper.find('img')).to.have.length(1);
  });

});

describe('<Sound/>', () => {
  it('should have an image to display the gravatar', () => {
    const wrapper = shallow('<Musics/>');
    expect(wrapper.find('audio')).to.have.length(1);
  });

});
