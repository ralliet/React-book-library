import React, {Component} from 'react'
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

class Footer extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Paper>
            <Tabs
              value={0}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </Paper>
        )
    }
}

export default Footer