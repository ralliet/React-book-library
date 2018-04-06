import React from 'react';
import {Link} from 'react-router-dom';
import {gql, graphql} from 'react-apollo';

//component imports
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

//Graphql query imports

class LoginView extends React.Component {

    render() {
        /*   let {data} = this.props;
        if (data.loading)
            return (
                <Grid container><CircularProgress/></Grid>
            );
         */
        return (
            <div>
                <Header/>
                <form> 
                    <label>
                        Email
                        <input type="email" name="email"/>
                    </label>
                    <label>
                        Password
                        <input type="password" name="password"/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <Link to='/'>Back to homePage</Link>
            </div>
        )
    }
}

export default LoginView;