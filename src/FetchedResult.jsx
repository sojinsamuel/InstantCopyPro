import { marked } from "marked";
import React from "react";

const FetchedResult = (props) => {
  return (
    <React.Fragment>
      {props.result ? (
        <React.Fragment>
          <div className="content-box">
            <div
              className="generated-text"
              dangerouslySetInnerHTML={{ __html: marked(props.result) }}
            />
          </div>
          <button
            className="copy-btn"
            ref={props.copyBtnRef}
            onClick={props.handleCopyClick}
          >
            Copy
          </button>
        </React.Fragment>
      ) : (
        <div className="content-box">
          <p>
            Type something and click the Generate button to see your desired
            result.
          </p>
        </div>
      )}
    </React.Fragment>
  );
};

export default FetchedResult;
