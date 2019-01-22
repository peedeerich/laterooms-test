import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getHotels } from '../../redux/hotels';

export const SearchButton = ({ onSearch = () => {} }) => (
    <button onClick={onSearch} type="button">Search Hotels</button>
);

SearchButton.propTypes = {
    storeHotels: PropTypes.func
}

const mapDispatchToProps = (dispatch) => ({
    onSearch: () => dispatch(getHotels())
})

export default connect(null, mapDispatchToProps)(SearchButton)
