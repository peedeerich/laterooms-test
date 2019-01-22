export function sortHotelsByRating(hotelList) {
    return [...hotelList].sort((hotelA, hotelB) => {
        return hotelB.starRating - hotelA.starRating;
    });
}
