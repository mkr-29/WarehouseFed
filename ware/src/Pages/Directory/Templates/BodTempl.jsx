import React from 'react';

export default function BodTempl({ data }) {
  return (
    <>
      {data.map((director, index) => (
        <tr key={index}>
          <td>{director.name}</td>
          <td>{director.designation}</td>
          <td>{director.office}</td>
          <td>{director.residence}</td>
        </tr>
      ))}
    </>
  );
}
