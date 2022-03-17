import React, { useEffect, useState } from 'react';
import VideoCard from '../Videocard/VideoCard';
import "./result.css"
import axios from "../Request/Axios"


function Result({selectedOption}) {
  const [movies,setmovies]=useState([]);

  useEffect(()=>{
    async function fetchData(){
      const request=await  axios.get(selectedOption)
      console.log(request)
      setmovies(request.data.results);
      return request;
      

    }
    fetchData();
  },[selectedOption])
  return (
    <div className='result'>
      {movies.map((movie)=>(
           <VideoCard key={movie.id}movie={movie}/>

      ))}
     
    
      
    </div>
  )
}

export default Result
