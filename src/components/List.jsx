import React from "react";
import { nanoid } from "nanoid";
import PersonCard from "./PersonCard";

function List({ items = [] }) {
  return (
    <>
      <h2>List</h2>
      <ul>
        {items.map((person) => (
          <PersonCard key={nanoid()} {...person} />
        ))}
      </ul>
    </>
  );
}

export default List;
