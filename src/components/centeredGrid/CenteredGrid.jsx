import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./centeredGrid.css";
import PaperFour from '../PaperFour/PaperFour';
import RadarChart from '../radarChart/RadarChart';
import PaperThree from '../paperThree/PaperThree';
import PaperThreeB from '../paperThreeB/PaperThreeB';
import PaperSix from '../paperSix/PaperSix';
import { Build } from '@material-ui/icons';
import PaperEight from '../paperEight/PaperEight';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className="grid">
                <Grid container spacing={2}>

                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <PaperFour/>
                            
                        </Paper>
                    </Grid>

                    <Grid item xs={8} spacing={2}>

                        
                        <Grid container spacing={2} >
                            <Grid item xs={3}>
                                <Paper className={classes.paper}>
                                    <PaperThree/>
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper className={classes.paper}>
                                    <PaperThreeB/>
                                </Paper>
                            </Grid>

                            <Grid item xs={6}>
                                <Paper className={classes.paper}>
                                    <PaperSix/>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Paper className={classes.paper}>
                            <PaperEight/>
                        </Paper>
                    </Grid>



                </Grid>
            </div>
        </div>
    );
}