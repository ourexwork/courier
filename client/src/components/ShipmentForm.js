import React, { Component } from 'react';
import propTypes from 'prop-types';
import clsx from 'clsx';
// Material-ui Core
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
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

import { DropzoneArea } from 'material-ui-dropzone';

import { withStyles } from '@material-ui/core/styles';

// custom material-ui Jss
import { shipmentFormStyle } from './MaterialUi/jss/shipmentFormStyle';

// Our Map Component
import Maps from './Maps/Maps';

class ShipmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: { value: '', error: '' },
      description: { value: '', error: '' },
      weight: { value: '', error: '' },
      quantity: { value: '', error: '' },
      shipmentMode: 'road',
      shipmentFiles: [1, 2, 3],
      pickupAddress: {},
      deliveryAddress: {},
      recieverName: { value: '', error: '' },
      receiverEmail: { value: '', error: '' },
      receiverPhoneNumber: { value: '', error: '' },
      activeStep: 0,
      btnSlide: true,
      revealForm: false
    };
  }

  _onPickUpSuggestSelect = (suggest = {}) => {
    const { description = '', location = {}, gmaps = {} } = suggest;
    let country;
    // Check if gmaps has a property of address component
    if (Object.keys(gmaps).includes('address_components')) {
      country = gmaps.address_components[6].long_name;
    } else {
      country = '';
    }

    const pickupAddress = {
      description,
      location,
      country
    };

    if (Object.keys(suggest).length > 1) {
      this.setState({ pickupAddress });
    }
  };

  _onDestinationSuggestSelect = (suggest = {}) => {
    const { description = '', location = {}, gmaps = {} } = suggest;
    let country;
    // Check if gmaps has a property of address component
    if (Object.keys(gmaps).includes('address_components')) {
      country = gmaps.address_components[6].long_name;
    } else {
      country = '';
    }

    const deliveryAddress = {
      description,
      location,
      country
    };

    if (Object.keys(suggest).length > 1) {
      this.setState({ deliveryAddress, btnSlide: true });
    } else {
      this.setState({ btnSlide: false });
    }
  };

  getSteps = () => {
    return ['Shipment Details', 'Upload Images', "Reciever's Details"];
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

  // *********HANDLE ALL FORM DATA ****************

  // Title or Name
  handleTitleChange = event => {
    const title = event.target.value;
    // first check if the title is more than 50 chars
    if (title.length === 0) {
      this.setState({
        name: {
          value: '',
          error: 'Title cannot be empty'
        }
      });
    } else if (title.length > 50) {
      // set the error
      this.setState({
        name: {
          value: '',
          error: 'Title cannot have more than 50 chars'
        }
      });
    } else {
      this.setState({
        name: {
          value: title,
          error: ''
        }
      });
    }
  };

  // Description
  handleDescriptionChange = event => {
    const description = event.target.value;
    if (description.length === 0) {
      this.setState({
        description: {
          value: '',
          error: 'Description cannot be empty'
        }
      });
    } else if (description.length > 150) {
      // set the error
      this.setState({
        description: {
          value: '',
          error: 'description cannot be more than 50 chars'
        }
      });
    } else {
      // set the value
      this.setState({
        description: {
          value: description,
          error: ''
        }
      });
    }
  };

  // Weight
  handleWeightChange = event => {
    let weight = event.target.value;
    // check if the weight value is a number
    if (weight.length === 0) {
      this.setState({
        weight: {
          value: '',
          error: 'Weight value cannot be empty!'
        }
      });
    } else if (isNaN(weight)) {
      this.setState({
        weight: {
          value: '',
          error: 'Invalid field values, alphanumeric values not allowed!!'
        }
      });
    } else {
      // parse the weight as float and set it
      this.setState({
        weight: {
          value: weight,
          error: ''
        }
      });
    }
  };

  // Handle Quantity
  handleQuantityChange = event => {
    let quantity = event.target.value;
    if (quantity.length === 0) {
      this.setState({
        quantity: {
          value: '',
          error: 'quantity value cannot be empty!'
        }
      });
    } else if (quantity <= 0 || isNaN(quantity)) {
      this.setState({
        quantity: {
          value: '',
          error: 'Quantity cannot have (zero|negative|alphanumeric) values.'
        }
      });
    } else {
      // round the quantity as float and set it
      quantity = Math.round(parseInt(quantity, 10));
      this.setState({
        quantity: {
          value: quantity,
          error: ''
        }
      });
    }
  };

  // handles the shipment mode
  handleShipmentMode = event => {
    const shipmentMode = event.target.value;
    this.setState({
      shipmentMode
    });
  };

  // Handling Files
  onFilesSelected = files => {
    this.setState({
      shipmentFiles: files
    });
  };

  // Handle Receiver's Details
  handleReceiverName = event => {
    const name = event.target.value;
    // first check if the title is more than 50 chars
    if (name.length === 0) {
      this.setState({
        recieverName: {
          value: '',
          error: 'Name cannot be empty'
        }
      });
    } else if (name.length > 50) {
      // set the error
      this.setState({
        recieverName: {
          value: '',
          error: 'Name cannot have more than 50 chars'
        }
      });
    } else {
      this.setState({
        recieverName: {
          value: name,
          error: ''
        }
      });
    }
  };

  isStepCompleted(step) {
    switch (step) {
      case 0:
        return !(
          !!this.state.name.value &&
          !!this.state.description.value &&
          !!this.state.quantity.value &&
          !!this.state.weight.value
        );
      case 1:
        return this.state.shipmentFiles.length < 3 ? true : false;
      default:
        break;
    }
  }

  getStepContents = (step, classes) => {
    switch (step) {
      case 0:
        // Shipment Details
        return (
          <div>
            <FormControl
              className={classes.formControl}
              required
              error={this.state.name.error}
            >
              <InputLabel htmlFor='title-error'>Title</InputLabel>
              <Input
                id='standard-title'
                aria-describedby='title-error-text'
                value={this.state.name.value}
                onChange={this.handleTitleChange}
                onBlur={this.handleTitleChange}
              />
              {this.state.name.error && (
                <FormHelperText id='title-error-text'>
                  {this.state.name.error}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              className={classes.formControl}
              required
              error={this.state.description.error}
            >
              <InputLabel htmlFor='description-error'>Description</InputLabel>
              <Input
                id='standard-description'
                aria-describedby='description-error-text'
                value={this.state.description.value}
                onChange={this.handleDescriptionChange}
                onBlur={this.handleDescriptionChange}
              />
              {this.state.description.error && (
                <FormHelperText id='description-error-text'>
                  {this.state.description.error}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl
              className={classes.formControl}
              required
              error={this.state.weight.error}
            >
              <InputLabel htmlFor='weight-error'>Weight(Kg)</InputLabel>
              <Input
                id='standard-weight'
                aria-describedby='weight-error-text'
                value={this.state.weight.value}
                onChange={this.handleWeightChange}
                onBlur={this.handleWeightChange}
              />
              {this.state.weight.error && (
                <FormHelperText id='weight-error-text'>
                  {this.state.weight.error}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              className={classes.formControl}
              required
              error={this.state.quantity.error}
            >
              <InputLabel htmlFor='quantity-error'>Quantity</InputLabel>
              <Input
                id='standard-quantity'
                aria-describedby='quantity-error-text'
                value={this.state.quantity.value}
                onChange={this.handleQuantityChange}
                onBlur={this.handleQuantityChange}
              />
              {this.state.quantity.error && (
                <FormHelperText id='quantity-error-text'>
                  {this.state.quantity.error}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor='shimpent-mode'>Shipment Mode</InputLabel>
              <Select
                required
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
        // Image upload form
        return (
          <DropzoneArea
            onChange={this.onFilesSelected}
            filesLimit={3}
            acceptedFiles={['image/jpg', 'image/jpeg', 'image/png']}
            maxFileSize={2000000} //2MB
          />
        );
      case 2:
        return (
          <div>
            <FormControl
              className={classes.formControl}
              required
              error={this.state.recieverName.error}
            >
              <InputLabel htmlFor='name-error'>Receiver's Name</InputLabel>
              <Input
                id='standard-name'
                aria-describedby='name-error-text'
                value={this.state.recieverName.value}
                onChange={this.handleReceiverName}
                onBlur={this.handleReceiverName}
              />
              {this.state.recieverName.error && (
                <FormHelperText id='name-error-text'>
                  {this.state.recieverName.error}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl
              className={classes.formControl}
              required
              error={this.state.receiverEmail.error}
            >
              <InputLabel htmlFor='title-error'>Receiver's Email</InputLabel>
              <Input
                id='standard-title'
                aria-describedby='title-error-text'
                value={this.state.receiverEmail.value}
                onChange={this.handleTitleChange}
                onBlur={this.handleTitleChange}
              />
              {this.state.receiverEmail.error && (
                <FormHelperText id='title-error-text'>
                  {this.state.receiverEmail.error}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl
              className={classes.formControl}
              required
              error={this.state.receiverPhoneNumber.error}
            >
              <InputLabel htmlFor='title-error'>
                Reciever's PhoneNumber
              </InputLabel>
              <Input
                id='standard-title'
                aria-describedby='title-error-text'
                value={this.state.receiverPhoneNumber.value}
                onChange={this.handleTitleChange}
                onBlur={this.handleTitleChange}
              />
              {this.state.receiverPhoneNumber.error && (
                <FormHelperText id='title-error-text'>
                  {this.state.receiverPhoneNumber.error}
                </FormHelperText>
              )}
            </FormControl>
          </div>
        );
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
          <Grid
            container
            direction='row'
            alignItems='center'
            justify='space-between'
            spacing={10}
          >
            <Grid item md={6}>
              <Paper>
                <LocationOn className='geosuggest__input-icon' />
                <GeoSuggest
                  placeholder='Pickup Address'
                  autoFocus
                  onSuggestSelect={this._onPickUpSuggestSelect}
                />
              </Paper>
            </Grid>
            <Grid item md={6}>
              <Paper>
                <LocationOn className='geosuggest__input-icon' />
                <GeoSuggest
                  placeholder='Delivery Address'
                  onSuggestSelect={this._onDestinationSuggestSelect}
                />
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={4}>
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
                    <div>
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
                        disabled={this.isStepCompleted(this.state.activeStep)}
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
            </Grid>

            <Grid item md={8}>
              <Paper>
                <Maps
                  isMarkerShown
                  locationRenderer={{
                    pickupAddress: this.state.pickupAddress.location,
                    deliveryAddress: this.state.deliveryAddress.location
                  }}
                />
              </Paper>
            </Grid>
          </Grid>

          {/*  <Slide
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
          </Slide>*/}
        </form>
      </div>
    );
  }
}

ShipmentForm.propTypes = {
  classes: propTypes.object.isRequired
};

export default withStyles(shipmentFormStyle)(ShipmentForm);
