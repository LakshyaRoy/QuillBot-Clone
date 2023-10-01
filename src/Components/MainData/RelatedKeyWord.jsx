import PropTypes from "prop-types";
import "./RelatedKeyWord.css";
const RelatedKeyWord = ({ sendDataParam }) => {
  RelatedKeyWord.propTypes = {
    sendDataParam: PropTypes.any.isRequired,
  };
  // console.log(sendDataParam?.related_keywords);
  return (
    <>
      <h3
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
          fontWeight: "600",
          fontSize: "1.5rem",
        }}
      >
        {sendDataParam?.related_keywords?.keywords?.length
          ? `Related Keywords`
          : ""}
      </h3>
      <div className="RelatedKeyWord-container">
        <div>
          {sendDataParam?.related_keywords?.keywords?.map((result, key) => {
            return (
              <p className="RelatedKeyWord" key={key}>
                {result?.keyword}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RelatedKeyWord;
