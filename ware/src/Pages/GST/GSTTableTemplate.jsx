import React from 'react';

function GSTTableTemplate({ data, files }) {

  return (
    <>
      {data.map((item, index) => (
        <tr key={item['SNo.']}>
          <td>{item['SNo.']}</td>
          <td>
            <a
              href={files[index]}
              target="_blank"
            >
              {item['Subject']}
            </a>
          </td>
        </tr>
      ))}
    </>
  );
}

export default GSTTableTemplate;
