import React, { Component } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdbreact';
import Reference1 from './references/Reference1';
import Reference3 from './references/Reference3';

class Fight extends Component {
  render () {
    return (
      <MDBRow>
        <MDBCol>
          <div>
            <MDBRow>
              <MDBCol>
                <h3 className="mt-3 red-text fancy-font">Fight</h3>
                <p className="lead red-text">find out how to put your thoughts into action and spread the word about the
                  problems behind the prenatal screening for Down’s syndrome</p>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="8" sm="12">
                <p>There are several campaigns against the prenatal screening test for Down’s syndrome. <Reference1
                  link="There are many issues with the screening"/> as it stands including:</p>
                <ul>
                  <li>The view of society that Down’s syndrome is something to be avoided</li>
                  <li>The assumption that a positive test for Down’s syndrome means that a pregnancy will be
                    terminated
                  </li>
                  <li>The lack of debate around if the screening is right or wrong morally</li>
                  <li>The exclusion of the opinions of individuals with Down’s syndrome themselves
                  </li>
                </ul>
                <p>The easiest way to help the Down’s syndrome community is to refuse the screening as it is currently
                  offered in order to stop the <Reference3 link="depletion of the Down’s syndrome community."/></p>

                <p>Look at the links at the side of the page to find out how you can support the Down’s syndrome
                  community to combat the prenatal screening test.</p>
              </MDBCol>
              <MDBCol md="4" sm="12">
                <div className="text-right">
                  <p className="fancy-font text-right dark-cyan-text">Find Out More</p>
                </div>
                <MDBListGroup>
                  <MDBListGroupItem>
                    <a className="red-text" rel="noopener noreferrer"
                       target="_blank" href="https://dontscreenusout.org/">
                      The ‘Don’t Screen Us Out’ Campaign
                    </a>
                  </MDBListGroupItem>
                  <MDBListGroupItem>
                    <a className="red-text" rel="noopener noreferrer"
                       target="_blank" href="https://www.youtube.com/watch?v=45am4xYR_-4">
                      ‘A World Without Down’s syndrome’ Documentary
                    </a>
                  </MDBListGroupItem>
                  <MDBListGroupItem>
                    <a className="red-text" rel="noopener noreferrer"
                       target="_blank" href="http://www.savingdownsyndrome.org/ ">
                      Saving Down’s syndrome - Advocating for People With Down’s syndrome
                    </a>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default Fight;