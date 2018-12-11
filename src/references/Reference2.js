import React, { Component } from 'react';
import Reference from './Reference';

class Reference2 extends Component {
  render () {
    return (
      <Reference
        link={this.props.link}
        body={<p>NHS Online (2018) <i>Your pregnancy and baby guide: Screening tests in pregnancy</i> [online]. NHS. Available from: &ltlhttps://www.nhs.uk/conditions/pregnancy-and-baby/screening-tests-abnormality-pregnant/&gt; [accessed 11 December 2018].</p>}/>
    );
  }
}

export default Reference2;