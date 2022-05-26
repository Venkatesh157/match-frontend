import React from "react";
import colors from "../../styles/colors";
import noreports from "../../assets/noreports.svg";
import Text from "../text";

function NoReports() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "60vh",
      }}
    >
      <Text variant="heading-2">No Reports</Text>{" "}
      <Text
        variant="bodyText-b"
        style={{
          color: colors.gray.main,
          textAlign: "center",
          maxWidth: "50% ",
          margin: "5px 0px 60px 0px",
        }}
      >
        Currently you have no data for the reports to be generated. Once you
        start generating traffic through the Balance application the reports
        will be shown.
      </Text>{" "}
      <img src={noreports} alt="" />
    </div>
  );
}

export default NoReports;
