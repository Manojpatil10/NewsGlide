import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { IoMdSearch } from "react-icons/io";

const NewsApp = () => {
  const [search, setSearch] = useState("India");
  const [newsData, setNewsData] = useState(null);
  // const API_KEY = "36b0e2afeea84ec3aac673f24c92a5c3";
  const API_KEY = "6043747835a84f06a014b0c35890f438";

  const getData = async () => {
    // const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
  };

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  const userInput = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <nav>
        <div className="container">
          <div className="row">
            <div className="logo col-6 col-xl-3 col-xxl-4">
              News<span>Glide</span>
            </div>
            <div className="d-none d-xl-flex col-xl-6 col-xxl-5">
              <ul className="nav-ul">
                <li>
                  <a href="#">ENGLISH</a>
                  <span>|</span>
                </li>
                <li>
                  <a href="#">HINDI</a>
                  <span>|</span>
                </li>
                <li>
                  <a href="#">MARATHI</a>
                  <span>|</span>
                </li>
                <li>
                  <a href="#">GUJRATI</a>
                  <span>|</span>
                </li>
                <li>
                  <a href="#">TELGU</a>
                  <span>|</span>
                </li>
                <li>
                  <a href="#">PUNJABI</a>
                </li>
                
              </ul>
            </div>
            <div className="col-6 d-flex justify-content-end col-xl-3 col-xxl-3">
              <div className="searchBar">
                <input
                  type="text"
                  placeholder="Search News"
                  value={search}
                  onChange={handleInput}
                ></input>
                <button onClick={getData}>
                  <IoMdSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <p className="header-para">Glide Through the Latest Headlines.</p>
      </div>
      <div className="categoryBtn">
        <button onClick={userInput} value="sports">
          Sports
        </button>
        <button onClick={userInput} value="politics">
          Politics
        </button>
        <button onClick={userInput} value="entertainment">
          Entertainment
        </button>
        <button onClick={userInput} value="health">
          Health
        </button>
        <button onClick={userInput} value="fitness">
          Fitness
        </button>
      </div>

      <div>{newsData ? <Cards data={newsData} /> : null}</div>
    </div>
  );
};

export default NewsApp;
