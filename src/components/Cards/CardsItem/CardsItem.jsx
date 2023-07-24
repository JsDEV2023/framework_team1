import React from 'react';
import './CardsItem.scss';

export const CardsItem = ({card, locations, authors}) => {
    return (
        <li className='cards__item'>
            <div className="cards__item-img">
                <img src={'https://test-front.framework.team/' + card.imageUrl} alt="" />
            </div>
            <div className="cards__item-info">
                <h3 className="cards__item-title">
                    {card.name}
                </h3>
                <p className="cards__item-about">
                    <span>Author: </span>
                    {authors[card.authorId-1].name}
                </p>
                <p className="cards__item-about">
                    <span>Created: </span>
                    {card.created}
                </p>
                <p className="cards__item-about">
                    <span>Location: </span>
                    {locations[card.locationId-1].location}
                </p>
            </div>
        </li>
    )
}