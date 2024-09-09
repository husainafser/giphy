import {useEffect, useState} from "react";
import {GifState} from "../context/Context";
import {useParams} from "react-router-dom";
import Gifs from "../components/Gifs";
import Follow from "../components/Follow";
import { FaSpinner } from 'react-icons/fa';

const Category = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const {gf} = GifState();

  const {category} = useParams();

  const fetchSearchResults = async () => {
    
    const {data} = await gf.gifs(category, category);
    // console.log(data);

    setSearchResults(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchSearchResults();
  }, [category]);

  if(loading){
    return (
      <div className="flex h-screen justify-center items-center">
      <FaSpinner className="animate-spin h-10 w-24 mr-3 ..." />
      
      </div>
    )
  }

  return (
    <div className="flex flex-col sm:flex-row gap-5 my-4">
      <div className="w-full sm:w-72">
        {searchResults.length > 0 && <Gifs gif={searchResults[0]} />}
        <span className="text-gray-400 text-sm pt-2">
          Don&apos;t tell it to me, GIF it to me!
        </span>
        <Follow />
        <div className="w-full h-0.5 mt-6 bg-gray-800" />
      </div>
      <div>
        <h2 className="text-4xl pb-1 font-extrabold capitalize">
          {category.split("-").join(" & ")} GIFs
        </h2>
        <h2 className="text-lg text-gray-400 pb-3 font-bold hover:text-gray-50 cursor-pointer">
          @{category}
        </h2>

        {searchResults.length > 0 && (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
            {searchResults.slice(1).map((gif) => (
              <Gifs gif={gif} key={gif.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;