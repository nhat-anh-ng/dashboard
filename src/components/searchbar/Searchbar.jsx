import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function InputWithIcon() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <Search />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Search" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}