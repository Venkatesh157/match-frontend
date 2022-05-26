import { createUseStyles } from "react-jss";

const StyledComponent = ({ styleMap, children }) => {
  return children(createUseStyles(styleMap));
};

export default StyledComponent;
