import React, {useContext, useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Filter } from './components/Filter/Filter';
import { ThemeContext } from './providers/ThemeProvider.jsx';
import cn from 'classnames';
import { DataCards } from './API/DataCards';
import { DataAuthors } from './API/DataAuthors';
import { DataLocations} from './API/DataLocations';
import { Cards } from './components/Cards/Cards';
import { Pagination } from './UI/Pagination/Pagination';


function App() {
  const [theme] = useContext(ThemeContext);
  const [filter, setFilter] = useState({search: '', name: '', location: '', created: {from: '', before: ''}})
  const [active, setActive] = useState({authors: false, locations: false, created: false})
  const [cards, setCards] = useState([])
  const [authors, setAuthors] = useState([])
  const [locations, setLocations] = useState([])
  const [limit] = useState(12)
  const [page, setPage] = useState(1)
  const [countPage, setCountPage] = useState(0)
  let arrayCountPages = getArrayCountPage(countPage)

  const getCountPage = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
  }

  function getArrayCountPage () {
    let arr = []
    for (let i = 0; i < countPage; i++) {
      arr.push(i+1)
    }

    return arr
  }

  useEffect(() => {
    fetch()
  }, [page, filter])


  async function fetch () {
    const getAuthors = await DataAuthors()
    setAuthors(() => getAuthors)
    
    const getLocations = await DataLocations()
    setLocations(() => getLocations)

    const getCards = await DataCards(limit, page, filter, authors, locations)
    setCards(() => getCards.data)
    const totalCount = getCards.headers['x-total-count']
    setCountPage(getCountPage(totalCount, limit))

  }


  

  return (
      <div className={cn('wrapper', {dark: theme})}>
        <div className="container">
          <Header />
          <Filter filter={filter} setFilter={setFilter} locations={locations} authors={authors} active={active} setActive={setActive}/>
          <Cards cards={cards} locations={locations} authors={authors}/>
          <Pagination arrayCountPages={arrayCountPages} page={page} setPage={setPage}/>
        </div>
      </div>
  );
}

export default App;
