import React, { useState } from "react";
import Header from "./components/Header";
import AddCard from "./components/AddCard";
import Card from "./components/Card";


export default function App() {

  const [lists, setData] = useState('');

  const addCard = (text) => {
    const newData = [
      ...lists,
      {
        id: lists.length + 1,
        text: text
      }
    ];
    setData(newData);
  };

  const onRemove = (id) => {
    const newLists = lists.filter(list => list.id !== id);
    setData(newLists);
  }

  return (
    <>
      <Header text="Todo App"/>
      <AddCard addCard={addCard} />
      <Card lists={lists} onRemove={onRemove}/>
    </>
  );
}
