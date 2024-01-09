import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function IncrementBy() {

  const dispatch = useDispatch();

  const handleIncrementBy = (e) => {
    e.preventDefault();
    const payload = +e.target.num.value;
    dispatch({type: "INCREMENT_BY", payload});
    e.target.num.value = "";
  };

  return (
    <form onSubmit={handleIncrementBy}>
      <label htmlFor="num">increment by: </label>
      <input type="number" id="num"/>
      <button>submit</button>
    </form>
  )
}
