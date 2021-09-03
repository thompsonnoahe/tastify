import React from 'react';
import { connect } from 'react-redux';
import Calories from './filters/Calories';
import CuisineSelect from './filters/CuisineSelect';
import Intolerances from './filters/Intolerances';
import Sort from './filters/Sort';

const FilterBox = props => {
  return props.showFilter ? (
    <div className='tile is-parent'>
      <div className='tile is-child box'>
        <div className='content p-5 flex justify-evenly'>
          <div>
            <h4>Intolerances</h4>
            <Intolerances
              intolerances={[
                'Dairy',
                'Egg',
                'Gluten',
                'Grain',
                'Peanut',
                'Seafood',
                'Sesame',
                'Shellfish',
                'Soy',
                'Sulfite',
                'Tree Nut',
                'Wheat',
              ]}
            />
          </div>
          <div>
            <h4>Caloric Content</h4>
            <Calories minCalories={'2000'} maxCalories={'2000'} />
          </div>
          <div>
            <h4>Cuisine</h4>
            <CuisineSelect
              cuisines={[
                'African',
                'American',
                'British',
                'Cajun',
                'Caribbean',
                'Chinese',
                'Eastern European',
                'European',
                'French',
                'German',
                'Greek',
                'Indian',
                'Irish',
                'Italian',
                'Japanese',
                'Jewish',
                'Latin American',
                'Mediterranean',
                'Mexican',
                'Middle Eastern',
                'Nordic',
                'Southern',
                'Spanish',
                'Thai',
                'Vietnamese',
              ]}
            />
          </div>
          <div>
            <h4>Sort Order</h4>
            <Sort />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = state => {
  console.log(state);
  return { showFilter: state.showFilter };
};

export default connect(mapStateToProps)(FilterBox);
