import reducer, { initialState, changeFilter, changeSort } from '..';

describe('reducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: '???' };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should update the filterString on CHANGE_FILTER', () => {
    const mockString = 'free bar';
    const mockAction = changeFilter(mockString);
    const result = reducer(initialState, mockAction);
    expect(result.filterString).toEqual(mockString);
  });

  it('should update the sortMethod on CHANGE_SORT', () => {
    const mockString = 'anywayyoulike';
    const mockAction = changeSort(mockString);
    const result = reducer(initialState, mockAction);
    expect(result.sortMethod).toEqual(mockString);
  });
});
