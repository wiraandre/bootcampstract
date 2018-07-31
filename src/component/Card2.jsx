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

const Card2 = props => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-4">
            {' '}
            <Card>
              <img
                width="100%"
                src="https://lh5.googleusercontent.com/e6ixy5iFrGuPwlZFn0oU0vPgqMT9zPKdmswiBbZJEVpSbH6L2gVlcKAKFAoz7n31T45ZsSx8tQ=w1191"
                alt="Card image cap"
              />
              <CardBody>
                <CardText>
                  {' '}
                  <h5>Kajian Koding #1 (coming soon)</h5>Belajar Laravel Dasar
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
          lihat seluruh santren kilat
        </Button>{' '}
      </div>
    </div>
  );
};

export default Card2;
