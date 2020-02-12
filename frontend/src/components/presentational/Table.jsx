import React from "react";

const Table = ({ dates }) => (
  <div>
    {dates.map(date => (
      <div key={date.id}>{date.summary}</div>
    ))}
  </div>
);
export default Table;
