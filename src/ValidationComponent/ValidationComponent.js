import React from 'react';
import './ValidationComponent.css';

const validationComponent = (props) => {
  return (
    <div className="ValidationComponent">
      <p>
        {props.input > 4 ? 'Text long enough' : 'Text too short'}
      </p>
    </div>
  );
};

export default validationComponent;
