import PropTypes from "prop-types";
import "./MainData.css";

const MainData = ({ sendDataParam }) => {
  MainData.propTypes = {
    sendDataParam: PropTypes.any.isRequired, // or specify the correct prop type
  };

  console.log(sendDataParam);
  const { knowledge_panel } = sendDataParam;
  //   console.log("main-> ", knowledge_panel);
  return (
    <>
      <h3 className="Heading">
        {knowledge_panel
          ? `Web Search for ${knowledge_panel?.name}`
          : "Web Search"}
      </h3>
      <div className="MainData">
        <div className=" Basic-info">
          <p>
            {knowledge_panel?.description?.site}
            {"  "}
            <a
              href={knowledge_panel?.description?.url}
              target="_blank"
              rel="noreferrer"
            >
              {knowledge_panel?.description?.url}
            </a>
          </p>

          <figure>
            <img
              src={knowledge_panel?.image?.url}
              alt={knowledge_panel?.name}
              width="100px"
            />
          </figure>
        </div>

        <div className="description-info">
          <div className="knowledge_panel-title">
            {" "}
            {knowledge_panel ? (
              <>
                <strong>Title :-</strong>
                {knowledge_panel?.name
                  ? knowledge_panel?.name
                  : "No results found"}

                <div className="knowledge_panel-label">
                  {" "}
                  <strong>Label :- </strong>
                  {knowledge_panel?.label
                    ? knowledge_panel?.label
                    : "No results found"}
                </div>
              </>
            ) : (
              <>{" No Search Results "}</>
            )}
          </div>

          <p className="knowledge_panel-description">
            {knowledge_panel ? (
              <>
                <strong>Description :-</strong>
                {knowledge_panel?.description
                  ? knowledge_panel?.description?.text
                  : "No results found"}
              </>
            ) : (
              <>{""}</>
            )}
          </p>
        </div>

        <div className="knowledge_panel-Extra-info">
          <ul>
            {knowledge_panel?.info.map((item, index) => {
              return (
                <li key={index}>
                  {item?.title} :-{" "}
                  {item?.labels?.map((label, index) => (
                    // console.log(label);
                    <span
                      key={index}
                      className="knowledge_panel-label-extra-info"
                    >
                      {" "}
                      {label} ,
                    </span>
                  ))}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainData;
