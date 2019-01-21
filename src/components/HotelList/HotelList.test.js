import React from 'react'
import { shallow } from 'enzyme';
import { HotelList } from './HotelList';

describe('HotelList', () => {
    it('renders without crashing', () => {
        shallow(<HotelList />)
    })
});
