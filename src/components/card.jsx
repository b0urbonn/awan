import React from 'react';

const Card = ({ image, title, body }) => {
  return (
    <div className='card'>
      <img src={image} alt='' className='card-image' />
      <h2 className='card-title'>{title}</h2>
      <p className='card-body'>{body}</p>
    </div>
  );
};

export default Card;
