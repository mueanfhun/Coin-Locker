import React, {Component} from 'react';
import { Modal, Button,InputNumber } from 'antd';


class Checkout extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p style={{ fontSize: '20px', margin: '5px' }}>
                Password
              <InputNumber className="ant-input-number" min={0} max={9} />
              <InputNumber className="ant-input-number" min={0} max={9} />
              <InputNumber className="ant-input-number" min={0} max={9} />
              <InputNumber className="ant-input-number" min={0} max={9} />
              <InputNumber className="ant-input-number" min={0} max={9} />
              <InputNumber className="ant-input-number" min={0} max={9} />
              <InputNumber className="ant-input-number" min={0} max={9} />
            </p>
        </Modal>
      </div>
    );
  }
}

export default Checkout;