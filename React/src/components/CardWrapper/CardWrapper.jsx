import React from "react";

const CardWrapper = () => {
  return (
    <div style={{ border: "2px solid black", display: "flex" }}>
      <LeftWrapper >
     < RightWrapper/>
      </LeftWrapper>
    </div>
  );
};

const LeftWrapper = ({children}) => {
  return <div style={{ border: "2px solid red" }}>{children}</div>;
};

function RightWrapper() {
  return <div style={{ border: "2px solid green" }}>right</div>;
}
export default CardWrapper;
