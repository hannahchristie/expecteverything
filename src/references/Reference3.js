import React, { Component } from 'react';
import Reference from './Reference';

class Reference3 extends Component {
  render () {
    return (
      <Reference
        link={this.props.link}
        body={<p>Don’t Screen Us Out (2017) <i>Don’t Screen Us Out</i> [online]. Don’t Screen Us Out. Available from: &lt;https://dontscreenusout.org/&gt [accessed 11 December 2018]</p>}/>
    );
  }
}

export default Reference3;