/* eslint-disable no-unused-vars */
import * as types from '../constants';
import ProductService from '../../../../services/product-service';

export function loadProductsSucces(products) {
  return { type: types.PRODUCTS_SUCCESS, products };
}

export function loadProducts() {
  return (dispatch) => {
    return ProductService.getProuducts().then((products) => {
      dispatch(loadProductsSucces(products));
    });
  };
}

export function loadProductsByCategory(category) {
  return (dispatch) => {
    return ProductService.getProuductCategory(category).then((products) => {
      dispatch(loadProductsSucces(products));
    });
  };
}
