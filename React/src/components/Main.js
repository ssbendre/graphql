require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ListComponent from './List';

let products = [{
    name: 'onion',
    price: '.99',
    id: 1
    }, {
    name: 'pepper',
    price: '1.25',
    id: 2
    }, {
    name: 'broccoli',
    price: '3.00',
    id: 3
  }];

let updatedList=[];

class AppComponent extends React.Component {
  
  filterList(event){
    updatedList = products,
    updatedList = products.filter(function(item){
      return item.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    products = updatedList;
    this.setState({items: updatedList});
  }

  render() {
    return (
      <div className="index">
        <div className="notice">
          <ListComponent data={products} />
          <input type="text" className="input-bg" placeholder="Search" onChange={this.filterList}/>
        </div>
      </div>
    );
  }

}

AppComponent.defaultProps = {
};

export default AppComponent;
