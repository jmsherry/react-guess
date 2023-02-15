import React from "react";
import MyComponent from "./MyComponent";
function Intervene(props) {
  return (
    <div>
      <MyComponent color="red" {...props} message="override" />
    </div>
  );
}

// Object.assign(
//   { color: "red" },
//   { message: "intervening message", num: 2 },
//   { message: "override" }
// );

export default Intervene;
