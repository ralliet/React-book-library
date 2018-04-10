import React from 'react'
import {Link} from 'react-router-dom';
import {gql, graphql} from 'react-apollo'

//component imports
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

//Semantic UI imports
import {Button, Checkbox, Form, Grid, Select} from 'semantic-ui-react'
import {Header as HeaderTitle} from 'semantic-ui-react'

//Graphql query imports
import {addBook} from '../graphql/mutations/booksMutation.graphql';

/* const mutation = gql`
mutation CreateView($name: String!, $genre: String!) {
  addBook(name: $name, genre: $genre) {
    id
    name
    genre
  }
}
` */

/* const options = [
  {
    key: 'm',
    text: 'Male',
    value: 'male'
  }, {
    key: 'f',
    text: 'Female',
    value: 'female'
  }
] */
class CreateBookView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      genre: ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleCategoryChange(event) {
    this.setState({genre: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title , genre } = this.state;
      this
      .props
      .mutate({
        variables: {
          name: title,
          genre: genre
        }
      })
      .then(res => {
        window
          .location
          .replace(`/`)
      })
      .catch(err => {
        console.log('Network error!')
      })
  }

  render() {
    return (
      <div>
        <Header/>
        <Grid centered columns={2}>
          <Grid.Column>
            <HeaderTitle as='h1'>Create new book</HeaderTitle>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Title</label>
                <input placeholder='Title' type='text' name='title' ref='title' value={this.state.title} onChange={this.handleTitleChange} required/>
              </Form.Field>
              <Form.Field>
                <label>Genre</label>
                <input placeholder='Name' type='text' name='genre' ref='genre'  value={this.state.genre} onChange={this.handleCategoryChange} required/>
              </Form.Field>
              {/* <Form.Field control={Select} label='Gender' options={options} placeholder='Gender' /> */}
              <Button type='submit'>Add book</Button>
            </Form>
            <Link to='/'>Back to homePage</Link>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
CreateBookView = graphql(addBook)(CreateBookView)
export default CreateBookView