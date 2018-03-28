import React from 'react';
import { Link } from 'react-router-dom';
import {gql, graphql} from 'react-apollo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Grid from 'material-ui/Grid';


const query = gql `{
    books {
        id
        name
    }
}`;

class HomeView extends React.Component {
    render() {
        let {data} = this.props;
        if (data.loading) return <div>loading...</div>;

        return (
            <div>
                <Header/>
                <Grid container >
                    <Grid item sm>
                        Books:
                        {data.books.map((item) => (
                        <p key={item.id}>
                            <Link to={`/books/${item.id}/`}>
                                {item.name}
                            </Link>
                        </p>
                        ))}
                    </Grid>
                    <Grid item sm>
                        right pane
                    </Grid>
                    <Grid item sm>
                        right pane
                    </Grid>
                </Grid>
                
                <Footer/>
            </div>
        )
    }
}

HomeView = graphql(query)(HomeView)

export default HomeView