import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="query">Enter a query:</label>
      <input
        type="text"
        id="query"
        value={props.query}
        autoComplete="off"
        onChange={props.handleInputChange}
        ref={props.inputRef}
        autoFocus
      />
      <br />
      <label htmlFor="word-count">Select word count: {props.wordCount}</label>

      <Slider
        id="word-count"
        min={1}
        max={1000}
        value={props.wordCount}
        onChange={props.handleSliderChange}
        style={{ width: "300px", margin: "20px 0" }}
        railStyle={{ backgroundColor: "lightgrey" }}
        trackStyle={{ backgroundColor: "black" }}
      />

      <button
        id="btn"
        type="submit"
        ref={props.generateBtn}
        disabled={props.inputRef.current?.value.length < 5}
      >
        Generate
      </button>
    </form>
  );
};

export default Form;
