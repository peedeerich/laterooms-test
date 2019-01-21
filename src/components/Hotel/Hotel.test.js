import React from 'react';
import { shallow } from 'enzyme';

import { Hotel } from './Hotel';

describe('Hotel', () => {
    it('renders without crashing', () => {
        shallow(<Hotel />)
    })
});
