import React from "react";

function CircleDistrictTableTemplate2({ data }) {
  return (
    <>
      {data.map((item, index) => {
        if (item.dist) {
          return (
            <tr key={`dist-${index}`}>
              <th className="text-left" colSpan={7} id={item.id}>{item.dist}</th>
            </tr>
          );
        } else {
          return (
            <tr key={`data-${index}`}>
              <td>{item.sno}</td>
              <td>{item.warehouse}</td>
              <td>{item.tel}</td>
              <td>{item.incharge}</td>
              <td>{item.mobile}</td>
            </tr>
          );
        }
      })}
    </>
  );
}

export default CircleDistrictTableTemplate2;
