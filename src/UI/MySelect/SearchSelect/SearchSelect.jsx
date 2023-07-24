import React from 'react';
import './SearchSelect.scss';
import cn from 'classnames'   

export const SearchSelect = ({theme, filter, setFilter}) => {
    return (
        <div className={cn("filter__dropdown-content",'filter__dropdown-content_search', {dark: theme})}>
            <input 
                type="text" 
                placeholder='from' 
                value={filter.created.from} 
                onChange={e => setFilter({...filter, created: {...filter.created, from: e.target.value}})}
            />
            <div className={cn("spacer", {dark: theme})}>
                <span className="spacer"></span>
            </div>
            <input 
                type="text" 
                placeholder='before' 
                value={filter.created.before}
                onChange={e => setFilter({...filter, created: {...filter.created, before: e.target.value}})}
            />
        </div>
    )
}