import React from 'react';
import {Link} from 'react-router-dom';
import {gql, graphql} from 'react-apollo';

//component imports
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

//semantic UI imports
import { List } from 'semantic-ui-react'



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
                <h1>Loading</h1>
            ); 
        
        return (
            <div>
                <Header/>
                <div id="container">
                    <List id="booklist">
                        {data
                            .books
                            .map((item) => (
                                <List.Item key={item.id}><Link to={`/books/${item.id}/`}>{item.name}</Link></List.Item>
                        ))}
                    </List>
                </div>
                <Footer/>
            </div>
        )
    }
}

HomeView = graphql(getAllbooks)(HomeView)

export default HomeView