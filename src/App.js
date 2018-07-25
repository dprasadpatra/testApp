import React from 'react';

import { Table, Card, Modal, Input, Form } from 'antd';
import { observer } from "mobx-react"

const App = (props) => {
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card >
        <Table
          columns={props.store.columns}
          dataSource={props.store.data}
        />
      </Card>
      {props.store.visible && (
        <Modal title="Edit"
          visible={props.store.visible}
          onOk={props.store.handleOk}
          onCancel={props.store.handleCancel}
        >
          <Form >
            <Form.Item label="Name">
              <Input
                type="text"
                placeholder="Customer Phone No"
                defaultValue={props.store.editData.name}
                onChange={props.store.handleChange.bind(this, "name")}

              />
            </Form.Item>
            <Form.Item label="Age">
              <Input
                type="number"
                placeholder="Customer Phone No"
                defaultValue={props.store.editData.age}
                onChange={props.store.handleChange.bind(this, "age")}
              />
            </Form.Item>
            <Form.Item label="Address">
              <Input
                type="text"
                placeholder="Address"
                defaultValue={props.store.editData.address}
                onChange={props.store.handleChange.bind(this, "address")}
              />
            </Form.Item>
          </Form>
        </Modal>
      )}
    </div>

  );
}




export default Form.create()(observer(App));
