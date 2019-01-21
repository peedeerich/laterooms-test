import { filterByFacilities } from '../filterHotels';

describe('filterByFacilities', () => {
    let defaultList;

    beforeEach(() => {
        defaultList = [
            {
              "name": "foo",
              "starRating": 5,
              "facilities": ["bar", "baz"]
            },
            {
              "name": "xyz",
              "starRating": 3,
              "facilities": ["bar", "abc"]
            },
            {
              "name": "hotel",
              "starRating": 3,
              "facilities": []
            }
        ];
    })

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

    it('returns the same list if >0 hotels and no filter', () => {
        const hotelList = defaultList;
        const filteredList = filterByFacilities(hotelList)
        expect(filteredList).toEqual(hotelList)
    })
})
