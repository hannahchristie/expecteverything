import React, { Component } from 'react';
import Reference from './Reference';

class Reference2 extends Component {
  render () {
    return (
      <Reference
        link={this.props.link}
        body="NHS Online (2018) Your pregnancy and baby guide: Screening tests in pregnancy [online]. NHS. Available from: <https://www.nhs.uk/conditions/pregnancy-and-baby/screening-tests-abnormality-pregnant/> [accessed 11 December 2018]."/>
    );
  }
}

export default Reference2;