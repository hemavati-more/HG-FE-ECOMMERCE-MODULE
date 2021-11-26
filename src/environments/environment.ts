const baseURL: string = "http://20.198.106.228/HealthGiggles/";

const woocommerce = {
  consumer_key:  '?consumer_key=ck_9c6a2ada46173aa7f18a9b56127ea591726aa9c4',
  consumer_secret: '&consumer_secret=cs_9d229ce1e0b0c22c62102703a776a2d19b43e668'
};
export const environment = {
  production: false,
  api:{
    product_category :`${baseURL}/wp-json/wc/v3/products/categories`+ woocommerce.consumer_key + woocommerce.consumer_secret,
    product_list: `${baseURL}/wp-json/wc/v3/products`+ woocommerce.consumer_key + woocommerce.consumer_secret,
    product_detail:`${baseURL}/wp-json/wc/v3/products/`,
    product_review:`${baseURL}/wp-json/wc/v3/products/reviews?`
  }
};

// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
