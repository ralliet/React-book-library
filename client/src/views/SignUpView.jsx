import React from 'react';
import {Link} from 'react-router-dom';
import {gql, graphql} from 'react-apollo';

//component imports
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';


//Graphql query imports

class SignUpView extends React.Component {
    render() {
        /* let {data} = this.props;
        if (data.loading) 
            return (
                <Grid container><CircularProgress/></Grid>
            ); */
        
        return (
            <div>
                <Header/>

                <Link to='/'>Back to homePage</Link>

                <Footer/>
            </div>
        )
    }
}

//HomeView = graphql(getAllbooks)(HomeView)

export default SignUpView