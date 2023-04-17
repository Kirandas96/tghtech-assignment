import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, getQuotes, getTags } from "../Redux/Quotes/action";
import Dropdown from "./Dropdown";
import { Navbar } from "./Navbar";

export const Home = () => {
  const dispatch = useDispatch();
  const [quotes, setQuotes] = useState({});

  useEffect(() => {
    dispatch(getQuotes());
    dispatch(getTags());
  }, []);
  const quote = useSelector((state) => state.quoteReducer.quote);
  const tags = useSelector((state) => state.quoteReducer.tags);
 console.log(tags);

  const tagsFetching = () => {
    axios.get("http://api.quotable.io/tags").then((data) => {
      setTags(data?.data);
    });
  };

  const handleNext=()=>{
    dispatch(getQuotes())
  }
  const handleSave=(item)=>{
    dispatch(addBookmark(item))
  }
  return (
    <div className="home">
      <Navbar />
      <div className="container">
       {
        quote.map((el)=>{
          return(
            <div className="quote">
            <p>{el.content}</p>
            <h3>-{el.author}</h3>
            <div>
              <button onClick={()=>handleSave(el)}>Bookmark</button>
            </div>
          </div>
          )
        })
       }
        <div>
          <Dropdown arr={tags} />
        </div>
        <div>
          <button onClick={()=>handleNext()}>Next</button>
        </div>
      </div>
    </div>
  );
};
