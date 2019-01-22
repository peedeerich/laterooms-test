import React from 'react';
import SearchButton from '../SearchButton';
import HotelFilter from '../HotelFilter';
import HotelSort from '../HotelSort';

export const HotelControls = () => (
    <div className="Controls">
        <SearchButton/>
        <div>
            Filter: <HotelFilter/>
        </div>
        <div>
            Sort by: <HotelSort/>
        </div>
    </div>
)