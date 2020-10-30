import { combineReducers } from 'redux';
// mport categories from './modules/categories/reducers';
import products from './modules/products/reducers';

export default combineReducers({
  products,
});
