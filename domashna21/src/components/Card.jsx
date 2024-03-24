import React from 'react'

const Card = ({img, hoverImg, favorite, title, description, date, price, rating}) => {
  return (
    <div className='card'>
      <div className="card-img">
        <img src={img} alt={title}/> 
        <img src={hoverImg} alt={title} className="hover-img" />
        {favorite && <button id='button'>{favorite}</button>}
        <span>❤️</span>
      </div>
      <div className="card-details">
        <div className="title">
          <h3>{title}</h3>
          <h3>⭐{rating}</h3>
        </div>
        <p>{description}</p>
        <p>{date}</p>
        <p>€{price} per night</p>
      </div>
    </div>
  );
};

export default Card
