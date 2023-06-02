import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ShowList.css";

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = async () => {
    try {
      const response = await axios.get(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      const data = response.data;
      setShows(data);
    } catch (error) {
      console.error("Error fetching shows:", error);
    }
  };

  const handleShowSummary = (showId) => {
    // Redirect the user to the summary screen for the selected show
    window.location.href = `/summary/${showId}`;
  };

  return (
    <div className="container">
      <h1>Show List</h1>
      <div className="row">
        {shows.map((show) => (
          <div className="col-md-4 mb-4" key={show.show.id}>
            <div className="card">
              <img
                src={show.show.image?.medium}
                className="card-img-top"
                alt={show.show.name}
              />
              <div className="card-body">
                <h5 className="card-title">{show.show.name}</h5>
                <p
                  className="card-text overflow-auto"
                  style={{ maxHeight: "150px" }}
                >
                  {show.show.summary}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleShowSummary(show.show.id)}
                >
                  Show Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
