import React, { Component } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdbreact';
import Reference6 from './references/Reference6';
import Reference4 from './references/Reference4';
import Reference5 from './references/Reference5';

class Listen extends Component {
  render () {
    return (
      <div>
        <MDBRow>
          <MDBCol>
            <h3 className="mt-3 red-text fancy-font">Listen</h3>
            <p className="lead red-text">find out about the lived experience of Down’s syndrome and the problems behind
              the prenatal screening</p>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="8" sm="12">
            <p>It is common for Down’s syndrome to be referred to as a tragedy. Very often the identification of Down’s
              syndrome is treated as a ‘diagnosis’ and parents are instantly given the news that their child is going to
              be <Reference6 link="‘less than’ they expected. "/></p>

            <p>However, more important than anything else is to listen to the voices of <Reference4
              link="those with Down’s syndrome"/>
              and let them talk about their lives and experiences.</p>

            <p>Living a life with Down’s syndrome is not the same as living a life without it - it is very different and
              it is so much more. People with Down’s syndrome are enjoying their lives and making lives around them
              richer and fuller simply by existing.</p>

            <p>Many parents of children with Down’s syndrome are confused and upset because they simply cannot
              understand why they were told these things about their children that are simply not true and are working
              to show the world that a child having an extra chromosome <Reference5 link="makes them extra-ordinary."/></p>

            <p>There are many examples of successful individuals with Down’s syndrome achieving so much more than their
              peers - challenging the assumptions made about them and leaving society’s expectations behind!</p>

            <p>There is no better way to demonstrate this than to look at the living examples.</p>

            <p>Take a look at:</p>
            <ul>
              <li><a href="https://www.imdb.com/name/nm2373670/">Lauren Potter - Actor</a></li>
              <li><a href="http://www.karengaffneyfoundation.com/">Dr Karen Gaffney - Gold Medalist and Disability
                Advocate</a></li>
              <li><a href="http://www.madelinestuartmodel.com/">Madeline Stuart - Supermodel</a></li>
              <li><a href="https://www.stopgapdance.com/about/artists/hannah-sampson">Hannah Sampson - Dance Teacher</a>
              </li>
              <li><a href="http://www.blakessnowshack.com/">Blake Pyron - Buisness Owner (Blake’s Snow Shack)</a></li>
              <li><a href="https://www.collination.org/">Collin Clarke - Body Builder</a></li>
              <li><a href="https://www.colletteys.com/">Collette Divitto - Buisness Owner (Collettey’s Cookies)</a></li>
              <li><a href="https://www.instagram.com/katiemeade18">Katie Meade - Beauty Model</a></li>
            </ul>
          </MDBCol>
          <MDBCol md="4" sm="12">
            <div className="text-right">
              <p className="fancy-font text-right dark-cyan-text">Further Reading</p>
            </div>
            <MDBListGroup>
              <MDBListGroupItem>
                <a href="https://www.youtube.com/watch?v=yQJEoRhkapw" rel="noopener noreferrer"
                   target="_blank">
                  Listen to Frank Stephen’s Speech on Down’s syndrome
                </a>
              </MDBListGroupItem>
              <MDBListGroupItem>
                <a href="https://www.youtube.com/watch?v=HwxjoBQdn0s" rel="noopener noreferrer"
                   target="_blank">
                  Hear Karen Gaffney speak about the prenatal screening for Down’s syndrome
                </a>
              </MDBListGroupItem>
            </MDBListGroup>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default Listen;