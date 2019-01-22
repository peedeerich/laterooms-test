import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { filterByFacilities } from '../../utils/filterHotels';

import Hotel from '../Hotel';

function renderHotels(hotels, facility) {
    const filteredHotels = filterByFacilities(hotels, facility);
    return filteredHotels.map((hotel, index) => {
        return <Hotel hotel={hotel} key={index}/>
    });
}

export const HotelList = ({ hotels = [], facility = '' }) => (
    <div>
        <div>We found {hotels.length} hotels</div>
        {renderHotels(hotels, facility)}
    </div>
)

HotelList.propTypes = {
    hotels: PropTypes.arrayOf(PropTypes.object),
    facility: PropTypes.string,
}

const mapStateToProps = state => ({
    hotels: state.hotels.hotels,
    facility: state.display.filterString,
})

export default connect(mapStateToProps)(HotelList);
