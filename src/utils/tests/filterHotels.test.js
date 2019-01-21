import { filterByFacilities } from '../filterHotels';

describe('filterByFacilities', () => {
    it('returns an empty list if no hotels in list', () => {
        const hotelList = [];
        const filteredList = filterByFacilities(hotelList)
        expect(filteredList).toEqual([])
    });

    it('returns the same list if no hotels and a nontrivial filter', () => {
        const hotelList = []
        const filteredList = filterByFacilities(hotelList, 'foo')
        expect(filteredList).toEqual([])
    });
})
