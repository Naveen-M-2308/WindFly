import React, { useState } from 'react'
import '../styles/Book.css'

function Book() {
  const [count, setCount] = useState(null);

  const handleMinus = () => {
    if (count === 1) {
      setCount(null);
    } else if (count > 1) {
      setCount(count - 1);
    }
  };

  const handlePlus = () => {
    setCount(count === null ? 1 : count + 1);
  };

  return (
    <>
      <div id='bookhead'>
        <button id='btn-minus'  onClick={handleMinus}>-</button>
        <button id='btn-book'>Book {count !== null ? `(${count})` : ''}</button>
        <button id='btn-plus' onClick={handlePlus}>+</button>
      </div>
    </>
  )
}

export default Book
