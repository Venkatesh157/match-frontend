import { CalendarFilled } from "@ant-design/icons";
import { DatePicker } from "antd";
import React from "react";
import { createUseStyles } from "react-jss";
import colors from "../../styles/colors";

const styles = createUseStyles({
  picker: {
    width: 118,
    height: 32,
    borderRadius: 5,
    backgroundColor: ` ${colors.aqua.shade0} !important`,
    // color: "#fff",
    borderColor: `${colors.aqua.shade0} !important`,

    "& .ant-picker-input > input": {
      color: "#fff",
    },
    "& .ant-picker-input>input::placeholder": {
      color: "#fff",
    },
    "& .ant-picker-status-error.ant-picker, .ant-picker-status-error.ant-picker:not([disabled]):hover":
      {
        background: colors.aqua.shade0,
      },
  },
});

function Picker({ onChange, disabledDate, onSelect }) {
  const classes = styles();
  return (
    <DatePicker
      onChange={onChange}
      className={classes.picker}
      suffixIcon={<CalendarFilled style={{ color: "#fff" }} />}
      disabledDate={disabledDate}
      onSelect={onSelect}
    />
  );
}

export default Picker;
