import React from 'react';

export const Hotel = ({ hotel = {} }) => {
    return (
        <div className="Hotel">
            This is {hotel.name}
        </div>
    )
}

export default Hotel;
