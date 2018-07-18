import React from 'react';


const BoardResult = ({id, title, comment}) => (
  <ul>
    <li>{id}</li>
    <li>{title}</li>
    <li>{comment}</li>
  </ul>
);

export default BoardResult;