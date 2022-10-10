import React from 'react';
import { actionType } from './Developer';

function DevDetails(props) {
  return (
    <>
      <ul>
        <li
          key={props.developer.id}
          onClick={() =>
            props.dispatch({
              type: actionType.REMOVE_DEVELOPER,
              payload: { id: props.developer.id },
            })
          }
        ></li>

        <li>Name: {props.developer.devName}</li>
        <li>language: {props.developer.lang}</li>
        <li>techenology: {props.developer.tech}</li>
        <li>faivorate food: {props.developer.food}</li>
        <li>faivorate drink: {props.developer.drink}</li>
        <button
          key={props.developer.id}
          onClick={() =>
            props.dispatch({
              type: actionType.REMOVE_DEVELOPER,
              payload: { id: props.developer.id },
            })
          }
          type='submit'
        >
          delete developer
        </button>
      </ul>
    </>
  );
}

export default DevDetails;
