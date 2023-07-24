import React from 'react';
import './ItemSelect.scss';
import cn from 'classnames';

export const ItemsSelect = ({data, dataItem, setFilter, active, setActive, theme, filter}) => {

    return (
        <ul 
            className={cn("filter__dropdown-content", {dark: theme})} 
            value={filter[dataItem]}
            onChange={(e) => filter[dataItem] = e.target.value }
        >
            {data.map(item => {
                return <li 
                            className={cn("filter__dropdown-item", {dark: theme} )}
                            key={item.id}
                            onClick={() => {
                                setFilter({...filter, [dataItem]: item[dataItem]})
                                setActive({...active, [dataItem]: false})
                            }}
                        >
                            {item[dataItem]}
                        </li>
            })}
        </ul>
    )
}