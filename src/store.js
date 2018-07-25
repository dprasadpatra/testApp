import { observable, action, decorate } from "mobx";
import { Icon, Tooltip, Popconfirm } from 'antd';
import React from "react"
export class Store {
  editData = {};
  selectIndex = "";
  visible = false;
  data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }, {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  }];

  onDelete = (index) => {
    var newData = [...this.data];
    newData.splice(index, 1)
    this.data = newData;
  }

  handleOk = () => {
    this.data.splice(this.selectIndex, 1, this.editData)

    this.selectIndex = "";
    this.editData = {};
    this.visible = false;
  }
  handleChange = (key, e) => {
    this.editData[key] = e.target.value;
  }
  handleCancel = () => {
    this.selectIndex = "";
    this.editData = {};
    this.visible = false;
  }
  handleEdit(index) {
    this.editData = Object.assign({}, this.data[index]);
    this.selectIndex = index
    this.visible = true
  }

  showActions = (index) => {
    return (
      <div style={{ display: "flex" }}>
        <div
          style={{ marginRight: "4px" }}
          onClick={() => {
            this.handleEdit(index);
          }}
        >
          <Tooltip title="Edit ">
            <Icon style={{ color: "blue", cursor: "pointer" }} type="edit" />
          </Tooltip>
        </div>
        <Popconfirm
          title="Are you sure you want to delete this ?"
          onConfirm={() => this.onDelete(index)}
          okText="Yes"
          cancelText="No"
          style={{ alignSelf: "center", textAlign: "center" }}
        >
          <div >
            <Icon style={{ color: "red", cursor: "pointer" }} type="delete" />
          </div>
        </Popconfirm>
      </div>
    );
  };

  columns = [{
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Actions',
    key: "actoins",
    render: (text, record, index) => this.showActions(index)
  }
  ];


}

decorate(Store, {
  data: observable,
  onDelete: action,
  onEdit: action,
  editData: observable,
  selectIndex: observable,
  visible: observable,
  showActions: action,
  handleEdit: action,
  handleCancel: action,
  handleChange: action,
  columns: observable


});
const store = new Store();

export default store;

