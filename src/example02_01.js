import React from 'react';
import ReactDOM from 'react-dom';

let values = [];
let currentHook = 0;

function useState(initialState) {
  if (typeof values[currentHook] === 'undefined')
    values[currentHook] = initialState;

  let hookIndex = currentHook;
  function setState(nextValue) {
    values[hookIndex] = nextValue;
    ReactDOM.render(<Example02_01 />, document.getElementById('root'));
  }

  return [values[currentHook++], setState];
}

function Example02_01() {
  currentHook = 0;

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleChange(evt) {
    setName(evt.target.value);
  }

  function handleLastNameChange(evt) {
    setLastName(evt.target.value);
  }

  return (
    <div>
      <h1>
        Your Text: {name} {'======>'} {lastName}
      </h1>
      <input type="text" value={name} onChange={handleChange} />
      <input type="text" value={lastName} onChange={handleLastNameChange} />
    </div>
  );
}

export default Example02_01;
