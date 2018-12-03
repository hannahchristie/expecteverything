import React, { Component } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdbreact';

class Listen extends Component {
  render () {
    return (
      <div>
        <MDBRow>
          <MDBCol>
            <h3 className="mt-3 red-text fancy-font">Listen</h3>
            <p className="lead red-text">find out about the lived experience of Down’s syndrome and the problems behind the prenatal screening</p>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="8" sm="12">
            <p>Cupcake ipsum dolor sit amet jelly beans sweet roll bonbon jelly beans. Chocolate cake I love gummies
              apple pie sugar plum apple pie danish oat cake. Gummi bears jelly dragée.</p>
            <p>Pudding cake donut. Tart soufflé cake gummi bears. Jelly beans donut brownie jujubes gingerbread cake
              chupa chups gummies. Topping halvah caramels sweet roll ice cream candy canes.</p>
            <p>Carrot cake cotton candy croissant candy canes caramels sugar plum dessert tart chocolate bar. Icing
              muffin liquorice donut dragée macaroon chocolate cake jelly-o macaroon. Jelly-o icing halvah powder
              tootsie roll. Lollipop candy I love muffin pudding soufflé apple pie oat cake marzipan.</p>
            <p>I love halvah danish cookie cake. Candy canes candy I love candy canes marshmallow pastry lollipop apple
              pie gummies. Soufflé jujubes muffin cheesecake pudding dragée I love I love candy canes.</p>
            <p>Candy candy cheesecake. Macaroon chupa chups gummi bears gummies ice cream gummies topping dragée
              chocolate bar. Cotton candy sweet roll chupa chups halvah halvah gummies muffin I love.</p>
          </MDBCol>
          <MDBCol md="4" sm="12">
            <div className="text-right">
              <p className="fancy-font text-right dark-cyan-text">Further Reading</p>
            </div>
            <MDBListGroup>
              <MDBListGroupItem>Link 1</MDBListGroupItem>
              <MDBListGroupItem>Link 2</MDBListGroupItem>
              <MDBListGroupItem>Link 3</MDBListGroupItem>
              <MDBListGroupItem>Link 4</MDBListGroupItem>
            </MDBListGroup>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default Listen;