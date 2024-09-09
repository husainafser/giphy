import React, { useEffect, useState } from 'react';
import { GifState } from '../context/Context';
import Gifs from '../components/Gifs';
import Filter from '../components/Filter';
import { FaSpinner } from 'react-icons/fa';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const {gf,gifs,setGifs,filter} = GifState();
  
  // console.log(filter);

  const fetchTrendingGIFs = async ()=>{
    
    const {data} = await gf.trending({
      limit : 20,
      type:filter,
      rating:"g",
    });
    setGifs(data);
    setLoading(false);
  }

  useEffect(()=>{
    setLoading(true);
    fetchTrendingGIFs();
  },[filter]
);
if(loading){
  return (
    <div className="flex h-screen justify-center items-center">
    <FaSpinner className="animate-spin h-10 w-24 mr-3 ..." />
    
    </div>
  )
}
  return (
    <div>
      <img
       src='/banner.gif'
       alt='earth banner'
       className='mt-2 py-2 rounded w-full'
       />

      <Filter showTrending />

      <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2'>
        {gifs.map((gif)=>{
          return <Gifs gif={gif} key={gif.id} link={true}/>
        })}
      </div>

    </div>
  )
}

export default Home