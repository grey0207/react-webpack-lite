import React, { Component } from 'react';
import { Item } from './components/Item';

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <Item />
      </div>
    );
  }
}
