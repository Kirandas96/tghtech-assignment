import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, getQuotes, getTags } from "../Redux/Quotes/action";
import Dropdown from "./Dropdown";
import { Loading } from "./Loading";
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
const newArr=[]
 const saved=localStorage.getItem("bookmarks")!==null?JSON.parse(localStorage.getItem("bookmarks")):[]
const loading=useSelector((state) => state.quoteReducer.isLoading);
  const handleNext=()=>{
    dispatch(getQuotes())
  }
  const handleSave=(item)=>{
    dispatch(addBookmark([...saved,item]))
  }
  return (
    <div className="home">
      <Navbar weight1="700"/>
      <div className="container">
        {loading?<Loading/>:
         <div>
         {
          quote.map((el)=>{
            return(
              <div className="quote" key={el._id}>
              <p>{el.content}</p>
              <h3>-{el.author}</h3>
              <div>
                <button onClick={()=>handleSave(el)}>Bookmark</button>
              </div>
            </div>
            )
          })
         }
         </div>}
      
        <div className="selector">
          <Dropdown arr={tags} />
        </div>
        <div>
          <button onClick={()=>handleNext()}>Next</button>
        </div>
      </div>
    </div>
  );
};
