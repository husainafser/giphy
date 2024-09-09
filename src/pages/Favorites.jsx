import React, { useState } from 'react'
import { GifState } from '../context/Context';
import { useEffect } from 'react';
import Gifs from '../components/Gifs'
import { FaSpinner } from 'react-icons/fa';

const Favorites = () => {

  const [loading, setLoading] = useState(false);
  const [favoriteGIFs, setFavorites] = useState([]);
  const {gf, favorites} =  GifState();
  const fetchFavoriteGIFs = async ()=>{
    const {data:gifs} = await gf.gifs(favorites);
    setFavorites(gifs);
    setLoading(false);
  }
  
  useEffect(()=>{
    setLoading(true);
   fetchFavoriteGIFs();
  },[])
  if(loading){
    return (
      <div className="flex h-screen justify-center items-center">
      <FaSpinner className="animate-spin h-10 w-24 mr-3 ..." />
      </div>
    )
  }
  return (
    <div className="mt-2">
      <span className="faded-text ">My Favorites</span>
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2 mt-2">
        {favoriteGIFs.map((gif) => (
          <Gifs gif={gif} key={gif.id} />
        ))}
      </div>
    </div>
  )
}

export default Favorites