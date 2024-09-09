import {useEffect, useState} from "react";
import { GifState } from '../context/Context';
import {useParams} from "react-router-dom";
import Gifs from "../components/Gifs";
import Filter from "../components/Filter";
import { FaSpinner } from 'react-icons/fa';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const {gf, filter} = GifState();

  const {query} = useParams();

  const fetchSearchResults = async () => {
    const {data} = await gf.search(query, {
      sort: "relevant",
      lang: "en",
      type: filter,
      limit: 20,
    });

    setSearchResults(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchSearchResults();
  }, [filter]);

  if(loading){
    return (
      <div className="flex h-screen justify-center items-center">
      <FaSpinner className="animate-spin h-10 w-24 mr-3 ..." />
      
      </div>
    )
  }

  return (
    <div className="my-4">
      <h2 className="text-5xl pb-3 font-extrabold">{query}</h2>
      <Filter alignLeft={true} />
      {searchResults.length > 0 ? (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
          {searchResults.map((gif) => (
            <Gifs gif={gif} key={gif.id} />
          ))}
        </div>
      ) : (
        <span>
          No GIFs found for {query}. Try searching for Stickers instead?
        </span>
      )}
    </div>
  );
};

export default Search;