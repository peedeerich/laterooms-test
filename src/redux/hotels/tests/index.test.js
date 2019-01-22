import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import reducer, { storeHotels, getHotels, initialState, STORE_HOTELS } from '..';

import hotels from '../../../mockServer/hotels'; // would mock this in practice

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

  it('should fetch hotels then dispatch STORE_HOTELS', async () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore();
    await store.dispatch(getHotels());
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: STORE_HOTELS, hotels });
  })
});
