import React from "react";

const ShoeCard = ({el}) => {
  const shoeId = el.id;
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`}>
      <img data-cy="shoe-card-image" src={el.image} alt="shoe" style={{height:"200px",width:"200px"}}/>
      <div>
        <div data-cy="shoe-name">shoe-name{el.name}</div>
        <div>
          In Cart:
          <div data-cy="shoe-count">0</div>
          <button data-cy="increment-shoe-count-button">+</button>
          <button data-cy="decrement-shoe-count-button">-</button>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
