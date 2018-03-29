import React from 'react'
import { gql, graphql } from 'react-apollo'

//component imports
import Header from '../components/Header';
import Footer from '../components/Footer';

const mutation = gql`
mutation CreateView($name: String!, $genre: String!) {
  addBook(name: $name, genre: $genre) {
    id
    name
    genre
  }
}
`

class CreateView extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(this.form);
    this.props
      .mutate({ variables: { name: formData.get('name'),genre: formData.get('genre') } })
      .then(res => {
          window.location.replace(`/`)
      })
      .catch(err => {
        console.log('Network error!')
      })
  }

  render() {
    return (
      <div>
        <Header/>
        <h1>Create new Book</h1>
        <form
          ref={ref => (this.form = ref)}
          onSubmit={e => this.handleSubmit(e)}
        >
          <div>
              <label>Name</label>
              <input type="text" name="name"/>
          </div>
          <div>
              <label>Genre</label>
              <input type="text" name="genre"/>
          </div>
          <button type="submit">Submit</button>
        </form>
        <Footer/>
      </div>
    )
  }
}
CreateView = graphql(mutation)(CreateView)
export default CreateView