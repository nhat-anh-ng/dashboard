import React, {useState} from 'react';
import DateFnsUtils from "@date-io/date-fns";
import {DatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import {Paper, Grid} from "@material-ui/core";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import {makeStyles} from "@material-ui/core/styles";
import { Face } from '@material-ui/icons';

const materialTheme = createMuiTheme({
    overrides: {
        MuiPickersToolbar: {
            toolbar: {
              backgroundColor: "#F5F9FF",
            },
        },
        MuiPickersCalendarHeader: {
            switchHeader: {
                backgroundColor: "white",
                color: "grey",
        },},},});

export const styles = makeStyles(() => ({ //define CSS for different date types
    notInThisMonthDayPaper: {
        width: "205px",
        height: "55px",
        backgroundColor: "#eeeeee",
        margin: "3px",
        boxShadow: "none",
        borderRadius: 0,
        padding: "1px",
    },
    normalDayPaper: {
        width: "205px",
        height: "55px",
        backgroundColor: "#F5F9FF",
        margin: "3px",
        boxShadow: "none",
        borderRadius: "5px",
        padding: "1px",
        cursor: "pointer",
    },
    selectedDayPaper: {
        width: "205px",
        height: "55px",
        backgroundColor: "#f9fbe7",
        margin: "3px",
        boxShadow: "none",
        borderRadius: 0,
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: "lime",
        padding: "1px",
        cursor: "pointer",
    },
    todayPaper: {
        width: "205px",
        height: "55px",
        backgroundColor: "lightGreen",
        margin: "3px",
        boxShadow: "none",
        borderRadius: 0,
        padding: "1px",
        cursor: "pointer",
        color: " white",
    },}));
export default function CustomCalendar() {
    const [selectedDate, handleDateChange] = useState(new Date());
    const classes = styles(); // import those CSS
    const today = new Date(); // just Date object of today
    const sunnyDays = [2, 6, 10, 24, 15] // array of sunny days 1st,6th etc
    
    function getDayElement(day, selectedDate, isInCurrentMonth, dayComponent) {
        //generate boolean 
        const isSunny = sunnyDays.includes(day.getDate()); 
        const isSelected = day.getDate() === selectedDate.getDate();
        const isToday = day.getDate() === today.getDate() && day.getMonth() === today.getMonth();

        let dateTile
        if (isInCurrentMonth) { //conditionally return appropriate Element of date tile.
            if (isSunny) {
                dateTile = (
                    <Paper className={isSelected ? classes.selectedDayPaper : isToday ? classes.todayPaper : classes.normalDayPaper}>
                        <Grid item><Face style={{color: "#1f95ee"}}/>2021 Strategy for Bundle</Grid>
                        <Grid item>
                            {day.getDate()}
                        </Grid>
                    </Paper>)
            } else {
                dateTile = (
                  <Paper className={isSelected ? classes.selectedDayPaper : isToday ? classes.todayPaper : classes.normalDayPaper}>   
                  <Grid item><br/></Grid>
                    <Grid item> {day.getDate()}</Grid>
                </Paper>)
            }

        } else {
            dateTile = (<Paper className={classes.notInThisMonthDayPaper}>
                <Grid item><br/></Grid>
                <Grid item style={{color: "lightGrey"}}>
                    {day.getDate()}
                </Grid>
            </Paper>)
        }
        return dateTile
    }
    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <ThemeProvider theme={materialTheme}>
                    <DatePicker
                        value={selectedDate}
                        onChange={handleDateChange}
                        variant="static"
                        // using our function 
                        renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) => getDayElement(day, selectedDate, isInCurrentMonth, dayComponent)}
                    />

                </ThemeProvider>
            </MuiPickersUtilsProvider>
          </div>
    );}