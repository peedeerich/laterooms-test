import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Hotel from '../Hotel';
import { filterByFacilities } from '../../utils/filterHotels';
import { sortHotelsByRating } from '../../utils/sortHotels';

function renderHotels(hotels, facility, sortMethod) {
    const filteredHotels = filterByFacilities(hotels, facility);
    const sortedHotels = sortMethod === 'none' ? filteredHotels : sortHotelsByRating(filteredHotels, sortMethod === 'ascending');
    return sortedHotels.map((hotel, index) => {
        return <Hotel hotel={hotel} key={index}/>
    });
}

export const HotelList = ({ hotels = [], facility = '', sortMethod = 'none' }) => (
    renderHotels(hotels, facility, sortMethod)
);

HotelList.propTypes = {
    hotels: PropTypes.arrayOf(PropTypes.object),
    facility: PropTypes.string,
    sortMethod: PropTypes.string,
}

const mapStateToProps = state => ({
    hotels: state.hotels.hotels,
    facility: state.display.filterString,
    sortMethod: state.display.sortMethod,
})

export default connect(mapStateToProps)(HotelList);
