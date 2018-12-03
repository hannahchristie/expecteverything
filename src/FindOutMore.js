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
          <MDBCol>
            <Card border="dark" className="mb-3" style={{maxWidth: '18rem', minHeight: '17rem'}}>
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
          <MDBCol>
            <Card border="dark" className="mb-3" style={{maxWidth: '18rem', minHeight: '17rem'}}>
              <CardBody className="text-primary">
                <CardTitle tag="h5" className="dark-cyan-text fancy-font">Discover</CardTitle>
                <CardText>
                  Find out about the social model of disability, the neurodiversity movement and important ongoing
                  conversations about the nature of ‘normal’.
                </CardText>
              </CardBody>
              <CardFooter>
                <p className="text-center mb-0">
                  <Link className="btn btn-outline-red" to="discover">find out more</Link>
                </p>
              </CardFooter>
            </Card>
          </MDBCol>
          <MDBCol>
            <Card border="dark" className="mb-3" style={{maxWidth: '18rem', minHeight: '17rem'}}>
              <CardBody className="text-primary">
                <CardTitle tag="h5" className="dark-cyan-text fancy-font">Fight</CardTitle>
                <CardText>
                  Find out where you stand, how to put your thoughts into action and spread the word about the
                  problems behind the pregnancy screening for Down’s syndrome.
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