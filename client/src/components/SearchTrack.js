import React, { Component } from 'react';

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
        <form className='form' onSubmit={this._onSubmit}>
          <input
            className='form__input'
            value={this.state.trackid}
            onChange={this._validateTrackId}
            type='text'
            placeholder='Track your shipment(FXED1234)'
          />
          {this.state.trackError && <span>{this.state.trackError}</span>}
          <button className='form__submit' type='submit'>
            Track
          </button>
        </form>
      </>
    );
  }
}
