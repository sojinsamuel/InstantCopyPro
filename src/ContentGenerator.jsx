import { useRef, useState } from "react";
import { generateContent } from "./FetchContent";
import Form from "./Form";
import FetchedResult from "./FetchedResult";
import Spinner from "react-spinner-material";

const ContentGenerator = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [wordCount, setWordCount] = useState(100);

  const inputRef = useRef(null);
  const generateBtn = useRef(null);
  const copyBtnRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = await generateContent(query, wordCount);
    setResult(data.choices[0].text);
    setLoading(false);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSliderChange = (value) => {
    setWordCount(value);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(result);
    copyBtnRef.current.textContent = "Copied";
    setTimeout(() => {
      copyBtnRef.current.textContent = "Copy";
    }, 1000);
  };

  return (
    <React.Fragment>
      <Form
        query={query}
        inputRef={inputRef}
        wordCount={wordCount}
        generateBtn={generateBtn}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        handleSliderChange={handleSliderChange}
      />

      <Spinner
        style={{ visibility: !loading && "hidden" }}
        className="loader"
        stroke="5"
        color="#fff"
        radius="1"
      />

      <FetchedResult
        result={result}
        copyBtnRef={copyBtnRef}
        handleCopyClick={handleCopyClick}
      />
    </React.Fragment>
  );
};

export default ContentGenerator;
