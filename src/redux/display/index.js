export const CHANGE_FILTER = 'hotels/CHANGE_FILTER';
export const CHANGE_SORT = 'hotels/CHANGE_SORT';

export const changeFilter = (filterString) => {
    return { type: CHANGE_FILTER, filterString };
};

export const changeSort = (sortMethod) => {
    return { type: CHANGE_SORT, sortMethod };
};

export const initialState = {
    filterString: '',
    sortMethod: 'none',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FILTER:
            return {
                ...state,
                filterString: action.filterString,
            }
        case CHANGE_SORT:
            return {
                ...state,
                sortMethod: action.sortMethod,
            }
        default:
            return state;
    }
};

export default reducer;