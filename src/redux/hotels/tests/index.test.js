import reducer, { storeHotels, initialState } from '..';

describe('reducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: '???' };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should store hotels on state on STORE_HOTELS', () => {
    const hotels = [
            {
                "name": "hotelone",
                "starRating": 5,
                "facilities": ["car park", "pool"]
            },
            {
                "name": "hoteltwo",
                "starRating": 3,
                "facilities": ["car park", "gym"]
            },
        ];
    const mockAction = storeHotels(hotels);
    const result = reducer(initialState, mockAction);
    expect(result.hotels).toEqual(hotels);
  });
});
