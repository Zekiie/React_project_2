import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngridient/BurgerIngredient';

const burger = props => {
  let transformedIngr = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />
      })
  })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);
if (transformedIngr.length === 0) {
  transformedIngr = <p>Please start ingredients</p>
}
  console.log(transformedIngr);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngr}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;