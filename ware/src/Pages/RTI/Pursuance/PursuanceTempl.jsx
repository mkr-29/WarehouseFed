import React from "react";

function applyUnderlineToSpanText(str) {
  const spanRegex = /<span>(.*?)<\/span>/g;
  const aRegex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1[^>]*>(.*?)<\/a>/g;

  let result = [];
  let lastIndex = 0;
  let match;

  while ((match = spanRegex.exec(str))) {
    const plainText = str.slice(lastIndex, match.index);
    const spanText = match[1];

    if (plainText) {
      result.push(plainText);
    }

    result.push(
      <span key={match.index} style={{ textDecoration: "underline" }}>
        {spanText}
      </span>
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < str.length) {
    result.push(str.slice(lastIndex));
  }

  let finalResult = [];
  for (const part of result) {
    if (typeof part === "string") {
      let lastIndex = 0;
      let match;
      let innerResult = [];

      while ((match = aRegex.exec(part))) {
        const plainText = part.slice(lastIndex, match.index);
        const href = match[2];
        const linkText = match[3];

        if (plainText) {
          innerResult.push(plainText);
        }

        innerResult.push(
          <a key={match.index} href={href} target="_blank" rel="noopener noreferrer">
            {linkText}
          </a>
        );

        lastIndex = match.index + match[0].length;
      }

      if (lastIndex < part.length) {
        innerResult.push(part.slice(lastIndex));
      }

      finalResult.push(...innerResult);
    } else {
      finalResult.push(part);
    }
  }

  return finalResult;
}

function PursuanceTempl({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <tr key={item["SNo."]}>
          <td>{item["SNo."]}</td>
          <td>{item["Title"]}</td>
          <td>{applyUnderlineToSpanText(item["Info"])}</td>
        </tr>
      ))}
    </>
  );
}

export default PursuanceTempl;
