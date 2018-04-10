import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react'

export default class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item name='home' as={ Link } to='/' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='createbook' as={ Link } to='/books/create/' active={activeItem === 'createBook'} onClick={this.handleItemClick} />
        <Menu.Item name='signup' as={ Link } to='/signup' active={activeItem === 'messages'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item name='login' as={ Link } to='/login' active={activeItem === 'login'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}