export const getMovies = () => {
  return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
     .then((response) => {
      if (!response.ok) {
        throw new Error(response.status) 
      } else {
        return response.json()
      }
     })
};





