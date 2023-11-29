import React, { useState } from 'react';

function counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button className = "button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default counter