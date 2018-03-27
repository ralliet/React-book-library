import React from 'react'
import { gql, graphql } from 'react-apollo'

const mutation = gql`
mutation DeleteView($id: ID!) {
  deleteBook(id: $id) {
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
      </div>
    )
  }
}
CreateView = graphql(mutation)(CreateView)
export default CreateView