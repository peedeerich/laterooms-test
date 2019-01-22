import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const HotelList = ({ hotelList = [] }) => (
    <div>
        <div>We found {hotelList.length} hotels</div>
    </div>
)

HotelList.propTypes = {
    hotelList: PropTypes.arrayOf(PropTypes.object),
}

const mapStateToProps = state => ({
    hotelList: state.hotels.hotels,
})

export default connect(mapStateToProps)(HotelList);
