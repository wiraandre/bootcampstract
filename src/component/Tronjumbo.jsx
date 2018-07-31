import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './Edit.css';

const Tronjumbo = props => {
  return (
    <div>
      <Jumbotron className="Tronjumbo">
        <h1 className="display-3">Belajar Jadi Asik!</h1>
        <p className="lead">
          Kegiatan Belajar Intensif Programming dan Qur'an bersama Santren
          Koding.
        </p>

        <p className="lead">
          <Button color="primary">Mulai Belajar</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Tronjumbo;
