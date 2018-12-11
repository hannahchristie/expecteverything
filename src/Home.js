import React, { Component } from 'react';
import {
  MDBRow,
  MDBCol,
  Popover,
  PopoverBody,
} from 'mdbreact';
import FindOutMore from './FindOutMore';
import Reference1 from './references/Reference1';
import Reference5 from './references/Reference5';
import Reference2 from './references/Reference2';

class Home extends Component {
  render () {
    return (
      <div>
        <FindOutMore/>
        <MDBRow>
          <MDBCol>
            <p className="mt-3 lead">
              #EXPECTEVERYTHING is about living life without barriers of expectation.
            </p>
            <p>
              All too often parents of children with learning difficulties (including Down’s syndrome) are told by their
              friends, families, educators and medical professionals <Reference5 link="“not to expect too much”."/>
            </p>
            <p>
              To expect struggle, to expect problems, to expect less.
            </p>
            <p>
              This website exists to explain to expectant parents that having a child with Down’s syndrome might not be
              what they were expecting - it aims to make sure that they know that a child with Down’s syndrome is not a
              burden, a challenge or something to be avoided.
            </p>
            <p>
              In particular, we’re here to explain the thoughts and feelings of the disabled community about
              the <Reference2 link="screening for Down's syndrome"/> as offered under the NHS to pregnant mothers and to
              explain why this screening must be <Reference1 link="called into question."/>
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe title="Expect Everything" className="embed-responsive-item"
                      src="https://www.youtube.com/embed/TPMapRzlKL0?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"
                      frameBorder="0" allowFullScreen/>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default Home;