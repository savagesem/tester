import React from 'react';

export const Row = (props) => {
  return (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.country}</td>
      <td>{props.bugs.map(bug => (bug.title)).join(',')}</td>
    </tr>
  );
};