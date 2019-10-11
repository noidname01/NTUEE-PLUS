import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from './Logo';

const useStyles = makeStyles(theme => ({
  root: {
    //flexGrow: 1,
    position:'fixed',
    zIndex:1,
    maxWidth:'100%'
  },
  menuButton: {
    marginRight: theme.spacing(1),
    height:'100%',
    color:'#6AFFC6',
    fontSize: 14,
    fontWeight:'Bold',
    '&:hover':{
      color:'black',
    },
    '&$selected': {
      color: '#1138FF',
    },
    '&:focus': {
      color: '#3238FF',
    },
  },
  bar:{
    flexGrow: 1,
    position:"static",
    marginRight:theme.spacing(100),
    backgroundColor:'#FFFFFF',
    height:90
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.bar}>
        <Toolbar>
          <Typography className={classes.title}>
            <Logo/>
          </Typography>
          <Button className={classes.menuButton} >ABOUT US</Button>
          <Button className={classes.menuButton} >CONTACT US</Button>
          <Button className={classes.menuButton} >SUPPORT US</Button>
          <Button className={classes.menuButton} >LOGIN</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}