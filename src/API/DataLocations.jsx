import axios from "axios"

export async function DataLocations() {
    try {
        const dataServerLocation= await axios.get('https://test-front.framework.team/locations')
        return (dataServerLocation.data)
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
