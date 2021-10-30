import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import styles from './Panel.module.css';
import {
  CropFreeOutlined,
  FilterListOutlined,
  FormatListBulletedOutlined,
  SettingsOutlined,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  firstContainer: {
    paddingTop: theme.spacing(10),
    marginTop: theme.spacing(3),
  },
  panelTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#222',
    fontFamily: 'Roboto',
  },
  panelTitleIcons: {
    marginTop: '24px',
    cursor: 'pointer',
  },
  icons: {
    marginRight: theme.spacing(2),
  },
  midIcon: {
    marginRight: theme.spacing(2),
    color: '#11AABB',
  },
  description: {
    maxWidth: '100px',
    textAlign: 'left',
  },
}));

const Panel = () => {
  const classes = useStyles();

  return (
    <Container className={classes.firstContainer}>
      <div className={classes.panelTitle}>
        <div>
          <span className={styles.spanTitle}>Acessos > Configurações</span>
          <h1 className={styles.title}>Configurações</h1>
        </div>
        <div className={classes.panelTitleIcons}>
          <FilterListOutlined className={classes.icons} />
          <FormatListBulletedOutlined className={classes.midIcon} />
          <CropFreeOutlined className={classes.icons} />
        </div>
      </div>
      <Container className={styles.secondContainer}>
        <Container className={styles.thirdContainer}>
          <table>
            <tr>
              <th>Perfil</th>
              <th>Descrição</th>
              <th>Ações</th>
            </tr>
            <tr>
              <td>Tipo de Perfil</td>
              <td className={classes.description}>
                Funcionalidade A, funcionalidade B, funcionalidade C
                funcionalidade D e funcionalidade E
              </td>
              <td>
                <SettingsOutlined className={styles.settingsIcon} />
              </td>
            </tr>
            <tr>
              <td>Tipo de Perfil</td>
              <td className={classes.description}>
                Funcionalidade A, funcionalidade B, funcionalidade C
                funcionalidade D e funcionalidade E
              </td>
              <td>
                <SettingsOutlined className={styles.settingsIcon} />
              </td>
            </tr>
            <tr>
              <td>Tipo de Perfil</td>
              <td className={classes.description}>
                Funcionalidade A, funcionalidade B, funcionalidade C
                funcionalidade D e funcionalidade E
              </td>
              <td>
                <SettingsOutlined className={styles.settingsIcon} />
              </td>
            </tr>
            <tr>
              <td>Tipo de Perfil</td>
              <td className={classes.description}>
                Funcionalidade A, funcionalidade B, funcionalidade C
                funcionalidade D e funcionalidade E
              </td>
              <td>
                <SettingsOutlined className={styles.settingsIcon} />
              </td>
            </tr>
            <tr>
              <td>Tipo de Perfil</td>
              <td className={classes.description}>
                Funcionalidade A, funcionalidade B, funcionalidade C
                funcionalidade D e funcionalidade E
              </td>
              <td>
                <SettingsOutlined className={styles.settingsIcon} />
              </td>
            </tr>
          </table>
          <div className={styles.pagination}>
            Linhas por página 5 <span className={styles.arrowDown}> ▼ </span>
            1-5 de 1200 <span className={styles.doubleLeftArrow}> ᐸᐸ </span>
            <span className={styles.arrowLeft}> ᐸ </span>
            <span className={styles.arrowRight}> ᐳ </span>
            <span className={styles.doubleRightArrow}> ᐳᐳ </span>
          </div>
        </Container>
        <button>Novo Perfil</button>
      </Container>
      <footer>©2021 Todos os direitos reservados por StudioZ</footer>
    </Container>
  );
};

export default Panel;
