import { createUseStyles } from "react-jss";
import colors from "../../../styles/colors";

const styles = createUseStyles({
  collapse: {
    "&  .ant-collapse-header": {
      background: "#fff",
      height: 71,
      display: "flex !important",
      justifyContent: "center !important",
      alignItems: "center !important",
      fontWeight: 700,
      fontSize: 16,
      borderRadius: "10px !important",
      marginBottom: 5,
    },
  },
  table: {
    background: colors.aqua.shade1,
    borderRadius: 10,
    padding: "18px 24px",
    height: 557,
    overflow: "scroll",
    overflowX: "hidden",
  },
  tableHeader: {
    padding: "5px 8px",
    borderRadius: 2,
    background: "#fff",
    height: 35,
  },
  tableBody: {
    padding: "5px 8px",
    borderRadius: 2,
    height: 35,
  },
  chartHeader: {
    background: colors.aqua.shade1,
    height: 53,
    borderRadius: 10,
    padding: "20px 23px",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
  colorBox: {
    width: 15,
    height: 15,
    borderRadius: 5,
  },
  chartFooter: {
    background: colors.aqua.shade1,
    height: 53,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    padding: "20px 23px",
  },
});

export default styles;
