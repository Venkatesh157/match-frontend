import { Col, Row } from "antd";
import React from "react";
import Header from "../../components/header";
import SideMenu from "../../components/side-menu";
import Reports from "../reports";

function Home() {
  return (
    <div>
      <Header />
      <Row style={{ padding: "36px 33px" }}>
        <Col span={1}>
          <SideMenu />
        </Col>
        <Col span={23}>
          <Reports />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
