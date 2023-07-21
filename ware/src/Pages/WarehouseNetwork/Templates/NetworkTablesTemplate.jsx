import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

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
              <td key={index}>
                <ScrollLink
                  to={item.id}
                  smooth={true}
                  duration={1000}
                  onClick={() => scroll.scrollToTop()}
                >
                  {item.dist.toUpperCase()}
                </ScrollLink>
              </td>
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
