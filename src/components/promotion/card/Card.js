import React from 'react';

const PromotionCard = (props) => {
  const {name, idade} = props
  return(
    <div>
      <h2>Card PromotionCard</h2>
      <h5>{name}</h5>
      <h6>{idade}</h6>
    </div>
  );
}
export default PromotionCard;