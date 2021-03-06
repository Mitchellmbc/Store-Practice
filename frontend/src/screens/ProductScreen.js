import {parseRequestUrl} from '../utils';
import { getProduct } from '../api';

const ProductScreen = {
  render: async () => {
    const request = parseRequestUrl();
    const product = await getProduct(request.id);
    console.log(request);
    console.log(product);
    console.log(product.name);
    return `<h1>${product.name}</h1>`;
  },
};

export default ProductScreen;
