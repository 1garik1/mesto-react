import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card)
  }

  return(
    <article className="elements__element">
    <button type="button" className="elements__delete-btn" title='удалить'/>
    <img src={props.link} alt={props.name} title="Посмотреть в полном размере" className="elements__image" onClick={handleClick}/>
    <div className="elements__figcaption">
      <h2 className="elements__title">{props.name}</h2>
      <div className="elements__likes-info">
        <button className="elements__button" type="button" title='нравится'/>
        <span className="elements__counter-likes">{props.likes}</span>
      </div>
    </div>
  </article>
  )
}

export default Card;