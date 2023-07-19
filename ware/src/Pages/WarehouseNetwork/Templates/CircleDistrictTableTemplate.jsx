import React from "react";

function CircleDistrictTableTemplate({ data }) {
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
              <td>{item.circle}</td>
              <td>{item.warehouse}</td>
              <td>{item.designation}</td>
              <td>{item.incharge}</td>
              <td>{item.mobile}</td>
              <td>{item.email}</td>
            </tr>
          );
        }
      })}
    </>
  );
}

export default CircleDistrictTableTemplate;
