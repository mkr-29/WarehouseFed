import React from "react";

export default function DistrictManagersTemplate({data}) {
  return (
    <>
      {data.map((item, index) => (
        <tr key={index}>
          <td>{item.circle}</td>
          <td>{item.manager}</td>
          <td>{item.office}</td>
          <td>{item.mobile}</td>
        </tr>
      ))}
    </>
  );
}
