import { Fragment } from "react";

const DescriptionWithLink = (props) => {
  if (props.link) {
    return (
      <Fragment>
        <p>{props.text}</p>
        <p>
          <a href={props.link} alt="a" target="_blank" rel="noreferrer">
            {props.link}
          </a>
        </p>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <p>
          <u>{props.text}</u>
        </p>
      </Fragment>
    );
  }
};

export default DescriptionWithLink;
