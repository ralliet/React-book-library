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
import LoginView from './views/LoginView'
import SignUpView from './views/SignUpView'


const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
});

class App extends Component {
  render() {
    console.log(process.env);
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomeView} />
            <Switch>
              <Route exact path="/login/" component={LoginView} />
              <Route exact path="/signup/" component={SignUpView} />
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
