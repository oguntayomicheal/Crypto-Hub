import { prodReducer } from '../redux/Data/Data';
import store from '../redux/configureStore';

describe('test reducers and store', () => {
  test('test reducer for initial state', () => {
    expect(prodReducer(undefined, {})).toEqual([]);
  });

  test('test store initial state', () => {
    expect(store.getState().data).toEqual([]);
  });
});
