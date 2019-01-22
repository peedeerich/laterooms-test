import React from 'react'
import { shallow, mount } from 'enzyme';
import { HotelList } from './HotelList';

describe('HotelList', () => {
    it('renders without crashing', () => {
        shallow(<HotelList />)
    });

    it('renders a Hotel element for every hotel in list', () => {
        const mockHotels = [{name: 'x'}, {name: 'y'}, {name: 'z'}];
        const component = mount(<HotelList hotels={mockHotels} />);
        expect(component.find('.Hotel')).toHaveLength(3);
    })

    it('renders a filtered list', () => {
        const mockHotels = [
            {facilities: ['foo']},
            {facilities: ['bar']},
            {facilities: ['foo']}
        ];
        const component = mount(<HotelList hotels={mockHotels} facility='bar'/>);
        expect(component.find('.Hotel')).toHaveLength(1);
    });
});
