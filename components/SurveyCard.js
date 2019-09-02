import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
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


export default function SurveyCard(props) {
    const classes = useStyles();

    return (
        <Fragment>
            <Grid item key={1} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Gatsby"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Gatsby
                    </Typography>
                    <Typography>
                        Glitz & Glam Sparkles 1920's vintage
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        View
                    </Button>
                    <Button size="small" color="primary">
                        I want this!
                    </Button>
                </CardActions>
                </Card>
            </Grid>

            <Grid item key={1} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Gatsby"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Enchanted Forest
                    </Typography>
                    <Typography>
                        Leaves, Trees and Flowers. Fairy Lights and Whimsical Touches
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        View
                    </Button>
                    <Button size="small" color="primary">
                        I want this!
                    </Button>
                </CardActions>
                </Card>
            </Grid>

            <Grid item key={1} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Gatsby"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Black & White
                    </Typography>
                    <Typography>
                        Formal Elegant Black & White
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        View
                    </Button>
                    <Button size="small" color="primary">
                        I want this!
                    </Button>
                </CardActions>
                </Card>
            </Grid>

            <Grid item key={1} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Gatsby"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Cirque Du Soleil
                    </Typography>
                    <Typography>
                        Circus & Carnivals. Colorful, Avant Garde & Unique
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        View
                    </Button>
                    <Button size="small" color="primary">
                        I want this!
                    </Button>
                </CardActions>
                </Card>
            </Grid>
        </Fragment>
    )
}