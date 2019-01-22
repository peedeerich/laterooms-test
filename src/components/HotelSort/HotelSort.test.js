import React from 'react';
import { shallow, mount } from 'enzyme';
import { HotelSort } from './HotelSort';

describe('HotelSort', () => {
    it('renders without crashing', () => {
        shallow(<HotelSort />)
    });

    it('triggers change handler', () => {
        const mockHandler = jest.fn();
        const component = mount(<HotelSort onChangeSort={mockHandler}/>);
        component.prop('onChangeSort')();
        expect(mockHandler.mock.calls.length).toBe(1);
    });
});
