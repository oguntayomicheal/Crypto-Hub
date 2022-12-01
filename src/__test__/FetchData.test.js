import store from '../redux/configureStore';
import fetchProducts from '../redux/Data/Data';

describe('API test', () => {
  test('Fetch coin data', async () => {
    await store.dispatch(fetchProducts());
    expect(store.getState().data.length).toEqual(250);
  });
});
