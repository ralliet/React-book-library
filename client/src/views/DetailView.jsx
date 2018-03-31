import React from 'react';
import {Link} from 'react-router-dom';
import {gql, graphql} from 'react-apollo';

//component imports
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

//Graphql query imports
import {getBookByID} from '../graphql/Books.graphql';

//material UI imports
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';


const styles = {
    paddingTop: 16,
    paddingBottom: 16
};

class DetailView extends React.Component {
    render() {
        const {classes} = this.props;
        let {data} = this.props;
        if (data.loading) 
            return <div>loading...</div>;
        return (
            <div>
                <Header/>
                <Paper elevation={4}>
                    <Typography variant="headline" component="h3">
                        {data.book.name}
                    </Typography>
                    <Typography component="p">
                        {data.book.genre}

                    </Typography>
                    <Typography variant="button">
                        <Button href={`/`} variant="raised" color="primary" >
                            Back to homePage
                        </Button>
                    </Typography>
                </Paper>
                <Footer/>
            </div>
        )
    }
}

const queryOptions = {
    options: props => ({
        variables: {
            id: props.match.params.id
        }
    })
}

DetailView = graphql(getBookByID, queryOptions)(DetailView)

export default DetailView
