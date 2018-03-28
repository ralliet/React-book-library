import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class Header extends React.Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                <Typography variant="headline" color="inherit">
                    Book store app
                </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header