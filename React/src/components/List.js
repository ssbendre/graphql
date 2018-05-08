require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ModalBox from './Modal';

class TableRow extends React.Component {
  
  render() {
    const {
      data
    } = this.props;
    const row = data.map((data) =>
      <tr key={data.id}>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>
            <ModalBox data=""></ModalBox>
          </td>
      </tr>
    );
    return (
      <tbody>{row}</tbody>
    );
  }
}

class ListComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="container">
          <div className="col-md-6">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="text-center">ID</th>
                  <th className="text-center">Name</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <TableRow data={this.props.data} />
            </table>
          </div>
      </div>
    );
  }
}

ListComponent.defaultProps = {
};

export default ListComponent;
