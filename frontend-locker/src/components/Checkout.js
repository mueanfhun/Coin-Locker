import React, { Component } from 'react';
import {
  Row, Card, Col, InputNumber, Button,
} from 'antd';


class Checkout extends Component {
  render() {
    return (
      <div>
        <Card className="card-register">
          <h1 style={{ textAlign: 'center', fontSize: '100px' }}> Password </h1>
          <Row>
            <Col span={12} offset={6}>
              <InputNumber className="ant-input-number" min={0} max={9} />
              <InputNumber className="ant-input-number" min={0} max={9} />
              <InputNumber className="ant-input-number" min={0} max={9} />
              <InputNumber className="ant-input-number" min={0} max={9} />
              <InputNumber className="ant-input-number" min={0} max={9} />
              <InputNumber className="ant-input-number" min={0} max={9} />
            </Col>
          </Row>
          <Row>
            <Col span={12} offset={16}>
              <Button style={{ textAlign: 'right', fontSize: '20px' }} type="link">ลืมรหัสผ่าน</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} spen={5}>
              <Button className="button-formCC">ยกเลิก</Button>
            </Col>
            <Col xs={12} spen={6} style={{ textAlign: 'right' }}>
              <Button className="button-formCF" style={{ backgroundColor: 'green' }}>ยืนยัน</Button>
            </Col>

          </Row>

        </Card>
      </div>

    );
  }
}

export default Checkout;
