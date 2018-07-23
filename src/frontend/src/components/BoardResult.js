import React from 'react';
import PropTypes from 'prop-types';

import  BoardRow from './BoardRow';

const BoardResult = ({results}) => (
  <ul>
    {results.map(result => (<BoardRow key={result.id} result={result} />))}
  </ul>
);

BoardResult.propTypes = {
  results   : PropTypes.array,
}

export default BoardResult;