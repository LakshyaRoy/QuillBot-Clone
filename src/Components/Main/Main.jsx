import IMg from "../../assets/IMg.png";
import "remixicon/fonts/remixicon.css";
import "./Main.css";
import { useState } from "react";
import axios from "axios";
import MainData from "../MainData/MainData";
import MoreResults from "../MainData/MoreResults";
import RelatedKeyWord from "../MainData/RelatedKeyWord";
import PacmanLoader from "react-spinners/PacmanLoader";

const Main = () => {
  const [currentInput, setCurrentInput] = useState("");
  const [sendDataParam, setSendDataParam] = useState([]);
  const [Loading, setLoading] = useState(false);

  const sendData = async () => {
    setLoading(true);
    const url = "https://google-web-search1.p.rapidapi.com/";
    const options = {
      method: "GET",
      url,
      params: {
        query: currentInput,
        limit: "20",
        related_keywords: "true",
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_APP_KEY,
        "X-RapidAPI-Host": "google-web-search1.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      setSendDataParam(response?.data);
      //   console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  // <PacmanLoader color="#36d7b7" />

  return (
    <main>
      <div className="innerMain">
        <div className="img">
          <img src={IMg} alt="" />
        </div>

        <p className="title">
          Create Accurate Citations <span>for Free</span>
        </p>

        <div className="input-container">
          <i className="ri-search-line" />
          <input
            type="text"
            placeholder="Search for Keywords, Topics, and Ideas"
            className="input"
            autoComplete="off"
            spellCheck="false"
            autoCorrect="off"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                sendData();
              }
            }}
          />
          <i className="ri-send-plane-2-line" onClick={sendData} />
        </div>
      </div>

      {Loading ? (
        <div className="loading">
          <PacmanLoader color="#499557" />
        </div>
      ) : (
        <>
          <MainData sendDataParam={sendDataParam} />
          <MoreResults sendDataParam={sendDataParam} />
          <RelatedKeyWord sendDataParam={sendDataParam} />
        </>
      )}
    </main>
  );
};

export default Main;
