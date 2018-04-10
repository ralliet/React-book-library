import React from 'react';
import {Link} from 'react-router-dom';
import {gql, graphql} from 'react-apollo';

//component imports
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

//Graphql query imports
import {getBookByID} from '../graphql/queries/Books.graphql';

//Semantic UI imports
import { Button } from 'semantic-ui-react'


class DetailView extends React.Component {
    handleDelete() {
        this.props
          .mutate({ variables: { id: props.match.params.id } })
          .then(res => {
              window.location.replace(`/`)
          })
          .catch(err => {
            console.log('Network error!')
          })
      }



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
                    <Button as={Link} to='/'>Back to homePage</Button>
                    <Button as={Link} to={`/books/update/${data.book.id}/`}>Update book</Button>
                    <Button onClick={this.handleDelete} as={Link} to={`/books/remove/${data.book.id}/`} negative>Remove book</Button>
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