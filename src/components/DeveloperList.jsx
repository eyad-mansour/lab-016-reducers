import React from 'react';
import DevDetails from './DevDetailt';

function DevList(props) {
  return props.devList.length ? (
    <div>
      <ul>
        {props.devList.map((developer) => (
          <DevDetails
            key={developer.id}
            developer={developer}
            dispatch={props.dispatch}
          />
        ))}
      </ul>
    </div>
  ) : (
    <h3>the list is empty!</h3>
  );
}

export default DevList;
