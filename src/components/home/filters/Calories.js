import React from 'react';
import CalorieSlider from './CalorieSlider';

const Calories = ({ minCalories, maxCalories }) => {
  return (
    <div className='content'>
      <h5>Minimum Calories</h5>
      <CalorieSlider maxValue={minCalories} type='min' />
      <h5>Maximum Calories</h5>
      <CalorieSlider maxValue={maxCalories} type='max' />
    </div>
  );
};

export default Calories;
