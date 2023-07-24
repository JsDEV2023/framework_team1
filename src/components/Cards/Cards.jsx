import React from 'react';
import './Cards.scss';
import { CardsItem } from './CardsItem/CardsItem';


export const Cards = ({cards, locations, authors}) => {
    return (
        <ul className='cards__list'>
            {
                cards.map(card => {
                    return <CardsItem card={card} key={card.id} locations={locations} authors={authors}/>
                })
            }
        </ul>   
    )
}