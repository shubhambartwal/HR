import React from "react";

const CardWrapper = () => {
  return (
    <div style={{ border: "2px solid black", display: "flex" }}>
      <LeftWrapper RightWrapper={< RightWrapper />} />
    </div>
  );
};

const LeftWrapper = ({ RightWrapper }) => {
  return <div style={{ border: "2px solid red" }}>{RightWrapper}</div>;
};

function RightWrapper() {
  return <div style={{ border: "2px solid green" }}>right</div>;
}
export default CardWrapper;
