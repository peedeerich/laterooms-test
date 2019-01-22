import { sortHotelsByRating } from "../sortHotels";

const defaultList = [
    {
      "name": "ok",
      "starRating": 3,
    },
    {
      "name": "nice",
      "starRating": 5,
    },
    {
      "name": "hmmm",
      "starRating": 1,
    },
    {
      "name": "alright",
      "starRating": 3,
    }
]

describe('sortHotelsByRating', () => {
    it('returns an empty list if no hotels', () => {
        const hotelList = [];
        const sortedList = sortHotelsByRating(hotelList);
        expect(sortedList).toEqual(hotelList);
    })

    it('returns a list of hotels sorted by star rating (descending)', () => {
        const hotelList = defaultList;
        const sortedList = sortHotelsByRating(hotelList);
        const expected = [
          {
            "name": "nice",
            "starRating": 5,
          },
          {
            "name": "ok",
            "starRating": 3,
          },
          {
            "name": "alright",
            "starRating": 3,
          },
          {
            "name": "hmmm",
            "starRating": 1,
          }
        ];
        expect(sortedList).toEqual(expected);
    });
})
