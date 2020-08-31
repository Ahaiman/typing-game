import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';


const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#A9A9A9',
    borderRadius: 1,
  },

})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#A9A9A9',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;
  const icons = {
      1: <SettingsIcon />,
      2: <GroupAddIcon />,
      3:<VideoLabelIcon />
  }

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#ca96d6',
  },
  button: {
    marginRight: theme.spacing(1),
    color: 'white'
  },
  step:{
    backgroundColor: '#FFEBCD',
  }

}));

function getSteps() {
  return ['Home', 'Time Submit', 'Game'];
}

function getLinks (){
  return ["/", "/home", "/game"];
} 

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const links = getLinks();

const handleNext = () => {
  setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  
  return (
    <div className= {classes.root}>
      <Stepper className = {classes.step} alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
            {label}  
              </StepLabel>
            </Step>
        ))}
      </Stepper>

      <div>
        {activeStep === steps.length ? (
          <div>
            <Link className = 'text-link' to = {links[0]}>
              <Button 
              onClick={handleReset} 
              className={classes.button}
              variant="contained"
              >Reset</Button>
            </Link>
          </div>
        ) :
            (<div>
                <Link className = 'text-link' to = {links[activeStep - 1]}>
                  <Button 
                  disabled={activeStep === 0} 
                  color="secondary"
                  variant="contained"
                  onClick={handleBack} 
                  className={classes.button}>Back</Button>
                </Link>
              
              
                 <Link className='text-link' to = {links[activeStep + 1]}>
                    <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleNext}
                    className={classes.button}>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                 </Link>
            </div>)}
      </div>
     </div>
  );
}
