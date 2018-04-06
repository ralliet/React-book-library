import React from 'react';
import {Link} from 'react-router-dom';
import {gql, graphql} from 'react-apollo';

//component imports
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

//material UI imports
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import {CircularProgress} from 'material-ui/Progress';
import ExpansionPanel, {ExpansionPanelSummary, ExpansionPanelDetails} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';


//Graphql query imports
import {getAllbooks} from '../graphql/Books.graphql';

const styles = {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
};

class HomeView extends React.Component {
    render() {
        let {data} = this.props;
        if (data.loading) 
            return (
                <Grid container><CircularProgress/></Grid>
            );
        
        return (
            <div>
                <Header/>
                <div id="container">
                    <ul id="booklist">
                        {data
                            .books
                            .map((item) => (
                                <li key={item.id}>
                                    <Link to={`/books/${item.id}/`}>{item.name}</Link>
                                </li>
                        ))}
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}

HomeView = graphql(getAllbooks)(HomeView)

export default HomeView