import React from "react";

function renderTableRows(data) {
  let rows = [];

  for (let i = 0; i < data.length; i += 2) {
    const heading = data[i];
    const content = data[i + 1];

    if (heading && heading.Heading) {
      rows.push(
        <tr key={i}>
          <td colSpan={4}>{heading.Heading}</td>
        </tr>
      );
    }

    if (content && content["SNo."]) {
      rows.push(
        <tr key={i + 1}>
          <td>{content["SNo."]}</td>
          <td>{content.Auth}</td>
          <td>{content.Address}</td>
          <td>{content.Tel}</td>
        </tr>
      );
    }
  }

  return rows;
}

function AnnexureTempl({ data }) {
  return (
    <>
      {renderTableRows(data)}
    </>
  );
}

export default AnnexureTempl;
