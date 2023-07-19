import React from "react";

function NetworkTablesTemplate(data) {
  return (
    <>
      {data.map((item) => (
        <tr key={item}></tr>
      ))}
    </>
  );
}

export default NetworkTablesTemplate;
