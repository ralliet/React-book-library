import React from 'react'
import {Link} from 'react-router-dom';
import { gql, graphql } from 'react-apollo'

//component imports
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Loading from '../components/Loading.jsx';


//Graphql query imports
import {getBookByID} from '../graphql/queries/Books.graphql';

//Semantic UI imports
import { Button, Checkbox, Form, Grid,Select } from 'semantic-ui-react'
import { Header as HeaderTitle } from 'semantic-ui-react'


class UpdateBookView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      genre: ''
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleCategoryChange(event) {
    this.setState({genre: event.target.value});
  }

  render() {
    let {data} = this.props;
    if (data.loading) {
      return <Loading/>;
    }
    return (
      <div>
                <Header/>
                <Grid centered columns={2}>
                    <Grid.Column>
                        <HeaderTitle as='h1'>Update book</HeaderTitle>
                        <Form>
                        <Form.Field>
                          <label>Title</label>
                          <input placeholder='Title' type='text' name='title' ref='title' value={data.book.name} onChange={this.handleTitleChange} required></input>
                        </Form.Field>
                        <Form.Field>
                          <label>Genre</label>
                          <input placeholder='Name' type='text' name='genre' ref='genre'  value={data.book.genre} onChange={this.handleCategoryChange} required/>
                        </Form.Field>
                            <Button type='submit'>Add book</Button>
                        </Form>
                        <Link to='/'>Back to homePage</Link>
                    </Grid.Column>
                </Grid>
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


UpdateBookView = graphql(getBookByID, queryOptions)(UpdateBookView)
export default UpdateBookView