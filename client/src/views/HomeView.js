import React from 'react';
import { Link } from 'react-router-dom';
import {gql, graphql} from 'react-apollo';

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
                {data.books.map((item) => (
                        <p key={item.id}>
                            <Link to={`/books/${item.id}/`}>
                                {item.name}
                            </Link>
                        </p>
                    ))}
            </div>
        )
    }
}

HomeView = graphql(query)(HomeView)

export default HomeView