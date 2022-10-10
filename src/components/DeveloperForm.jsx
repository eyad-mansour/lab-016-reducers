import React, { useState } from 'react';
import { actionType } from '../components/Developer';

function DeveloperForm({ dispatch }) {
  const [devName, setDevName] = useState('');
  const [tech, setTech] = useState('');
  const [lang, setLang] = useState('');
  const [food, setFood] = useState('');
  const [drink, setDrink] = useState('');

  // console.log(title);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!devName) return;
    setDevName('');
    setTech('');
    setLang('');
    setFood('');
    setDrink('');
    dispatch({
      type: actionType.ADD_DEVELOPER,
      payload: { devName, lang, tech, food, drink },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <input
        placeholder='Developer name'
        type='text'
        onChange={(e) => setDevName(e.target.value)}
        value={devName}
      />
      <br />
      <label htmlFor='lang'>chose you'r preferable programing languages:</label>
      <br />
      <select
        name='lang'
        id='lang'
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        <option>c++</option>
        <option>python</option>
        <option>javascript</option>
      </select>
      <br />

      <label htmlFor='cars'>chose you'r preferable technology</label>
      <br />
      <select
        name='tech'
        id='tech'
        value={tech}
        onChange={(e) => setTech(e.target.value)}
      >
        <option>mongoDB</option>
        <option>axios</option>
        <option>postgress</option>
      </select>

      <br />
      <input
        placeholder='favorite food'
        type='text'
        onChange={(e) => setFood(e.target.value)}
        value={food}
      />

      <br />
      <input
        placeholder='favorite drink'
        type='text'
        onChange={(e) => setDrink(e.target.value)}
        value={drink}
      />
      <br />
      <button type='submit'>Save developer</button>
    </form>
  );
}

export default DeveloperForm;
