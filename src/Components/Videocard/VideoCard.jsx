import React from 'react';
import "./videocard.css";
import TextTruncate from "react-text-truncate";
import RecommendIcon from '@mui/icons-material/Recommend';


const base_url= "https://image.tmdb.org/t/p/original";
function VideoCard({movie}) {
  
  return (
    <div className='videocard'>
        <img src= { `${base_url}${movie.backdrop_path || movie.poster_path}`} alt=""/> 
        <TextTruncate line={3} element="p" truncateText='...' text={movie.overview}/>
        
        <h2>{movie.title || movie.original_name}</h2>  
        <p className='moviecard'>{movie.release_date || movie.first_air_date} <br/>{`Likes: ${movie.vote_count}`}</p>
    </div>
  )
}

export default VideoCard
