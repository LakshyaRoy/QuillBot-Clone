import "./MoreResults.css";
import PropTypes from "prop-types";
const MoreResults = ({ sendDataParam }) => {
  MoreResults.propTypes = {
    sendDataParam: PropTypes.any.isRequired,
  };
  // console.log(sendDataParam);
  return (
    <div className="MainData-MoreResults-container">
      <h3 className="Heading">
        {sendDataParam?.results?.length ? `More Results` : ""}
      </h3>
      <div className="MainData-MoreResults-container-content">
        {sendDataParam?.results?.map((result, key) => {
          return (
            <div key={key} className="MainData-MoreResults">
              <p className="title-more-results" title="Title">
                {result?.title}
              </p>
              <p className="description-more-results" title="Description">
                {result?.description}
              </p>
              <button className="button-more-results" title={result?.url}>
                <a
                  className="link-more-results"
                  href={result?.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get More Content
                </a>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoreResults;
