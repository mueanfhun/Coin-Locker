import React, { Component } from 'react';
import {
  Input, Row, Icon, Card, Col, InputNumber, Button,
} from 'antd';


class FormRegister extends Component {
  render() {
    return (
      <div className="backgroun-from ">
        <Col span={12} offset={6}>
          <Card className="card-register">
            <Input
              placeholder="Enter your username"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
            <Input
              placeholder="Enter your phone"
              prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />

            <p style={{ fontSize: '30px', margin: '10px' }}>
                Password
              <InputNumber className="ant-input-number" min={0} max={9} />
              <InputNumber className="ant-input-number" min={0} max={9} />
              <InputNumber className="ant-input-number" min={0} max={9} />
              <InputNumber className="ant-input-number" min={0} max={9} />
              <InputNumber className="ant-input-number" min={0} max={9} />
              <InputNumber className="ant-input-number" min={0} max={9} />
              <InputNumber className="ant-input-number" min={0} max={9} />
            </p>
            <Row>
              <Col xs={12} spen={5}>
                <Button className="button-formCC" style={{ backgroundColor: 'red' }}>ยกเลิก</Button>
              </Col>
              <Col xs={12} spen={6} style={{ textAlign: 'right' }}>
                <Button className="button-formCF" style={{ backgroundColor: 'green' }}>ยืนยัน</Button>
              </Col>

            </Row>

          </Card>
        </Col>
      </div>

    );
  }
}

export default FormRegister;
