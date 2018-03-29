//ENV VARIABLES
require('dotenv').config();

//REACT
import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ReactDOM from 'react-dom'
//APOLLO
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo';
//VIEWS
import HomeView  from './views/HomeView'
import CreateView from './views/CreateView'
import DetailView from './views/DetailView'


const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.GRAPHQL_ENDPOINT }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
});

class App extends Component {
  render() {
    console.log(typeof process.env.GRAPHQL_ENDPOINT);
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomeView} />
            <Switch>
              <Route exact path="/books/create/" component={CreateView} />
              <Route exact path="/books/:id/" component={DetailView} />
            </Switch>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
//module.hot.accept();
