import React from "react";

export default function SectionHeading({ number, heading, desc, direction }) {
  return (
    <div
      className="section-heading"
      style={{
        display: "flex",
        flexDirection: direction ? "row" : "column",
        alignItems: direction ? "center" : "",
      }}
    >
      <h2 className="section-sub-heading">
        {number}
        <span>{heading}</span>
      </h2>
      <p
        className="section-desc"
        style={{
          marginLeft: direction ? "8rem" : "",
          marginTop: direction ? "2rem" : "",
        }}
      >
        {desc}
      </p>
    </div>
  );
}
