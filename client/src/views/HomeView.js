import React from 'react';
import {Link} from 'react-router-dom';
import {gql, graphql} from 'react-apollo';
import Header from '../components/Header';
import Footer from '../components/Footer';

//material UI imports
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

const query = gql `{
    books {
        id
        name
    }
}`;

const styles = {
    padding: 20,
    marginTop: 10,
    marginBottom: 10 
};

class HomeView extends React.Component {
    render() {
        let {data} = this.props;
        if (data.loading) 
            return <div>loading...</div>;
        
        return (
            <div>
                <Header/>
                <Grid container>
                    <Grid item sm>
                        <Paper style={styles}>
                            Books: {data
                                .books
                                .map((item) => (
                                    <p key={item.id}>
                                        <Link to={`/books/${item.id}/`}>
                                            {item.name}
                                        </Link>
                                    </p>
                                ))}
                        </Paper>
                    </Grid>
                    <Grid item sm>
                        <Paper style={styles}>
                            right pane
                        </Paper>
                    </Grid>
                </Grid>

                <Footer/>
            </div>
        )
    }
}

HomeView = graphql(query)(HomeView)

export default HomeView