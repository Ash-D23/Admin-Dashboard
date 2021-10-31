import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import './topbar.css'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userRedux";

const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));


function Topbar() {
  const dispatch = useDispatch();

  const handlelogout = () => {
    localStorage.removeItem('persist:root');
    localStorage.removeItem('token');
    dispatch(logout())
  }

    const classes = useStyles();
    return (
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}><Link className="Link" to="/">ADMIN PANEL</Link></Typography>
            <Link className="Link" to="/products"><Button color="inherit">Products</Button></Link>
            <Button color="inherit" onClick={handlelogout}> Logout </Button>
        </Toolbar>
        </AppBar>
    );
}

export default Topbar;
