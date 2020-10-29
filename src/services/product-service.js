import Api from './axios-http-caller';

class ProductService {
  getProuducts = async (category = 'all') => {
    return Api.get(`products/${category}`);
  };
}

export default new ProductService();
