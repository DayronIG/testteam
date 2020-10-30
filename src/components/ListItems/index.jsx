/* eslint-disable react/no-array-index-key */
import React from 'react';
import CardProduct from '../CardProduct';

const ListItems = ({ products }) => {
  return (
    <>
      {products.map((item, index) => {
        console.log(item);
        return <CardProduct key={index} item={item} />;
      })}
    </>
  );
};

ListItems.propTypes = {};

export default ListItems;
