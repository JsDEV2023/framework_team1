import axios from "axios"

export async function DataAuthors() {
    try {
        const dataServerAuthors = await axios.get('https://test-front.framework.team/authors')
        return (dataServerAuthors.data)
    } catch (error) {
        if (error.response) {
          // Статус ответа выходит за пределы 2xx
          const { data, status, headers } = error.response
          console.error(data)
        } else if (error.request) {
          // Отсутствует тело ответа
          console.error(error.request)
        } else {
          // Ошибка, связанная с неправильной настройкой запроса
          console.error(error.message)
        }
        // Другая ошибка
        console.error(error.config)
        // Подробная информация об ошибке
        console.error(error.toJSON())
      }
}
