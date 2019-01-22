import React from 'react';
import PropTypes from 'prop-types';

export const HotelSort = ( { onChangeSort = () => {} }) => (
    <select name="sort" size="0" onChange={event => onChangeSort(event.target.value)}>
        <option value="none">None</option>
        <option value="descending">Stars (most first)</option>
        <option value="ascending">Stars (least first)</option>
    </select>
);

HotelSort.propTypes = {
    onChangeSort: PropTypes.func,
}

export default HotelSort;
