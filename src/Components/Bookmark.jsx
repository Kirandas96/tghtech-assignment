import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "./Loading";
import { Navbar } from "./Navbar";
import { getQuotes} from "../Redux/Quotes/action";

export const Bookmark = () => {
  const[c,setC]=useState(1)
const dispatch=useDispatch()
  const saved = useSelector((state) => state.quoteReducer.bookmarks);
  const loading=useSelector((state) => state.quoteReducer.isLoading);
  const bookmarks=localStorage.getItem("bookmarks")!==null?JSON.parse(localStorage.getItem("bookmarks")):[]
  var filter=[]
  console.log(saved);
  
  const handleRemove=(el)=>{
    filter=bookmarks.filter(item=>item._id!==el._id)
    localStorage.clear();
    localStorage.setItem("bookmarks",JSON.stringify(filter))
    setC(c+1)
  }
  return (
    <div>
      <div className="home">
        <div>
            <h2>BOOKMARKS</h2>
        </div>
        <div>
          <Navbar weight2="700"/>
        </div>
        <div className="container">
        {loading?<Loading/>:<div>
        {saved?.map((el) => {
            return (
              <div className="quote" key={el._id}>
                <p>{el.content}</p>
                <h3>-{el.author}</h3>
                <button onClick={()=>handleRemove(el)}>Remove</button>
              </div>
            );
          })}
        </div>}
        
       
        </div>
      </div>
    </div>
  );
};
