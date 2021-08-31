import React from 'react';

const InstructionList = ({ steps }) => {
  return steps ? (
    <div className='tile is-parent'>
      <div className='tile is-child box'>
        <ol>
          {steps?.map(step => (
            <li key={step.number}>{step.step}</li>
          ))}
        </ol>
      </div>
    </div>
  ) : null;
};

export default InstructionList;
