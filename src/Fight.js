import React, { Component } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdbreact';

class Fight extends Component {
  render () {
    return (
      <MDBRow>
        <MDBCol>
          <div>
            <MDBRow>
              <MDBCol>
                <h3 className="mt-3 red-text fancy-font">Fight</h3>
                <p className="lead red-text">find out where you stand, how to put your thoughts into action and spread
                  the word about the problems behind the pregnancy screening for Down’s syndrome</p>
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
                <p>I love halvah danish cookie cake. Candy canes candy I love candy canes marshmallow pastry lollipop
                  apple
                  pie gummies. Soufflé jujubes muffin cheesecake pudding dragée I love I love candy canes.</p>
                <p>Candy candy cheesecake. Macaroon chupa chups gummi bears gummies ice cream gummies topping dragée
                  chocolate bar. Cotton candy sweet roll chupa chups halvah halvah gummies muffin I love.</p>
              </MDBCol>
              <MDBCol md="4" sm="12">
                <div className="text-right">
                  <p className="fancy-font text-right dark-cyan-text">Further Reading</p>
                </div>
                <MDBListGroup>
                  <MDBListGroupItem>
                    <a className="red-text" href="https://dontscreenusout.org/">
                      The ‘Don’t Screen Us Out’ Campaign
                    </a>
                  </MDBListGroupItem>
                  <MDBListGroupItem>
                    <a className="red-text" href="https://www.youtube.com/watch?v=45am4xYR_-4">
                      ‘A World Without Down’s Syndrome’ Documentary:
                    </a>
                  </MDBListGroupItem>
                  <MDBListGroupItem>
                    <a className="red-text" href="http://www.savingdownsyndrome.org/ ">
                      Saving Down’s Syndrome - Advocating for People With Down’s Syndrome
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