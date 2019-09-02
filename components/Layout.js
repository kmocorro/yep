import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {' © '}
        SunPower Fab4 {' '}
      {new Date().getFullYear()}
      {'. Built with ❤️ by '}
        <Tooltip title="https://kevinmocorro.com" placement="top">
        <Link color="inherit" href="https://kevinmocorro.com">
            kdm
        </Link>
        </Tooltip>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
        color: '#333'
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cards = [1, 2, 3, 4];

export default function Layout(props) {
    const classes = useStyles();

    return (
        <Fragment>
        <CssBaseline />
        <AppBar position="relative" style={{backgroundColor: '#fff', boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.2), 0px 0px 0px 1px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)    '}}>
            <Toolbar>
            <CameraIcon className={classes.icon}/>
            <Typography variant="h6" color="textPrimary" noWrap>
                meta/yep
            </Typography>
            </Toolbar>
        </AppBar>
        <main>
            {/* Hero unit */}
            <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                2019 Year-End Party Theme Survey
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    It's the Most Wonderful Time of the Year. Help us choose our theme on our 2019 Year-End party!
                </Typography>
                { /**
                <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                    <Grid item>
                    <Button variant="contained" color="primary">
                        Main call to action
                    </Button>
                    </Grid>
                    <Grid item>
                    <Button variant="outlined" color="primary">
                        Secondary action
                    </Button>
                    </Grid>
                </Grid>
                </div>
                 */ }
            </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
                {props.children}
            </Grid>
            </Container>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
            meta/yep
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Year-End Party Survey by Manufacturing Engineering Tool App 
            </Typography>
            <Copyright />
        </footer>
        {/* End footer */}
        </Fragment>
    );
}

Layout.propTypes = {
    children: PropTypes.node,
};