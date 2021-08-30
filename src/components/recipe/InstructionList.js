import React from 'react';

const InstructionList = ({ steps }) => {
  return (
    <div>
      <ol>
        {steps?.map(step => (
          <li key={step.number}>{step.step}</li>
        ))}
      </ol>
    </div>
  );
};

export default InstructionList;
