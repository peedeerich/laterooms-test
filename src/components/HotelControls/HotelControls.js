import React from 'react';
import SearchButton from '../SearchButton';
import HotelFilter from '../HotelFilter';

export const HotelControls = () => (
    <div className="Controls">
        <SearchButton/>
        <div>
            <HotelFilter/>
        </div>
    </div>
)