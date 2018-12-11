import React, { Component } from 'react';
import Reference from './Reference';

class Reference9 extends Component {
  render () {
    return (
      <Reference
        link={this.props.link}
        body={<p>Cameron, C. (2014) The Social Model. In: Cameron, C. ed. <i>Disability Studies: A Student Guide.</i> London: Sage, pp.137-140.</p>}/>
    );
  }
}

export default Reference9;