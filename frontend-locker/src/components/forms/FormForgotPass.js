import React, { Component } from 'react';
import {
  Input, Icon, Card, Col, Button,
} from 'antd';


class FormForgotPass extends Component {
  render() {
    return (
      <div className="backgroun-from ">
        <Col span={12} offset={6}>
          <Card className="card-register">
            <Input
              placeholder="Enter your phone"
              prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
            <Col xs={12} spen={5}>
              <Button className="button-formCC" style={{ backgroundColor: 'red' }}>ยกเลิก</Button>
            </Col>
            <Col xs={12} spen={6} style={{ textAlign: 'right' }}>
              <Button className="button-formCF" style={{ backgroundColor: 'green' }}>ยืนยัน</Button>
            </Col>
          </Card>
        </Col>
      </div>

    );
  }
}

export default FormForgotPass;
