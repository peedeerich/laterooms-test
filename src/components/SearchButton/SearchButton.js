import React from 'react';
import PropTypes from 'prop-types';

export const SearchButton = ({ onSearch = () => {} }) => (
    <button onClick={onSearch} type="button">Search Hotels</button>
);

SearchButton.propTypes = {
    storeHotels: PropTypes.func
}

export default SearchButton;
