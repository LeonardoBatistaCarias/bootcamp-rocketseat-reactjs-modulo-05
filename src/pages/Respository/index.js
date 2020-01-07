import React from 'react';

// import { Container } from './styles';

export default function Respository({ match }) {
  return <h1>Repository: {decodeURIComponent(match.params.repository)}</h1>;
}
