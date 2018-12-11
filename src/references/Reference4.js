import React, { Component } from 'react';
import Reference from './Reference';

class Reference4 extends Component {
  render () {
    return (
      <Reference
        link={this.props.link}
        body="Moore, M. Beazley, S. and Maelzer, J. (1998) Researching Disability Issues. Buckingham: Open University Press."/>
    );
  }
}

export default Reference4;