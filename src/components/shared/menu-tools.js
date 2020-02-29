import React from "react"
import { Link } from "gatsby"

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const MenuTools = () => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root}>
      <ListItem><Link to="/cpf">CPF</Link></ListItem>
      <Divider />
      <ListItem><Link to="/cnpj">CNPJ</Link></ListItem>
      <Divider />
      <ListItem><Link to="/dados-pessoais">Dados pessoais</Link></ListItem>
      <Divider />
      <ListItem><Link to="/numero-aleatorio">Número aleatório</Link></ListItem>
    </List>
  )
}

export default MenuTools
