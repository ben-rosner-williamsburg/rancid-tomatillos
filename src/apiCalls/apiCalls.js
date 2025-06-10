export const getMovies = () => {
  return fetch("https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies")
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status)
      } else {
        return response.json()
      }
    })
};

export const getSingleMovie = (id) => {
  return fetch(`https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status)
      }
      else {
        return response.json()
      }
    })
  }