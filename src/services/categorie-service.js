import Api from './axios-http-caller';

class ProductService {
  getCategories = async () => {
    return Api.get(`categories`);
  };
}

export default new ProductService();
