import React from 'react'
import { shallow } from 'enzyme';
import { SearchButton } from './SearchButton';

describe('SearchButton', () => {
    it('renders without crashing', () => {
        shallow(<SearchButton />)
    });

    it('fires onSearch when clicked', () => {
        const clickHandler = jest.fn();
        const component = shallow(<SearchButton onSearch={clickHandler} />);
        component.find('button').simulate('click');
        expect(clickHandler.mock.calls.length).toBe(1);
    })
});
