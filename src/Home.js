import React, { Component } from 'react';
import {
  MDBRow,
  MDBCol,
  Popover,
  PopoverBody,
} from 'mdbreact';
import FindOutMore from './FindOutMore';

class Home extends Component {
  render () {
    return (
      <div>
        <FindOutMore/>
        <MDBRow>
          <MDBCol>
            <p className="mt-3 lead">
              During your pregnancy with your care under the NHS you will be offered many different scans, tests and
              options regarding your antenatal care and birthing plans. As explained in the video, #EXPECTEVERYTHING
              believes that the <span className="inline-popover"> <Popover
              component="u"
              placement="top"
              popoverBody="screening for Down's syndrome"
              className="text-underline">
                  <PopoverBody>
                    NHS Online (2018) available: <a
                    href="https://www.nhs.uk/conditions/pregnancy-and-baby/screening-tests-abnormality-pregnant/">
                    https://www.nhs.uk/conditions/pregnancy-and-baby/screening-tests-abnormality-pregnant/
                  </a>.
                  </PopoverBody>
                </Popover>
                </span> must be called into question.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe title="Expect Everything" className="embed-responsive-item"
                      src="https://www.youtube.com/embed/dsvdl9s7TWM?&theme=dark&autohide=2&modestbranding=1&fs=0&showinfo=0&rel=0"
                      frameBorder="0" allowFullScreen/>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default Home;