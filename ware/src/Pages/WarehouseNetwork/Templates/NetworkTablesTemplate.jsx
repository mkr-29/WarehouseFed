import React from "react";

function NetworkTablesTemplate({ data }) {
  const rows = Math.ceil(data.length / 3); // Calculate the number of rows needed

  return (
    <>
      {Array.from({ length: rows }, (_, rowIndex) => {
        const rowData = data.slice(rowIndex * 3, (rowIndex + 1) * 3);
        const emptyCols = 3 - rowData.length;

        return (
          <tr key={rowIndex}>
            {rowData.map((item, index) => (
              <td key={index}>{item.dist.toUpperCase()}</td>
            ))}
            {Array.from({ length: emptyCols }, (_, index) => (
              <td key={`empty-${index}`} />
            ))}
          </tr>
        );
      })}
    </>
  );
}

export default NetworkTablesTemplate;
