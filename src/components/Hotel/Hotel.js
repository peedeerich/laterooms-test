import React from 'react';
import PropTypes from 'prop-types';

import './Hotel.css';

function renderFacilities(facilities = [], key) {
    if (facilities.length === 0) {
        return <div className="Hotel-contact">Contact hotel for more details</div>
    }
    return (
        <ul className="Hotel-facility-list">
            {facilities.map((facility, index) => {
                return <li key={key + index}>{facility}</li>
            })}
        </ul>
    )
}

export const Hotel = ({ hotel = {} }) => {
    return (
        <div className="Hotel">
            <div className="Hotel-left">
                <div className="Hotel-name">{hotel.name}</div>
                <div className="Hotel-rating">Rating: {hotel.starRating}</div>
            </div>
            <div className="Hotel-right">
                <div className="Hotel-facilities-title">Facilities:</div>
                <div>
                {renderFacilities(hotel.facilities, hotel.name)}
                </div>
            </div>
        </div>
    )
}

Hotel.propTypes = {
    hotel: PropTypes.object,
}

export default Hotel;
