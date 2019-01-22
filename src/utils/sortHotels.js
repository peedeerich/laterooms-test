function compareHotelsByRating(hotelA, hotelB, ascending) {
    if (ascending) {
        return hotelA.starRating - hotelB.starRating;
    }
    return hotelB.starRating - hotelA.starRating;
}

export function sortHotelsByRating(hotelList, ascending = false) {
    return [...hotelList].sort((hotelA, hotelB) => compareHotelsByRating(hotelA, hotelB, ascending));
}
