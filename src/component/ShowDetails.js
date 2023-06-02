import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ShowDetails.css";

const ShowDetails = () => {
  const { showId } = useParams();
  const [show, setShow] = useState(null);

  const fetchShowDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/shows/${showId}`
      );
      const data = response.data;
      setShow(data);
    } catch (error) {
      console.error("Error fetching show details:", error);
    }
  };

  useEffect(() => {
    if(showId){  
      fetchShowDetails();
    }
  }, [showId]);

  if (!show) {
    return <div>Loading...</div>;
  }

  const renderTableRows = () => {
    return (
      <>
        <tr>
          <td>
            {" "}
            <strong> Name </strong>
          </td>
          <td>{show.name}</td>
        </tr>
        <tr>
          <td>
            {" "}
            <strong> Type</strong>
          </td>
          <td>{show.type}</td>
        </tr>
        <tr>
          <td>
            {" "}
            <strong> Status</strong>
          </td>
          <td>{show.status}</td>
        </tr>
        <tr>
          <td>
            {" "}
            <strong> Language</strong>
          </td>
          <td>{show.language}</td>
        </tr>
        <tr>
          <td>
            {" "}
            <strong> Genres</strong>
          </td>
          <td>{show.genres.join(", ")}</td>
        </tr>
        <tr>
          <td>
            {" "}
            <strong> Runtime</strong>
          </td>
          <td>{show.runtime} minutes</td>
        </tr>
        <tr>
          <td>
            {" "}
            <strong> Average Runtime</strong>
          </td>
          <td>{show.averageRuntime} minutes</td>
        </tr>
        <tr>
          <td>
            {" "}
            <strong> Premiered</strong>
          </td>
          <td>{show.premiered}</td>
        </tr>
        <tr>
          <td>
            {" "}
            <strong> Schedule</strong>
          </td>
          <td>
            {show.schedule.days.join(", ")} at {show.schedule.time}
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <strong> Rating</strong>
          </td>
          <td>{show.rating.average}</td>
        </tr>
      </>
    );
  };

  return (
    <div className="show-details-container">
      <h1 className="hedding">Show Details</h1>

      <div className="show-details">
        <img src={show.image?.medium} alt={show.name} />

        <div className="details-section">
          <table>
            <tbody>{renderTableRows()}</tbody>
          </table>
        </div>
      </div>
      <div className="summary-box">
        <h3>Summary</h3>
        <p>{show.summary}</p>
      </div>
    </div>
  );
};

export default ShowDetails;
