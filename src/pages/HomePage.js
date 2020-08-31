import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setTime } from "../redux/time"

import TextField from '@material-ui/core/TextField';
import HourglassEmpty from '@material-ui/icons/HourglassEmpty';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

 
export default function HomePage() {

  const time = useSelector(state => state.time);
  const dispatch = useDispatch();

  const submitButton = document.getElementById("submit");
  const textField = document.querySelector("input");
  
  const myChangeHandler = (event) => {
      const { value } = event.target;
      dispatch(setTime(value));
  }

  const handleSubmit = (event) => {
    submitButton.innerHTML = "submited!"
    textField.value = ""
    alert('A time was submitted:' +  time);
    event.preventDefault();
  }

  return (
    <div className = "home-page">
        <Grid 
            container 
            spacing = { 2 } 
            direction="row"
            justify="center"
            alignItems="center">
        <Grid item>
            <HourglassEmpty style = {{ fontSize: 40 } }/>
        </Grid>
        <Grid item >
            <TextField 
            name = {` "${ time }" `}
            label="Enter Time (in seconds) : " 
            onChange = { myChangeHandler } />
        <br/>
        <br/>
        <Button
              id = "submit"
              variant="contained"
              color="secondary"
              onClick={handleSubmit}>
              Submit
        </Button>
        </Grid>
        </Grid>
  </div>
);}

