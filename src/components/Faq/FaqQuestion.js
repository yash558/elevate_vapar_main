import React from "react";
import { faAdd, faSubtract } from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "react-collapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FaqQuestion = ({ open, toggle, title, desc, color, textColor }) => {
  // Split the 'desc' string by line breaks and map each line to a <p> element
  const descLines = desc.split("\n").map((line, index) => (
    <p key={index} className="mb-2">
      {line}
    </p>
  ));

  return (
    <div className="items-left text-left">
      <div style={{ background: color ? color : "white" }}>
        <div className="py-4 text-xl relative ">
          <div
            className={`w-[90%] text-[18px] font-[400] ${
              open
                ? "text-[--primary-color]"
                : textColor === true
                ? "text-[#ffffff]"
                : "text-[#303A42]"
            }`}
            onClick={toggle}
          >
            {title}
          </div>
          <button
            aria-label="question-expanded"
            className="text-xl absolute top-0 right-0 p-4 focus:outline-none"
            onClick={toggle}
          >
            {open ? (
              <FontAwesomeIcon icon={faSubtract} className="w-5 text-[--primary-color]" />
            ) : (
              <FontAwesomeIcon
                icon={faAdd}
                className={`text-${textColor ? "[#ffffff]" : "[#303A42]"}`}
              />
            )}
          </button>
        </div>

        <Collapse isOpened={open}>
          <div
            className={`${
              textColor === true ? "text-[#ffffff]" : "text-[#303A42]"
            } text-[15px] text-left md:w-[550px] font-[400] p-5`}
          >
            {descLines}
          </div>
        </Collapse>
        <hr />
      </div>
    </div>
  );
};

export default FaqQuestion;
