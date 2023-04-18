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
  const newArr = [];
  const saved =
    localStorage.getItem("bookmarks") !== null
      ? JSON.parse(localStorage.getItem("bookmarks"))
      : [];
  const loading = useSelector((state) => state.quoteReducer.isLoading);
  const handleNext = () => {
    dispatch(getQuotes());
  };
  const handleSave = (item) => {
    dispatch(addBookmark([...saved, item]));
  };
  return (
    <div className="home">
      <Navbar weight1="700" />
      <div className="container">
        {loading ? (
          <div className="loading">
            <Loading />
            <h3>Loading...</h3>
          </div>
        ) : (
          <div>
            <div className="quote" key={quote[0]?._id}>
              <p>{quote[0]?.content}</p>
              <h3>-{quote[0]?.author}</h3>
              <div>
                <button onClick={() => handleSave(quote[0])}>Bookmark</button>
              </div>
            </div>
          </div>
        )}

        <div className="selector">
          <Dropdown arr={tags} />
        </div>
        <div>
          <button onClick={() => handleNext()}>Next</button>
        </div>
      </div>
    </div>
  );
};
