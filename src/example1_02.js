import React, { useState } from 'react';

function example1_02() {
  const [name, setName] = useState('');

  function handleChange(evt) {
    setName(evt.target.value);
  }

  return (
    <div>
      <h1>Enter Text: {name}</h1>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}

export default example1_02;
