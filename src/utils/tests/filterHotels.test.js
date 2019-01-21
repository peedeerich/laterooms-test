import { filterByFacilities } from '../filterHotels';

describe('filterByFacilities', () => {
    it('returns an empty list if no hotels in list', () => {
        const hotelList = [];
        const filteredList = filterByFacilities(hotelList)
        expect(filteredList).toEqual([])
    })
})
