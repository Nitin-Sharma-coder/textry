import React from "react";

export default function About(props) {
  // const [mystyle, setmystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  let mystyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#20231F" : "white",
  };

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h2>About Using Textry</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              style={mystyle}
            >
              Lower case
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>
                If you're questioning the way to uncapitalize textual content,
                that is precisely what the lower case textual content converter
                will assist you to do - it transforms all of the letters on your
                textual content into lowercase letters. If you're questioning
                the way to uncapitalize textual content, that is precisely what
                the lower case textual content converter will assist you to do -
                it transforms all of the letters on your textual content into
                lowercase letters.
              </strong>
              <br />
              {"⇒"} Simply replica the textual content which you need generating
              into lower case and paste the textual content into the container
              above and pick the ‘lower case’ tab.
              <br />
              <code>
                <b>that is an instance of lower case.</b>
              </code>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Upper case
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>
                The upper case transformer will take any textual content which
                you have and could generate all of the letters into upper case
                ones. It will basically make all lower case letters into
                CAPITALS (in addition to preserve higher case letters as higher
                case letters).
              </strong>
              <br />
              {"⇒"}
              To do this, you truely need to pick out the textual content that
              you need changing and pasting into the field above after which
              pick out the UPPER CASE tab.
              <br />
              <code>
                <b>THIS IS AN EXAMPLE OF UPPER CASE.</b>
              </code>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
              Remove extra Spaces From Text
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>
                The remove extra space transformer will take any textual content
                which you have and could generate all of the letters removing
                extra spaces between them leaving only one space.
              </strong>
              <br />
              {"⇒"}To do this, you truely need to pick out the textual content
              that you need changing and pasting into the field above after
              which pick out the Remove extra space tab.
              <code></code>
              overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
