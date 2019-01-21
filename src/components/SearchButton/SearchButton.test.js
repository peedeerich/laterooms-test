import React from 'react'
import { shallow } from 'enzyme';
import { SearchButton } from './SearchButton';

describe('SearchButton', () => {
    it('renders without crashing', () => {
        shallow(<SearchButton />)
    })
});
