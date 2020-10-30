import Api from './axios-http-caller';

class ProductService {
  getProuducts = async () => {
    return Api.get(`products`);
  };

  getProuductCategory = async (category) => {
    return Api.get(`products/${category}`);
  };
}

export default new ProductService();
