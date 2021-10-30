import React from 'react';
import styles from './Leftbar.module.css';
import { Container, makeStyles, Typography } from '@material-ui/core';
import {
  AddBoxOutlined,
  BuildOutlined,
  DashboardOutlined,
  EditOutlined,
  ExitToAppOutlined,
  ListAltOutlined,
  LocalMallOutlined,
  OpenInBrowserOutlined,
  OpenInNewOutlined,
  PersonOutlineOutlined,
  PlaylistAddOutlined,
  SettingsOutlined,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
    color: '#11AABB',
  },
  text: {
    marginLeft: theme.spacing(2),
    fontWeight: 'bold',
    padding: '4px',
    cursor: 'pointer',
  },
  exit: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(2),
    color: '#11AABB',
  },
}));

const Leftbar = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={styles.leftbar}>
        <li className={styles.list}>
          <h2>PRODUTOS</h2>
          <div className={classes.item}>
            <DashboardOutlined className={classes.icon} />
            <Typography className={classes.text}>
              Listagem de Produtos
            </Typography>
          </div>
          <div className={classes.item}>
            <BuildOutlined className={classes.icon} />
            <Typography className={classes.text}>Configurar Padrões</Typography>
          </div>
        </li>
        <li className={styles.list}>
          <h2>CADASTRO</h2>
          <div className={classes.item}>
            <AddBoxOutlined className={classes.icon} />
            <Typography className={classes.text}>Cadastro Unitário</Typography>
          </div>
          <div className={classes.item}>
            <OpenInBrowserOutlined className={classes.icon} />
            <Typography className={classes.text}>Cadastro em Massa</Typography>
          </div>
          <div className={(classes.item, styles.monitoring)}>
            <OpenInNewOutlined className={classes.icon} />
            <Typography className={classes.text}>Acompanhamento</Typography>
          </div>
        </li>
        <li className={styles.list}>
          <h2>PEDIDOS</h2>
          <div className={classes.item}>
            <PlaylistAddOutlined className={classes.icon} />
            <Typography className={classes.text}>Novo Pré-Pedido</Typography>
          </div>
          <div className={classes.item}>
            <ListAltOutlined className={classes.icon} />
            <Typography className={classes.text}>
              Histórico de Pedidos
            </Typography>
          </div>
          <div className={classes.item}>
            <EditOutlined className={classes.icon} />
            <Typography className={classes.text}>
              Solicitação de Alteração
            </Typography>
          </div>
        </li>
        <li className={styles.list}>
          <h2>ACESSO</h2>
          <div className={classes.item}>
            <LocalMallOutlined className={classes.icon} />
            <Typography className={classes.text}>
              Usuários Fornecedores
            </Typography>
          </div>
          <div className={classes.item}>
            <PersonOutlineOutlined className={classes.icon} />
            <Typography className={classes.text}>
              Usuários Colaboradores
            </Typography>
          </div>
          <div className={(classes.item, styles.profiles)}>
            <SettingsOutlined className={classes.icon} />
            <Typography className={classes.text}>Perfis</Typography>
          </div>
          <div className={classes.exit}>
            <ExitToAppOutlined className={classes.icon} />
            <Typography className={classes.text}>SAIR</Typography>
          </div>
        </li>
      </div>
    </Container>
  );
};

export default Leftbar;
