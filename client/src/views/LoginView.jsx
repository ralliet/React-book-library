import React from 'react';
import {Link} from 'react-router-dom';
import {gql, graphql} from 'react-apollo';

//component imports
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

//material UI imports
import Typography from 'material-ui/Typography';
import {FormControl, FormHelperText} from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
  });

//Graphql query imports

class LoginView extends React.Component {

    render() {
        /*   let {data} = this.props;
        if (data.loading)
            return (
                <Grid container><CircularProgress/></Grid>
            );
         */
        const inputProps = {
            step: 300,
          };
        return (
            <div>
                <Header/>
                <TextField label="email" id="email" type="text" inputProps={inputProps} />
                <TextField label="password" id="password" type="password" inputProps={inputProps} />
                <Footer/>
            </div>
        )
    }
}

//HomeView = graphql(getAllbooks)(HomeView)

LoginView.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(LoginView);