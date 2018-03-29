import React from 'react';
import {Link} from 'react-router-dom';
import {gql, graphql} from 'react-apollo';

//component imports
import Header from '../components/Header';
import Footer from '../components/Footer';


//material UI imports
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import {CircularProgress} from 'material-ui/Progress';
import ExpansionPanel, {ExpansionPanelSummary, ExpansionPanelDetails} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

//Graphql query imports
import { getAllbooks } from '../graphql/Books.graphql';


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
                <Grid container spacing={24}>

                    <Grid item xs={12}>

 {data
                            .books
                            .map((item) => (
                   

                                    <ExpansionPanel key={item.id}>
                                        <ExpansionPanelSummary expandIcon={< ExpandMoreIcon />}>
                                            <Typography >
                                                <Link to={`/books/${item.id}/`}>
                                                    {item.name}
                                                </Link>
                                            </Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography></Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                     
                            ))}

                    </Grid>
                    
                </Grid>
           

                <Footer/>
            </div>
        )
    }
}

HomeView = graphql(getAllbooks)(HomeView)

export default HomeView