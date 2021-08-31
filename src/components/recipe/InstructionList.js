import React from 'react';

const InstructionList = ({ steps }) => {
  return (
    <div className='tile is-parent'>
      <div className='tile is-child box'>
        <ol>
          {steps?.map(step => (
            <li key={step.number}>{step.step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default InstructionList;
