import React from 'react';
import { useDispatch } from 'react-redux';

export default function Color() {

  const dispatch = useDispatch();

  const handleUpdateColor = (e) => {
    e.preventDefault();
    const payload = e.target.color.value;
    dispatch({type: "UPDATE_COLOR", payload});
    e.target.color.value = "";
  };

  return (
    <form onSubmit={handleUpdateColor}>
      <label htmlFor="color">new color: </label>
      <input type="text" id="color"/>
      <button>save</button>
    </form>
  )
}
