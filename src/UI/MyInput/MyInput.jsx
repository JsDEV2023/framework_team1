import React, { useContext } from 'react';
import './MyInput.scss';
import { ThemeContext } from '../../providers/ThemeProvider';
import cn from 'classnames';

export const MyInput = ({filter, setFilter}) => {
    const [theme] = useContext(ThemeContext)
    return (
        <input 
            type="text" 
            className={cn('filter__search', {dark: theme})} 
            placeholder='Name'
            value={filter.search}
            onChange={(e) => setFilter({...filter, search: e.target.value})}
        />
    )
}