import { CaretDownFilled } from "@ant-design/icons";
import { Button, Col, Form, Row, Select } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Text from "../../components/text";
import colors from "../../styles/colors";
import Results from "./components/results";
import Picker from "../../components/picker";

import styles from "./index.css";

const { Option } = Select;

function Reports() {
  const classes = styles();
  const [projects, setProjects] = useState();
  const [gateways, setGateways] = useState();
  const [report, setReport] = useState();
  const [values, setValues] = useState({});
  const [startDate, setStartDate] = useState();
  const [form] = Form.useForm();

  const getProjects = () => {
    axios.get(`/projects`).then((res) => {
      setProjects(res?.data?.data);
    });
  };

  const getGateways = () => {
    axios.get(`http://178.63.13.157:8090/mock-api/api/gateways`).then((res) => {
      setGateways(res?.data?.data);
    });
  };

  useEffect(() => {
    getProjects();
    getGateways();
  }, []);

  const generateReports = (values) => {
    setValues(values);
    const { from, to, projectId, gatewayId } = values;
    let formattedFrom = from.format("YYYY-MM-DD");
    let formattedTo = to.format("YYYY-MM-DD");

    axios
      .post(`http://178.63.13.157:8090/mock-api/api/report`, {
        from: formattedFrom,
        to: formattedTo,
        projectId,
        gatewayId,
      })
      .then((res) => {
        setReport(res?.data?.data);
      });
  };

  return (
    <div>
      <Row>
        <Col span={10}>
          <div>
            <Text variant="heading-1">Reports</Text>
            <Text
              variant="bodyText-b"
              style={{ color: colors.gray.main, marginTop: 4 }}
            >
              Easily generate a report of your transactions
            </Text>
          </div>
        </Col>
        <Col span={14}>
          <Form form={form} onFinish={generateReports}>
            <Row gutter={[16, 16]}>
              <Col>
                <Form.Item
                  name="projectId"
                  rules={[
                    {
                      required: false,
                    },
                  ]}
                >
                  <Select
                    defaultValue="Select Project"
                    className={classes.select}
                    suffixIcon={<CaretDownFilled style={{ color: "#fff" }} />}
                    dropdownStyle={{ background: colors.aqua.shade0 }}
                  >
                    <Option>All Projects</Option>
                    {projects &&
                      projects.map((project) => {
                        return (
                          <Option
                            value={project.projectId}
                            key={project.projectId}
                          >
                            {project.name}
                          </Option>
                        );
                      })}
                  </Select>
                </Form.Item>
              </Col>
              <Col>
                <Form.Item name="gatewayId">
                  <Select
                    defaultValue="Select Gateway"
                    className={classes.select}
                    suffixIcon={<CaretDownFilled style={{ color: "#fff" }} />}
                    dropdownStyle={{ background: colors.aqua.shade0 }}
                  >
                    <Option>All Gateways</Option>
                    {gateways &&
                      gateways.map((gateway) => {
                        return (
                          <Option
                            value={gateway.gatewayId}
                            key={gateway.gatewayId}
                          >
                            {gateway.name}
                          </Option>
                        );
                      })}
                  </Select>
                </Form.Item>
              </Col>
              <Col>
                <Form.Item
                  name="from"
                  rules={[
                    {
                      required: true,
                      message: "Select Start Date",
                    },
                  ]}
                >
                  <Picker
                    disabledDate={(d) => !d || d.isBefore("2021-01-01")}
                    onSelect={(v) => setStartDate(v)}
                  />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item
                  name="to"
                  rules={[
                    {
                      required: true,
                      message: "Select End Date",
                    },
                  ]}
                >
                  <Picker disabledDate={(d) => !d || d.isBefore(startDate)} />
                </Form.Item>
              </Col>
              <Col>
                <Button
                  type="primary"
                  className={classes.button}
                  htmlType="submit"
                >
                  Generate Report
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      {/* Results */}
      <Results
        reports={report}
        projects={projects}
        gateways={gateways}
        values={values}
      />
    </div>
  );
}

export default Reports;
