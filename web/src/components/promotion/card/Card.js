import React from 'react';
import './Card.css'

const PromotionCard = (props) => {
  const {promotion} = props
  return(
    <div className='promotion-card'>
      <img className='promotion-card__img' src={promotion.imageUrl} alt='promocao mochila'></img>  
      <div className='promotion-card__info'>
        
        <h1  className='promotion-card__title'>{promotion.title}</h1>
        
        <span className='promotion-card__price'>R$ {promotion.price}</span>
        
        <footer className='promotion-card__footer'>
          {promotion.comments.length > 0 && (
          <div className='promotion-card__comment'> "{promotion.comments[0].comment}" </div>)}

          <div className='promotion-card__comment-count'> {promotion.comments.length} comentarios</div>
          <a className='promotion-card_link' rel='noreferrer' href = {promotion.url} target="_blank">Ir para site</a>
        </footer>
      </div>
    </div>
  );
}
export default PromotionCard;