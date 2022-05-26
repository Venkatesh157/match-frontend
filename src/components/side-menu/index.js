import { Col, Row } from "antd";
import React from "react";
import item1 from "../../assets/item1.svg";
import item2 from "../../assets/item2.svg";
import item3 from "../../assets/item3.svg";
import item4 from "../../assets/item4.svg";
import item5 from "../../assets/item5.svg";

function SideMenu() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <img src={item1} width={26.67} height={40} alt="logo" />
      </Col>
      <Col span={24}>
        <img src={item2} width={26.67} height={40} alt="logo" />
      </Col>
      <Col span={24}>
        <img src={item3} width={26.67} height={40} alt="logo" />
      </Col>
      <Col span={24}>
        <img src={item4} width={26.67} height={40} alt="logo" />
      </Col>
      <Col span={24}>
        <img src={item5} width={26.67} height={40} alt="logo" />
      </Col>
    </Row>
  );
}

export default SideMenu;
