import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const dispatch = useDispatch();
  const toDos = useSelector((state) => state);
  const ID = useParams().id;
  const todoText = toDos.find((todo) => todo.id === parseInt(ID));

  return (
    <>
      <h1>{todoText?.text}</h1>
      <h5>Created at: {todoText?.id}</h5>
    </>
  );
}

export default Detail;
