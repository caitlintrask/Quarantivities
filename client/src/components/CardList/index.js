import React from "react";
import Likes from "../Likes";
import Reminder from "../Reminder"
import "./style.css";

//this code would make card, card front, card back no longer necessary

export function CardList ({ children }) {
    return <ul className="list-group">{children}</ul>;
}

export function CardListItem({
    id,   
    title,
    href,
    description,
    thumbnail,
}) {
    return (
        <div className="card col-m-3 flip-card">
          <div className="flip-card-inner">
          <div className="flip-card-front">
          <img src={thumbnail} className="card-img-top" alt={title}></img>
            <p className="card-text">{title}</p>
          </div>
          <div className="flip-card-back">
          <p className="card-text">{description}</p>
            <a href={href} className="card-link">Link to Website</a>
            <Likes id={id} /> 
            <Reminder />
          </div>
          </div>
        </div>
      );
}