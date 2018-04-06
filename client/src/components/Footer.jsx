import React, {Component} from 'react'
import Paper from 'material-ui/Paper';
import Tabs, {Tab} from 'material-ui/Tabs';

class Footer extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <div className="container">
        <p>Footer copyright 2018</p>
      </div>
    )
  }
}

export default Footer