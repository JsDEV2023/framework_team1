import axios from "axios"

export async function DataCards(limit = 12, page = 1, filter, authors, locations) {
    try {
        const dataServerCards = await axios.get('https://test-front.framework.team/paintings', {
          params: {
            _limit: limit,
            _page: page
          }
        }).then(res => {
            if (filter.search) {
              res.data = res.data.filter(card => card.name.toLowerCase().includes(filter.search.toLowerCase()))
            }
            if (filter.created.from || filter.created.before) {
              res.data = res.data.filter(card => card.created >= filter.created.from)
            }
            if (filter.created.before) {
              res.data = res.data.filter(card => card.created <= filter.created.before)
            }
            if (filter.name) {
              res.data = res.data.filter(card => authors[card.authorId].name === filter.name)
            }
            if (filter.location) {
              res.data = res.data.filter(card => locations[card.locationId].location === filter.location)
            }
            return res

        })
        return dataServerCards
    } catch (error) {
        if (error.response) {
          const { data } = error.response
          console.error(data)
        } else if (error.request) {
          console.error(error.request)
        } else {
          console.error(error.message)
        }
        console.error(error.config)
        console.error(error.toJSON())
      }
}

