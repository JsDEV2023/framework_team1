import React, {useContext} from 'react';
import './Filter.scss';
import { MyInput } from '../../UI/MyInput/MyInput';
import { MySelect } from '../../UI/MySelect/MySelect';
import { ThemeContext } from '../../providers/ThemeProvider';
import { ItemsSelect } from '../../UI/MySelect/ItemSelect/ItemSelect';
import { SearchSelect } from '../../UI/MySelect/SearchSelect/SearchSelect';


export const Filter = ({filter, setFilter, authors, locations, active, setActive}) => {
    const [theme] = useContext(ThemeContext)


    return (
        <div className="filter">
            <MyInput filter={filter} setFilter={setFilter}/>

            <MySelect 
                defaultValue='Author' 
                filter={filter} 
                theme={theme} 
                dataItem='name' 
                active={active}
                setActive={setActive}
                setFilter={setFilter}
            >
                <ItemsSelect 
                    data={authors} 
                    dataItem='name'
                    setFilter={setFilter} 
                    filter={filter}
                    theme={theme}
                    setActive={setActive}
                    active={active}
                />
            </MySelect>

            <MySelect 
                defaultValue='Location' 
                filter={filter} 
                theme={theme} 
                dataItem='location' 
                active={active}
                setActive={setActive}
                setFilter={setFilter}
            >
            <ItemsSelect 
                data={locations} 
                dataItem='location'
                setFilter={setFilter} 
                filter={filter}
                theme={theme}
                setActive={setActive}
                active={active}
            />
            </MySelect>

            <MySelect 
                defaultValue='Created' 
                filter={filter} 
                theme={theme}  
                active={active}
                setActive={setActive}
                none={true}
                setFilter={setFilter}
            >
                <SearchSelect 
                    theme={theme}
                    filter={filter}
                    setFilter={setFilter}
                />
            </MySelect>
        </div>
    )
}