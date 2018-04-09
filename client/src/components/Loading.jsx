import React, { Component } from 'react'

//semantic UI imports
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

import paragraph from '../assets/images/short-paragraph.png'

export default class Loading extends Component {
  render() {
    return (<Segment>
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
  
        <Image src={paragraph} />
      </Segment>);
  }
}