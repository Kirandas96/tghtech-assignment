import React from "react";
import { useSelector } from "react-redux";
import { Loading } from "./Loading";
import { Navbar } from "./Navbar";

export const Bookmark = () => {
  const saved = useSelector((state) => state.quoteReducer.bookmarks);
  const loading=useSelector((state) => state.quoteReducer.isLoading);
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
              </div>
            );
          })}
        </div>}
        
       
        </div>
      </div>
    </div>
  );
};
