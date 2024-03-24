import React from 'react';

const Item = ({ name, isPacked, ItemImg }) => {
  return (
    <div className="item">
      <img src={ItemImg} alt={name}></img>
      <p>
      <span>{name}</span>
      {isPacked ? ' ✔️' : ' ❌'}
      </p>
      </div>   
  );
};

export default Item;