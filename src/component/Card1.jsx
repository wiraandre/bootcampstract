import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

const Card1 = props => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <Card>
              <img
                width="100%"
                src="https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg"
                alt="Card image cap"
              />
              <CardBody>
                <CardText>
                  <h5>Kajian Koding #3</h5>
                  ReactJS dan Firebase Auth/Hosting
                </CardText>
                <CardLink href="#">by ndre</CardLink>
                <CardLink href="#">kuota terbatas</CardLink>
              </CardBody>
            </Card>
          </div>
          <div class="col-sm">
            {' '}
            <Card>
              <img
                width="100%"
                src="https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381"
                alt="Card image cap"
              />
              <CardBody>
                <CardText>
                  {' '}
                  <h5>Kajian Koding #2</h5>
                  html, css, boostrap dasar
                </CardText>
                <CardLink href="#">by ndre</CardLink>
                <CardLink href="#">kuota terbatas</CardLink>
              </CardBody>
            </Card>
          </div>
          <div class="col-sm">
            {' '}
            <Card>
              <img
                width="100%"
                src="https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572"
                alt="Card image cap"
              />
              <CardBody>
                <CardText>
                  {' '}
                  <h5>Kajian Koding #1</h5>Belajar Laravel Dasar
                </CardText>
                <CardLink href="#">by ndre</CardLink>
                <CardLink href="#">kuota terbatas</CardLink>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>{' '}
      <div align="center" class="col">
        <br />
        <Button outline color="success">
          lihat seluruh kajian koding
        </Button>{' '}
      </div>
    </div>
  );
};

export default Card1;
