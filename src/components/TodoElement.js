import React from "react";
import { Row, Col, Checkbox } from "antd";

export const TodoElement = ({ text, checked }) => {
  return (
    <Row>
      <Col span={24}>
        <Checkbox checked={checked}>{text}</Checkbox>
      </Col>
    </Row>
  );
};
