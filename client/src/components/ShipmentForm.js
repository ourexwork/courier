import React, { Component } from 'react';
import propTypes from 'prop-types';
import clsx from 'clsx';
// Material-ui Core
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Slide from '@material-ui/core/Slide';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
// Material-ui Icon
import LocationOn from '@material-ui/icons/LocationOn';
// GeoSuggest
import GeoSuggest from 'react-geosuggest';

import { withStyles } from '@material-ui/core/styles';

// custom material-ui Jss
import { shipmentFormStyle } from './MaterialUi/jss/shipmentFormStyle';

class ShipmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      weight: '',
      quantity: '',
      shipmentMode: 'road',
      shipmentFiles: [],
      pickupAddress: {},
      deliveryAddress: {},
      recieverName: '',
      receiverEmail: '',
      receiverPhoneNumber: '',
      activeStep: 0,
      btnSlide: true,
      revealForm: false
    };
  }

  _onPickUpSuggestSelect = (suggest = {}) => {
    const { description = '', location = {}, gmaps = [] } = suggest;
    const pickupAddress = {
      description,
      location,
      country: gmaps.length === 1 ? gmaps.address_components[6].long_name : ''
    };

    if (Object.keys(suggest).length > 1) {
      this.setState({ pickupAddress });
    }
  };

  _onDestinationSuggestSelect = (suggest = {}) => {
    const { description = '', location = {}, gmaps = [] } = suggest;
    const deliveryAddress = {
      description,
      location,
      country: gmaps.length === 1 ? gmaps.address_components[6].long_name : ''
    };

    if (Object.keys(suggest).length > 1) {
      this.setState({ deliveryAddress, btnSlide: true });
    } else {
      this.setState({ btnSlide: false });
    }
  };

  getSteps = () => {
    return ['Shipment Details', 'Upload File', 'Reciever Details'];
  };

  nextStep = () => {
    this.setState({
      activeStep: this.state.activeStep + 1
    });
  };

  previousStep = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    });
  };

  // isStepOptional = step => step === 1;

  // handles the shipment mode
  handleShipmentMode = event => {
    const shipmentMode = event.target.value;
    this.setState({
      shipmentMode
    });
  };

  getStepContents = (step, classes) => {
    switch (step) {
      case 0:
        return (
          <div>
            <TextField
              id='standard-name'
              label='Name'
              className={classes.textField}
              margin='normal'
            />

            <TextField
              id='standard-name'
              label='Description'
              className={classes.textField}
              margin='normal'
            />
            <TextField
              id='standard-name'
              label='Weight'
              className={classes.textField}
              margin='normal'
            />
            <TextField
              id='standard-name'
              label='Quantity'
              className={classes.textField}
              margin='normal'
            />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor='shimpent-mode'>Shipment Mode</InputLabel>
              <Select
                value={this.state.shipmentMode}
                onChange={this.handleShipmentMode}
              >
                <MenuItem value={'road'}>Road</MenuItem>
                <MenuItem value={'air'}>Air</MenuItem>
                <MenuItem value={'sea'}>Sea</MenuItem>
                <MenuItem value={'rail'}>Rail</MenuItem>
              </Select>
            </FormControl>
          </div>
        );
      case 1:
        return 2; //another part of the form
      default:
        return;
    }
  };

  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    return (
      <div className={classes.shipment}>
        <form>
          <div className='shipment__address'>
            <Paper>
              <LocationOn className='geosuggest__input-icon' />
              <GeoSuggest
                placeholder='Pickup Address'
                autoFocus
                onSuggestSelect={this._onPickUpSuggestSelect}
              />
            </Paper>
            <Paper>
              <LocationOn className='geosuggest__input-icon' />
              <GeoSuggest
                placeholder='Delivery Address'
                onSuggestSelect={this._onDestinationSuggestSelect}
              />
            </Paper>
          </div>
          <div
            className={
              this.state.revealForm
                ? 'shipment__details--reveal'
                : 'shipment__details '
            }
          >
            <Paper>
              <Stepper activeStep={this.state.activeStep} connector>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  // if (this.state.activeStep <= steps.length) {
                  //   stepProps.completed = false;
                  // }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              <div style={{ textAlign: 'center', paddingBottom: '15px' }}>
                {this.state.activeStep === steps.length ? (
                  // render a click to pay button
                  <Button>Make Payment</Button>
                ) : (
                  <div className='shipment__details-wrapper'>
                    {this.getStepContents(this.state.activeStep, classes)}

                    <Button
                      disabled={this.state.activeStep === 0}
                      onClick={this.previousStep}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={this.nextStep}
                      className={classes.button}
                    >
                      {this.state.activeStep === steps.length - 1
                        ? 'Finish'
                        : 'Next'}
                    </Button>
                  </div>
                )}
              </div>
            </Paper>
          </div>
          <Slide
            direction='up'
            in={this.state.btnSlide}
            mountOnEnter
            unmountOnExit
          >
            <div className={classes.proceedButton}>
              <Button
                variant='contained'
                color='primary'
                onClick={() => this.setState({ revealForm: true })}
                size='large'
              >
                Proceed
              </Button>
            </div>
          </Slide>
        </form>
      </div>
    );
  }
}

ShipmentForm.propTypes = {
  classes: propTypes.object.isRequired
};

export default withStyles(shipmentFormStyle)(ShipmentForm);
