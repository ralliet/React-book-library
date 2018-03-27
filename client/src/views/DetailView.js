import React from 'react';
import { Link } from 'react-router-dom';
import {gql, graphql} from 'react-apollo';

const query = gql `
    query DetailView($id: ID!) {
        book(id: $id) {
          id
          name
          genre
        }
      }
      `;

class DetailView extends React.Component {
    render() {
        let {data} = this.props;
        if (data.loading) 
            return <div>loading...</div>;
        return (
            <div>
                <p>{data.book.name}</p>
                <p>{data.book.genre}</p>
                <Link to={`/`}>Back to homePage</Link>
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

DetailView = graphql(query, queryOptions)(DetailView)

export default DetailView
