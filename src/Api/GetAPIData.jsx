export const getMoviesData  = async() =>{
    try {
        const response = await fetch(" http://www.omdbapi.com/?i=tt3896198&apikey=342e4c02");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}