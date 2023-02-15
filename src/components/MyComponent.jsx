import React from "react";

// const NoMessage = () => <p>No message passed</p>

function MyComponent({message}) {
  const baseStyles = {};
  
  return <div style={baseStyles}>{message}</div>;

}

export default MyComponent;
