import React, { Component } from 'react';
import {
  MDBRow,
  MDBCol,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter
} from 'mdbreact';
import { Link } from 'react-router-dom';

class FindOutMore extends Component {
  render () {
    return (
      <div className="find-out-more mt-3">
        <MDBRow>
          <MDBCol sm="12" md="4">
            <Card border="dark" className="mb-3 find-out-more-card">
              <CardBody className="text-primary">
                <CardTitle tag="h5" className="dark-cyan-text fancy-font">Listen</CardTitle>
                <CardText>
                  Find out about the lived experience of Down’s syndrome and the problems behind the prenatal
                  screening.
                </CardText>
              </CardBody>
              <CardFooter>
                <p className="text-center mb-0">
                  <Link className="btn btn-outline-red" to="listen">find out more</Link>
                </p>
              </CardFooter>
            </Card>
          </MDBCol>
          <MDBCol sm="12" md="4">
            <Card border="dark" className="mb-3 find-out-more-card">
              <CardBody className="text-primary">
                <CardTitle tag="h5" className="dark-cyan-text fancy-font">Discover</CardTitle>
                <CardText>
                  Find out about the social model of disability, cognitive diversity and valuing difference.
                </CardText>
              </CardBody>
              <CardFooter>
                <p className="text-center mb-0">
                  <Link className="btn btn-outline-red" to="discover">find out more</Link>
                </p>
              </CardFooter>
            </Card>
          </MDBCol>
          <MDBCol sm="12" md="4">
            <Card border="dark" className="mb-3 find-out-more-card">
              <CardBody className="text-primary">
                <CardTitle tag="h5" className="dark-cyan-text fancy-font">Fight</CardTitle>
                <CardText>
                  Find out how to put your thoughts into action and spread the word about the problems behind the prenatal screening for Down’s syndrome.
                </CardText>
              </CardBody>
              <CardFooter>
                <p className="text-center mb-0">
                  <Link className="btn btn-outline-red" to="fight">find out more</Link>
                </p>
              </CardFooter>
            </Card>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default FindOutMore;