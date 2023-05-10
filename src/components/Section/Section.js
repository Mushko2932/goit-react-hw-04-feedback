import React from 'react';
import { Header } from 'components/Header/Header';
import PropTypes from 'prop-types';
import { Container } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Container>
      <Header title={title} />
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
