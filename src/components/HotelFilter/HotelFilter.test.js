import React from 'react';
import { shallow } from 'enzyme';

import { HotelFilter } from './HotelFilter';

describe('HotelFilter', () => {
    it('renders without crashing', () => {
        shallow(<HotelFilter />)
    })
})
