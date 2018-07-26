import React from 'react';

import { Table, Card } from 'antd';
import { observer } from "mobx-react"
import EditModule from './EditModule';

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
        <EditModule {...props} />
      )}
    </div>

  );
}




export default (observer(App));
