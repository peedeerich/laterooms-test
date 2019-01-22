import React from 'react';
import { shallow } from 'enzyme';

import { HotelFilter } from './HotelFilter';

describe('HotelFilter', () => {
    it('renders without crashing', () => {
        shallow(<HotelFilter />)
    });

    it('triggers change handler', () => {
        const mockHandler = jest.fn();
        const component = shallow(<HotelFilter onChangeFilter={mockHandler}/>);
        const mockEvent = {target: {}};
        component.find('input').simulate('change', mockEvent);
        expect(mockHandler.mock.calls.length).toBe(1);
    });
})
