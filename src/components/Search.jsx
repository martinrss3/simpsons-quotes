import React, { useState, useEffect } from "react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import axios from "axios";
import HomeroLoading from "../video/homer-simpsons-monkey.gif";
import "../css/search.css";

export const Search = () => {
  const [allData, setAllData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=15";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setAllData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredData(
      allData.filter((data) =>
        data.character.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, allData]);

  return (
    <React.Fragment>
      <div className="search-wrapper">
        <div className="search- navbar">
          <Nav />
        </div>
        <div className="input-container">
          <input
            className="input-search"
            type="text"
            placeholder="search by name character"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {isLoading ? (
          <div className="loading">
            <img className="loading-homer" src={HomeroLoading} alt="homero" />
            <p className="loading-text">Waiting for api response...</p>
          </div>
        ) : (
          <div className="cards">
            {filteredData.map((item, idx) => (
              <div className="card">
                <div key={idx}>
                  <div
                    className="card-header"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  ></div>

                  <div className="card-body">
                    <div className="quote">"{item.quote}"</div>
                    <h2 className="name">- {item.character}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <Footer />
      </div>
    </React.Fragment>
  );
};
