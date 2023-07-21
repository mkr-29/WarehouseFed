import React from 'react';

export default function ICDCompaniesTemplate({ data }) {
  const isMobile = window.innerWidth < 600;
  const entriesPerRow = isMobile ? 1 : 3;

  const rows = Math.ceil(data.length / entriesPerRow);
  const emptyEntries = rows * entriesPerRow - data.length;

  return (
    <>
      {Array.from({ length: rows }, (_, rowIndex) => {
        const rowData = data.slice(rowIndex * entriesPerRow, (rowIndex + 1) * entriesPerRow);

        return (
          <tr key={rowIndex}>
            {rowData.map((item, index) => (
              <React.Fragment key={`data-${index}`}>
                <td>{item.sno}</td>
                <td>{item.name}</td>
              </React.Fragment>
            ))}
            {Array.from({ length: entriesPerRow - rowData.length }, (_, index) => (
              <td key={`empty-${index}`} />
            ))}
          </tr>
        );
      })}
    </>
  );
}
