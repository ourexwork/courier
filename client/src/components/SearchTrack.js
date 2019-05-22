import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

export default class SearchTrack extends Component {
  state = {
    trackId: '',
    trackError: ''
  };

  _validateTrackId = e => {
    const trackId = e.target.value;
    // validate the state

    if (trackId === 'fxd') {
      this.setState(() => ({
        trackId,
        trackError: ''
      }));
    } else {
      this.setState(() => ({
        trackError: 'Your Tracking Id is incorrect!'
      }));
    }
  };

  _onSubmit = e => {
    e.preventDefault();
    // dispatch an action
    // redirect the user
  };

  render() {
    return (
      <>
        <Form inline onSubmit={this._onSubmit}>
          <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
            <Input
              type='text'
              className='form__input'
              value={this.state.trackid}
              onChange={this._validateTrackId}
              id='searchTrack'
              placeholder='Track your shipment(FXED1234)'
            />
          </FormGroup>
          <Button outline size='lg'>
            Track
          </Button>
        </Form>

        {this.state.trackError && <span>{this.state.trackError}</span>}
      </>
    );
  }
}
