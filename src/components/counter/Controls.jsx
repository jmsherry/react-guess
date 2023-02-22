import React from "react";
import Button from "./Button";

function Controls({setter}) {
  return (
    <div>
      <div>
        <Button text={`-`} handler={() => setter((value) => value - 1)} />
        <Button text={`+`} handler={() => setter((value) => value + 1)} />
      </div>
    </div>
  );
}

export default Controls;

