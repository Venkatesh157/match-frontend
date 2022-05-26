import React from "react";
import classNames from "classnames/bind";
import Styles from "../../styles/typography";
import withStyles from "react-jss";
import { PropTypes } from "prop-types";

const Text = (props) => {
  const {
    classes,
    className,
    variant,
    onClick,
    spanStyle = {},
    ...rest
  } = props;
  const cx = classNames.bind(classes);
  const class_name = cx({
    "heading-1": variant === "heading-1",
    "heading-2": variant === "heading-2",
    "bodyText-b": variant === "bodyText-b",
    "bodyText-b-1": variant === "bodyText-b-1",
    "caption-m": variant === "caption-m",
    "bodyText-m": variant === "bodyText-m",
  });

  return (
    <div className={`${class_name} ${className}`} {...rest}>
      <span style={spanStyle} onClick={onClick}>
        {props.children}
      </span>
    </div>
  );
};

Text.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
  spanStyle: PropTypes.object,
};

Text.defaultProps = {
  variant: "",
  onClick: () => {},
  spanStyle: {},
};

export default withStyles(Styles)(Text);
