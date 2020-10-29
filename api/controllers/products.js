const axios = require('axios');
const asyncHandler = require('../middleware/async');

const url = `https://pastebin.com/raw/aU44UDjV`;

exports.list = asyncHandler(async (req, res, next) => {
  // pastebin.com/raw/aU44UDjV
  axios({
    method: 'get',
    url,
  })
    .then((response) => {
      console.log(response.data.length);
      // console.log(response.data);
      res.status(200).json({
        success: true,
        count: response.data.length,
        data: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

exports.findOne = asyncHandler(async (req, res, next) => {
  axios({
    method: 'get',
    url,
  })
    .then((response) => {
      const { category } = req.params;

      // console.log(response.data);
      const products = response.data.filter((product) =>
        product.categories
          .map((cat) => cat.toLowerCase())
          .includes(category.toLowerCase())
      );
      const count = products.length;
      const hideCount = response.data.length - products.length;
      console.log(products);
      console.log(count);
      console.log(hideCount);
      res.status(200).json({
        success: true,
        count,
        hideCount,
        data: products,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
