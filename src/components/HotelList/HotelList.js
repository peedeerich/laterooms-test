import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Hotel from '../Hotel';

function renderHotels(hotels) {
    return hotels.map((hotel, index) => {
        return <Hotel hotel={hotel} key={index}/>
    });
}

export const HotelList = ({ hotels = [] }) => (
    <div>
        <div>We found {hotels.length} hotels</div>
        {renderHotels(hotels)}
    </div>
)

HotelList.propTypes = {
    hotels: PropTypes.arrayOf(PropTypes.object),
}

const mapStateToProps = state => ({
    hotels: state.hotels.hotels,
})

export default connect(mapStateToProps)(HotelList);
