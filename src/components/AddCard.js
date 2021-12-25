import React, { useState } from 'react'

export default function AddCard({addCard = f => f}) {

  const [text, setText] = useState('')

  const submit = e => {
    e.preventDefault();
    addCard(text);
    setText('');
  };

  return (
    <form onSubmit={submit}>
      <input value={text} onChange={e => setText(e.target.value)}/>
      <button type="submit">Add</button>
    </form>
  );
}