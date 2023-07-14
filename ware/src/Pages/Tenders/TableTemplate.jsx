import React from 'react';

function TableTemplate({ data, files }) {

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
              {item['Title']}
            </a>
          </td>
          <td>{item['FloatDate']}</td>
          <td>{item['ExpiryDate']}</td>
          <td>{item['ZoneRegion']}</td>
        </tr>
      ))}
    </>
  );
}

export default TableTemplate;
