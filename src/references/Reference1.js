import React, { Component } from 'react';
import Reference from './Reference';

class Reference1 extends Component {
  render () {
    return (
      <Reference
        link={this.props.link}
        body={<p>Burch, L. (2017) A world without Down’s syndrome? Online resistance on Twitter: #worldwithoutdowns and #justaboutcoping. <i>Disability &amp; Society</i>, 32(7), pp.1085-1089.</p>}/>
    );
  }
}

export default Reference1;