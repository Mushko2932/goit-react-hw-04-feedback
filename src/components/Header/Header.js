import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './Header.styled';

export const Header = ({ title }) => {
  return <Title>{title}</Title>;
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
