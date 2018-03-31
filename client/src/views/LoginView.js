import React from 'react';
import {Link} from 'react-router-dom';
import {gql, graphql} from 'react-apollo';

//component imports
import Header from '../components/Header';
import Footer from '../components/Footer';

//material UI imports
import Typography from 'material-ui/Typography';
import {FormControl, FormHelperText} from 'material-ui/Form';

//Graphql query imports

class LoginView extends React.Component {
    render() {
        let {data} = this.props;
        if (data.loading) 
            return (
                <Grid container><CircularProgress/></Grid>
            );
        
        return (
            <div>
                <Header/>
                <FormControl className={classNames(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="adornment-password">Password</InputLabel>
                    <Input
                        id="adornment-password"
                        type={this.state.showPassword
                        ? 'text'
                        : 'password'}
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        endAdornment={< InputAdornment position = "end" > <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                        onMouseDown={this.handleMouseDownPassword}>
                        {this.state.showPassword
                            ? <VisibilityOff/>
                            : <Visibility/>}
                    </IconButton> 
                    </InputAdornment>}/>
                </FormControl>

                <Footer/>
            </div>
        )
    }
}

//HomeView = graphql(getAllbooks)(HomeView)

export default LoginView