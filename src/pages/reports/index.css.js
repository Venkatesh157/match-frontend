import { createUseStyles } from "react-jss";
import colors from "../../styles/colors";

const styles = createUseStyles({
  select: {
    width: "145px !important",
    height: 32,
    color: "#fff !important",
    "& .ant-select-selector": {
      backgroundColor: `${colors.aqua.shade0} !important`,
      borderColor: `${colors.aqua.shade0} !important`,
      color: "#FFFFF !important",
      borderRadius: "5px !important",
    },
    "& .ant-select-selection-item": {
      color: "#fff",
    },
  },
  button: {
    height: 32,
    background: colors.blue.shade1,
    color: "#fff",
    borderRadius: 5,
  },
});

export default styles;
