import { Col, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { createUseStyles } from "react-jss";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import colors from "../../styles/colors";
import Text from "../text";

const styles = createUseStyles({
  avatar: { fontWeight: 700, fontSize: 23, borderRadius: 5 },
  root: { padding: "21px 35px", height: 80, borderBottom: "2px solid #F3F6F9" },
  name: { display: "flex", justifyContent: "center", alignItems: "center" },
});

function Header() {
  const [user, setUser] = useState();
  const classes = styles();

  useEffect(() => {
    axios.get(`http://178.63.13.157:8090/mock-api/api/users`).then((res) => {
      setUser(res?.data?.data[0]);
    });
  }, []);

  return (
    <Row className={classes.root} align="center" justify="space-between">
      <Col>
        <img src={logo} width={26.67} height={40} alt="logo" />
        <img
          src={menu}
          width={26.67}
          height={40}
          alt="logo"
          style={{ marginLeft: 38 }}
        />
      </Col>
      <Col>
        <div className={classes.name}>
          <Avatar
            name={user?.firstName + " " + user?.lastName}
            size={43}
            color="#F6CA65"
            fgColor="#fff"
            className={classes.avatar}
          />
          <Text
            variant="bodyText-b"
            style={{ marginLeft: 11, color: colors.blue.shade1 }}
          >
            {user?.firstName} {user?.lastName}
          </Text>
        </div>
      </Col>
    </Row>
  );
}

export default Header;
