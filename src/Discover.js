import React, { Component } from 'react';
import {
  MDBRow,
  MDBCol,
} from 'mdbreact';
import Reference7 from './references/Reference7';
import Reference9 from './references/Reference9';
import Reference8 from './references/Reference8';
import Reference1 from './references/Reference1';

class Discover extends Component {
  render () {
    return (
      <MDBRow>
        <MDBCol>
          <div>
            <MDBRow>
              <MDBCol>
                <h3 className="mt-3 red-text fancy-font">Discover</h3>
                <p className="lead red-text">find out about the social model of disability, cognitive diversity and
                  valuing difference</p>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12" sm="12">
                <p>Taken from <Reference7 link="‘The New Atlantis’ website"/>: </p>

                <blockquote className="blockquote">
                  <p className="mb-0" style={{fontSize: '0.95rem'}}>One of the most famous stories of H. G. Wells, “The Country of the Blind” (1904),
                    depicts a society, enclosed in an isolated valley amid forbidding mountains, in which a strange and
                    persistent epidemic has rendered its members blind from birth. Their whole culture is reshaped
                    around this difference: their notion of beauty depends on the feel rather than the look of a face;
                    no windows adorn their houses; they work at night, when it is cool, and sleep during the day, when
                    it is hot. A mountain climber named Nunez stumbles upon this community and hopes that he will rule
                    over it: “In the Country of the Blind the One-Eyed Man is King,” he repeats to himself. Yet he comes
                    to find that his ability to see is not an asset but a burden. The houses are pitch-black inside, and
                    he loses fights to local warriors who possess extraordinary senses of touch and hearing. The blind
                    live with no knowledge of the sense of sight, and no need for it. They consider Nunez’s eyes to be
                    diseased, and mock his love for a beautiful woman whose face feels unattractive to them. When he
                    finally fails to defeat them, exhausted and beaten, he gives himself up. They ask him if he still
                    thinks he can see: “No,” he replies, “That was folly. The word means nothing — less than nothing!”
                    They enslave him because of his apparently subhuman disability. But when they propose to remove his
                    eyes to make him “normal,” he realizes the beauty of the mountains, the snow, the trees, the lines
                    in the rocks, and the crispness of the sky — and he climbs a mountain, attempting to escape.</p>
                </blockquote>

                <p>In the world described above the man with sight is the one who is different and as a result he
                  encounters barriers to his normal functioning in society. We can think of our own society in this way.
                  People with Down’s syndrome are undeniably different - but there is nothing ‘less’ about them. They
                  are just as capable of achievement, love, happiness and fulfilment as any other person and in some
                  respects are even more capable of appreciating the beauty around them.</p>

                <p>The reason why <Reference1 link="9/10 pregnancies in the UK"/> that test positively for Down’s syndrome are
                  terminated is because of the way that Down’s syndrome is viewed and talked about. It is because of
                  people’s concerns, worries and fears about having a child with Down’s syndrome. These are brought
                  about by the <Reference9 link="language used around Down’s syndrome."/></p>

                <p>Thinking in different ways is the key to enabling those with Down’s syndrome to be able to fulfil
                  their entire potential - it is society's attitudes, views, language and labels that disable those with
                  Down’s syndrome - and low expectations become self-fulfilling prophecies.</p>

                <p>Think of Down’s syndrome as a kind of ‘cognitive diversity’ - or another way of thinking. A different
                  way of thinking. A way of thinking that wouldn’t exist without that extra chromosome. If everybody
                  thought and acted in the same way, all of the time, society would stagnate. There would be no new
                  ideas, no new ways to tackle problems and no new ways to communicate. Cognitive diversity is not just
                  about accepting different ways of thinking and processing information but about truly valuing that
                  difference. Understanding that in that difference there is something unique and valuable. Every
                  account of living with or knowing an individual with Down’s syndrome that have been researched to
                  create this website have expressed the true value in having that individual in their life; not only
                  are individuals with Down’s syndrome in and of themselves living rich and full lives but they are
                  simultaneously enriching the lives of those around them. People with Down’s syndrome and those around
                  them are <Reference8 link="happier than the general population."/></p>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default Discover;