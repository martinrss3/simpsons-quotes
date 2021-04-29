import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/search.css";

export const Search = () => {
  const [allData, setAllData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=15";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setAllData(res.data);
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
      <div style={{ margin: 60 }}>
        <input
          className="input-search"
          type="text"
          placeholder="search by name character"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

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
                <h2 className="name">{item.character}</h2>
                <h4 className="title-quote">Quote:</h4>
                <div className="quote">{item.quote}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
