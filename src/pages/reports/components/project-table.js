import React, { useEffect, useState } from "react";
import { Col, Collapse, Row } from "antd";
import colors from "../../../styles/colors";
import { PieChart } from "react-minimal-pie-chart";
import styles from "./project-table.css";
import Text from "../../../components/text";

const { Panel } = Collapse;

const ProjectTable = ({
  details,
  projects,
  gateways,
  values,
  groupedGateway,
}) => {
  const classes = styles();
  const [data, setData] = useState();

  const getProjectName = (id) => {
    let projectName =
      projects.find((project) => {
        if (id === project.projectId) {
          return project.name;
        }
      }) || {};

    return projectName.name || "All Projects";
  };

  const getGatewayName = (id) => {
    let gatewayName =
      gateways.find((gateway) => {
        if (id === gateway.gatewayId) {
          return gateway.name;
        }
      }) || {};

    return gatewayName.name || "All Gateways";
  };

  const genExtra = (sum) => (
    <Text variant="bodyText-b">Total: {Math.floor(sum)} USD</Text>
  );

  let totalSum = 0;
  const getTotalSum = (value) => {
    return (totalSum += value);
  };

  const getPieChartData = () => {
    let data = [];
    {
      values.projectId === null &&
        values.gatewayId !== null &&
        Object.entries(details).map((item) => {
          let sum = 0;
          item[1].map((item) => {
            return (sum += item.amount);
          });

          var randomColor = "#000000".replace(/0/g, function () {
            return (~~(Math.random() * 16)).toString(16);
          });

          let insert = {
            title: getProjectName(item[0]),
            value: Math.floor(sum),
            color: randomColor,
          };

          data.push(insert);
        });
    }
    {
      values.gatewayId === null &&
        values.projectId !== null &&
        Object.entries(groupedGateway).map((item) => {
          let sum = 0;
          item[1].map((item) => {
            return (sum += item.amount);
          });

          var randomColor = "#000000".replace(/0/g, function () {
            return (~~(Math.random() * 16)).toString(16);
          });

          let insert = {
            title: getGatewayName(item[0]),
            value: Math.floor(sum),
            color: randomColor,
          };

          console.log(insert.color, "COlor in chart");
          data.push(insert);
        });
    }

    setData(data);
  };

  useEffect(() => {
    getPieChartData();
  });

  return (
    <Row gutter={[32, 16]} style={{ marginTop: 27 }}>
      <Col
        span={
          (values.projectId !== null && values.gatewayId === null) ||
          (values.projectId === null && values.gatewayId !== null)
            ? 12
            : 24
        }
      >
        <div className={classes.table}>
          <Text variant="bodyText-b" style={{ marginBottom: 34 }}>
            {getProjectName(values.projectId)} |{" "}
            {getGatewayName(values.gatewayId)}
          </Text>
          <Collapse
            defaultActiveKey={["1"]}
            accordion={true}
            ghost
            className={classes.collapse}
          >
            {((values.projectId === null && values.gatewayId !== null) ||
              (values.projectId !== null && values.gatewayId !== null) ||
              (values.projectId === null && values.gatewayId === null)) &&
              details &&
              Object.entries(details && details).map((item) => {
                let sum = 0;
                item[1].map((item) => {
                  return (sum += item.amount);
                });

                getTotalSum(sum);
                return (
                  <Panel
                    header={getProjectName(item[0])}
                    key={item[0]}
                    showArrow={false}
                    extra={genExtra(sum)}
                    className={classes.collapse}
                  >
                    <Row gutter={[8, 16]}>
                      <Col span={24}>
                        <div className={classes.tableHeader}>
                          <Row align="middle" justify="space-between">
                            <Col>
                              <Text variant="bodyText-m">Date</Text>
                            </Col>
                            {!values.gatewayId && (
                              <Col>
                                <Text variant="bodyText-m">Gateway</Text>
                              </Col>
                            )}
                            <Col>
                              <Text variant="bodyText-m">Transaction ID</Text>
                            </Col>
                            <Col>
                              <Text variant="bodyText-m">Amount</Text>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      {item[1].map((detail, index) => {
                        return (
                          <Col span={24} key={detail.paymentId}>
                            <div
                              style={{
                                background: index % 2 === 0 ? "" : "#fff",
                              }}
                              className={classes.tableBody}
                            >
                              <Row align="middle" justify="space-between">
                                <Col>
                                  <Text variant="bodyText-m">
                                    {detail.created}
                                  </Text>
                                </Col>
                                {!values.gatewayId && (
                                  <Col>
                                    <Text variant="bodyText-m">
                                      {getGatewayName(detail.gatewayId)}
                                    </Text>
                                  </Col>
                                )}
                                <Col>
                                  <Text variant="bodyText-m">
                                    {detail.paymentId}
                                  </Text>
                                </Col>
                                <Col>
                                  <Text variant="bodyText-m">
                                    {Math.floor(detail.amount)} USD
                                  </Text>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  </Panel>
                );
              })}
            {values.projectId !== null &&
              values.gatewayId === null &&
              groupedGateway &&
              Object.entries(groupedGateway && groupedGateway).map((item) => {
                let sum = 0;
                item[1].map((item) => {
                  return (sum += item.amount);
                });

                getTotalSum(sum);
                return (
                  <Panel
                    header={getGatewayName(item[0])}
                    key={item[0]}
                    showArrow={false}
                    extra={genExtra(sum)}
                    className={classes.collapse}
                  >
                    <Row gutter={[8, 16]}>
                      <Col span={24}>
                        <div className={classes.tableHeader}>
                          <Row align="middle" justify="space-between">
                            <Col>
                              <Text variant="bodyText-m">Date</Text>
                            </Col>
                            <Col>
                              <Text variant="bodyText-m">Transaction ID</Text>
                            </Col>
                            <Col>
                              <Text variant="bodyText-m">Amount</Text>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      {item[1].map((detail, index) => {
                        return (
                          <Col span={24} key={detail.paymentId}>
                            <div
                              style={{
                                background: index % 2 === 0 ? "" : "#fff",
                              }}
                              className={classes.tableBody}
                            >
                              <Row align="middle" justify="space-between">
                                <Col>
                                  <Text variant="bodyText-m">
                                    {detail.created}
                                  </Text>
                                </Col>

                                <Col>
                                  <Text variant="bodyText-m">
                                    {detail.paymentId}
                                  </Text>
                                </Col>
                                <Col>
                                  <Text variant="bodyText-m">
                                    {Math.floor(detail.amount)} USD
                                  </Text>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  </Panel>
                );
              })}
          </Collapse>
        </div>
        <div
          style={{
            background: colors.aqua.shade1,
            height: 53,
            borderRadius: 10,
            marginTop: 27,
            display: "flex",
            alignItems: "center",
            padding: "17px 19px",
          }}
        >
          <Text variant="bodyText-b">TOTAL: {totalSum}</Text>
        </div>
      </Col>

      {((values.projectId !== null && values.gatewayId === null) ||
        (values.projectId === null && values.gatewayId !== null)) && (
        <Col
          span={
            (values.projectId !== null && values.gatewayId === null) ||
            (values.projectId === null && values.gatewayId !== null)
              ? 12
              : 0
          }
        >
          <div>
            <div className={classes.chartHeader}>
              <Row align="middle" gutter={16}>
                {data &&
                  data.map((item) => {
                    return (
                      <Col>
                        <Row align="middle" gutter={8}>
                          <Col>
                            <div
                              className={classes.colorBox}
                              style={{ background: item.color }}
                            />
                          </Col>
                          <Col>
                            <Text variant="bodyText-m">{item.title}</Text>
                          </Col>
                        </Row>
                      </Col>
                    );
                  })}
              </Row>
            </div>
          </div>

          <div style={{ height: 500 }}>
            <PieChart
              viewBoxSize={[200, 100]}
              data={data}
              paddingAngle={2}
              animation={true}
              animationDuration={500}
              animationEasing="ease-out"
              center={[100, 50]}
              labelPosition={100}
              lengthAngle={360}
            />
          </div>

          <div className={classes.chartFooter}>
            <Text variant="bodyText-b">
              {values.gatewayId === null ? "PROJECT TOTAL" : " GATEWAY TOTAL"} |{" "}
              {Math.floor(totalSum)}
            </Text>
          </div>
        </Col>
      )}
    </Row>
  );
};

export default ProjectTable;
