import fetchHotels from '../../mockServer/fetchHotels';

export const STORE_HOTELS = 'hotels/STORE_HOTELS';

export const storeHotels = (hotels) => {
  return { type: STORE_HOTELS, hotels };
};

export const initialState = {
    hotels: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case STORE_HOTELS:
        return {
            ...state,
            hotels: action.hotels
        }
      default:
        return state;
    }
};

export default reducer;
