export function filterByFacilities(hotelList, facility = '') {
    if (facility) {
        return [];
    }
    return [...hotelList];
};
