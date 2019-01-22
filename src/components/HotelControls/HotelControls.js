import React from 'react';
import SearchButton from '../SearchButton';
import HotelFilter from '../HotelFilter';
import HotelSort from '../HotelSort';

import './HotelControls.css'

export const HotelControls = () => (
    <div className="Controls">
        <div className="Controls-search">
            <SearchButton/>
        </div>
        <div className="Controls-filter">
            Filter: <HotelFilter/>
        </div>
        <div className="Controls-sort">
            Sort by: <HotelSort/>
        </div>
    </div>
)