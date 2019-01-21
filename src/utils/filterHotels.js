function hotelHasFacility(hotel, facility) {
    return hotel.facilities
        && Array.isArray(hotel.facilities)
        && hotel.facilities.includes(facility)
};

export function filterByFacilities(hotelList, facility = '') {
    if (!facility) {
        return [...hotelList]
    };
    return hotelList.filter(hotel => hotelHasFacility(hotel, facility))
};
