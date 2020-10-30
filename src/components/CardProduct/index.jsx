/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 35,
    marginTop: 20,
    paddingTop: '10px',
    // height: 300
  },
  media: {
    height: 10,
  },
  content: {
    height: 10,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const CardProduct = ({ item: { name, potho, price, brand, stock } }) => {
  const classes = useStyles();
  console.log(potho);
  console.log(name);
  return (
    <Card mt={12} className="card-root">
      <CardHeader title={name} />
      <CardMedia className={classes.media} image={potho} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Price:{price}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Marca:{brand}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          In stock: {stock}
        </Typography>
      </CardContent>
    </Card>
  );
};

CardProduct.propTypes = {
  potho: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  stock: PropTypes.string.isRequired,
};

export default CardProduct;
