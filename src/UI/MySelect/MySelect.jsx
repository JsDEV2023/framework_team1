import React from 'react';
import './MySelect.scss';
import dark from '../../img/vector_dark.svg';
import light from '../../img/vector_light.svg';
import deleteDark from '../../img/delete_dark.svg';
import deleteLight from '../../img/delete_light.svg';
import cn from 'classnames';


export const MySelect = ({defaultValue, filter, dataItem, children, theme, active, setActive, none, setFilter}) => {

    return (
        <div className='filter__dropdown'>
            <div 
                className={cn("filter__dropdown-title", {dark: theme, active: active[dataItem]})}
                onClick={() => setActive(prev => {return {...prev, [dataItem]: !prev[dataItem]}})}
            >   
                <div className="filter-dropdown-text" >
                    {filter[dataItem] || defaultValue}
                </div>
                <div className="filter__dropdown-img">
                    <img 
                        src={theme ? deleteDark : deleteLight} 
                        alt="vector_dropdown" 
                        className={cn('filter__dropdown-vector', {active: active[dataItem], none: none})}
                        onClick={(e) => {
                            e.stopPropagation()
                            setFilter({...filter, [dataItem]: ''})
                            console.log('hi')
                        }
                        }
                    />
                    <img 
                        src={theme ? dark : light} 
                        alt="vector_dropdown" 
                        className={cn('filter__dropdown-vector', {active: active[dataItem]})}
                    />
                </div>
            </div>
            {active[dataItem] 
                &&
            children 
            } 
        </div>
    )
}