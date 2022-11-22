import { Fragment } from "react";

const DescriptionWithLink = (props) => {
  if (!props.text) return null;
  if (props.link) {
    return (
      <>
        <p>{props.text}</p>
        <p>
          <a href={props.link} alt="a" target="_blank" rel="noreferrer">
            {props.link}
          </a>
        </p>
      </>
    );
  } else {
    return (
      <>
        <p>
          <u>{props.text}</u>
        </p>
      </>
    );
  }
};

export default DescriptionWithLink;
