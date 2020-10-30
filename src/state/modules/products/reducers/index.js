import { PRODUCTS, PRODUCTS_SUCCESS, PRODUCTS_FAILURE } from '../constants';

const initState = {
  error: false,
  loaded: false,
  loading: false,
  products: [],
  count: 0,
  hideCount: 0,
};

export default (state = initState, action) => {
  switch (action.type) {
    case PRODUCTS:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: false,
        products: [],
        count: 0,
        hideCount: 0,
      };
    case PRODUCTS_SUCCESS:
      console.log('action.payload.data');
      console.log(action.products.data);
      return {
        loaded: true,
        error: false,
        loading: false,
        products: action.products.data.data,
        count: action.products.data.count,
        hideCount:
          action.products.data.hideCount && action.products.data.hideCount,
      };
    case PRODUCTS_FAILURE:
      return {
        ...state,
        loaded: false,
        error: true,
        loading: false,
        products: [],
        count: 0,
        hideCount: 0,
      };
    default:
      return state;
  }
};
