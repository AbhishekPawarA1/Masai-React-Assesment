import { useState, useEffect } from "react"
import axios from "axios"
import "../css/showdata.css"
let url =
    "https://apipractice-85bc9-default-rtdb.asia-southeast1.firebasedatabase.app/.json";

export function Showdata() {

    let [movies, setmovies] = useState([])
    
    useEffect(() => {
        fetchdata(); 
    },[])
    async function fetchdata() {
        try {
            let response = await axios.get(url)
            setmovies(response.data)
            
            
        } catch (error) {
            console.log("Issue in fetching data",error)
        }
    }

    async function handledelete(id) {
        try {
            await axios.delete(`https://apipractice-85bc9-default-rtdb.asia-southeast1.firebasedatabase.app/${id-1}/.json`);
            // setmovies()
            fetchdata()
            alert(`movie is delete id is : ${id-1}`)
            
            
        } catch (error) {
            console.log("error in deleting data")
        }
        
    }
    return (
        <div className="parent">
            {
                
                movies.map((movie) => {

                    if (movie != null){
                        return (
                            <div className="childs" key={movie.id}>
                                <img src={movie.poster} alt="image" />
                                <p>
                                    <b>Title: </b>
                                    {movie.title}
                                </p>
                                <p>
                                    <b>Genre: </b>
                                    {movie.genre}
                                </p>
                                <p>
                                    <b>Director: </b>
                                    {movie.director}
                                </p>
                                <p>
                                    <b>Year: </b>
                                    {movie.release_year}
                                </p>
                                <button onClick={() => handledelete(movie.id)}>
                                    Delete 🗑️
                                </button>
                            </div>
                        );
                    }
                })
            }
        </div>
    )
}