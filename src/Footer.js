import React, { Component } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdbreact';

class Footer extends Component {
  render () {
    return (
      <MDBContainer fluid className="footer cyan darken-1">
        <MDBRow>
          <MDBCol>
            <p className="lead white-text text-center fancy-font mb-5">
              Encourage yourself to think differently, consider the reality of the
              options and listen to the voices of those with Down’s syndrome.
            </p>

            <p className="lead white-text text-right mb-0">#EXPECTEVERYTHING</p>
            <p className="white-text text-right mb-0">Hannah Christie - 17010241</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Footer;