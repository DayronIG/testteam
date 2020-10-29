import React from 'react';
import PropTypes from 'prop-types';

const ClientPage = ({ title }) => {
  return <div>{title}</div>;
};

ClientPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ClientPage;
