import React from 'react';
import PropTypes from 'prop-types';

import './Hotel.css';

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
                    facilities go here
                </div>
            </div>
        </div>
    )
}

Hotel.propTypes = {
    hotel: PropTypes.object,
}

export default Hotel;
