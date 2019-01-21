import React from 'react'
import { shallow } from 'enzyme';
import HotelControls from '.';

describe('HotelControls', () => {
    it('renders without crashing', () => {
        shallow(<HotelControls />);
    });
});