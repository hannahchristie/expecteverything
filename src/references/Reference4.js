import React, { Component } from 'react';
import Reference from './Reference';

class Reference4 extends Component {
  render () {
    return (
      <Reference
        link={this.props.link}
        body={<p>Moore, M. Beazley, S. and Maelzer, J. (1998) <i>Researching Disability Issues.</i> Buckingham: Open University Press.</p>}/>
    );
  }
}

export default Reference4;