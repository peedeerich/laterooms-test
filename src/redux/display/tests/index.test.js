import reducer, { initialState, changeFilter, changeSort } from '..';

describe('reducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: '???' };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

});
