import React from 'react';
import {Link} from 'react-router-dom';
import {gql, graphql} from 'react-apollo';

//component imports
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

//Graphql query imports
import {getBookByID} from '../graphql/Books.graphql';


class DetailView extends React.Component {
    render() {
        const {classes} = this.props;
        let {data} = this.props;
        if (data.loading) 
            return <div>loading...</div>;
        return (
            <div>
                <Header/>
                <div id="container">
                    <p>{data.book.name}</p>
                    <p>{data.book.genre}</p>
                    <Link to='/'>Back to homePage</Link>
                </div>
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
