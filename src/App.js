import React from 'react';
import './App.css';
import { Grid, Typography } from '@material-ui/core';
import Navbar from './components/Navbar';
import Leftbar from './components/Leftbar';
import Panel from './components/Panel';
import { CheckCircleOutline } from '@material-ui/icons';

const App = () => {
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={3}>
          <Leftbar />
        </Grid>
        <Grid item sm={9}>
          <Panel />
        </Grid>
      </Grid>
      <section class="modal-container">
        <div class="modal">
          <div>
            <div className="modalItem">
              <CheckCircleOutline className="checkIcon" />
              <Typography className="modalText">
                Realmente deseja salvar a alteração de configuração de acesso?
              </Typography>
            </div>
            <div className="modalButtons">
              <button className="cancelButton">CANCELAR</button>
              <button className="confirmButton">CONFIRMAR</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
