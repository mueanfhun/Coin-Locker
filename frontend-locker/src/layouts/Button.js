import React from 'react';
import { Button, Row, Col } from 'antd';


const controllerPage = () => (
  <div>
    <Row>
      <Col>
        <h1 className="header-Home">COIN LOCKER</h1>
      </Col>
    </Row>
    <Row>
      <Col xs={12} spen={5} style={{ textAlign: 'right' }}>
        <Button className="button-checkin" color="red">CHECK IN</Button>
      </Col>
      <Col xs={12} style={{ textAlign: 'left' }}>
        <Button className="button-checkout" color="red">CHECK OUT</Button>
      </Col>
    </Row>
  </div>
);

export default controllerPage;
