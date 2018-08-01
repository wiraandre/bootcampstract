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

const Card3 = props => {
  return (
    <div>
      <div class="container align='center'">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-4 col-lg-4" />
          <div class="col-12 col-sm-12 col-md-6 col-lg-4">
            {' '}
            <Card>
              <img
                width="100%"
                src="http://i67.tinypic.com/2m2gkyp.png"
                alt="Card image cap"
              />
            </Card>
          </div>
        </div>
      </div>{' '}
      <div align="center" class="col">
        <br />
        <Button outline color="success">
          lihat selengkapnya
        </Button>{' '}
        <br />
        <hr />
      </div>
    </div>
  );
};

export default Card3;
