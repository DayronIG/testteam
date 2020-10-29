import React from 'react';
import PropTypes from 'prop-types';

const ContactPage = ({ title }) => {
  return <div>{title}</div>;
};

ContactPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ContactPage;
