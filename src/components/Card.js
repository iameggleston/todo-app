import React from "react";

export default function Card({lists= [], onRemove = f => f}) {

  if (!lists.length) return <div>No cards.</div>;

  return (
    <div>
      {
        lists.map(({text, id}, i) => (
          <div key={i}>
            {text}
            <button type="submit" onClick={() => onRemove(id)}>Delete</button>
          </div>
        ))
      }
    </div>
  );
}