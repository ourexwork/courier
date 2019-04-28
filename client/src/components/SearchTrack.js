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

  render() {
    return (
      <div className='container'>
        <form onSubmit={this._onSubmit}>
          <input
            value={this.state.trackid}
            onChange={this._validateTrackId}
            type='text'
            placeholder='Track your shipment(FXED1234)'
          />
          {this.state.trackError && <span>{this.state.trackError}</span>}
          <button type='submit'>Track</button>
        </form>
      </div>
    );
  }
}
